// Central export for all company data and utilities

import { Company, Product, CompanyStats, ProductFilter } from './types';
import { pnbKitchenmate } from './pnb-kitchenmate';
import { bhikharamChandmal } from './bhikharam-chandmal';
import { vaadiHerbals } from './vaadi-herbals';
import { sarlaMills } from './sarla-mills';
import { sevenSoftIndia } from './seven-soft-india';

// Export all companies
export const companies: Company[] = [
  pnbKitchenmate,
  bhikharamChandmal,
  vaadiHerbals,
  sarlaMills,
  sevenSoftIndia
];

// Export individual companies
export {
  pnbKitchenmate,
  bhikharamChandmal,
  vaadiHerbals,
  sarlaMills,
  sevenSoftIndia
};

// Export types
export * from './types';

// Utility functions
export const getCompanyById = (id: string): Company | undefined => {
  return companies.find(company => company.id === id);
};

export const getCompanyBySlug = (slug: string): Company | undefined => {
  return companies.find(company => company.slug === slug);
};

export const getAllProducts = (): Product[] => {
  return companies.flatMap(company => company.products);
};

export const getProductsByCompany = (companyId: string): Product[] => {
  const company = getCompanyById(companyId);
  return company ? company.products : [];
};

export const getProductsByCategory = (category: string): Product[] => {
  return getAllProducts().filter(product => 
    product.category.toLowerCase().includes(category.toLowerCase())
  );
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return getAllProducts().filter(product =>
    product.title.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.companyName.toLowerCase().includes(searchTerm) ||
    (product.description && product.description.toLowerCase().includes(searchTerm)) ||
    (product.tags && product.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
  );
};

export const filterProducts = (filters: ProductFilter): Product[] => {
  let filteredProducts = getAllProducts();

  if (filters.companies && filters.companies.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
      filters.companies!.includes(product.companyId)
    );
  }

  if (filters.categories && filters.categories.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
      filters.categories!.some(category =>
        product.category.toLowerCase().includes(category.toLowerCase())
      )
    );
  }

  if (filters.priceRange) {
    filteredProducts = filteredProducts.filter(product => {
      const price = product.salePrice || product.price || 0;
      return price >= filters.priceRange!.min && price <= filters.priceRange!.max;
    });
  }

  if (filters.availability && filters.availability.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
      filters.availability!.includes(product.availability)
    );
  }

  if (filters.search) {
    const searchResults = searchProducts(filters.search);
    filteredProducts = filteredProducts.filter(product =>
      searchResults.some(searchProduct => searchProduct.id === product.id)
    );
  }

  return filteredProducts;
};

export const getCompanyStats = (): CompanyStats => {
  const allProducts = getAllProducts();
  const categories = new Set(allProducts.map(product => product.category));
  
  return {
    totalCompanies: companies.length,
    totalProducts: allProducts.length,
    totalCategories: categories.size,
    featuredCompanies: companies.slice(0, 3).map(company => company.id)
  };
};

export const getFeaturedProducts = (limit: number = 6): Product[] => {
  const allProducts = getAllProducts();
  // Get products with sale prices (featured deals) or highly rated products
  const featuredProducts = allProducts.filter(product => 
    product.salePrice || product.rating && product.rating >= 4.5
  );
  
  return featuredProducts.slice(0, limit);
};

export const getCompanyCategories = (): string[] => {
  return [...new Set(companies.map(company => company.category))];
};

export const getProductCategories = (): string[] => {
  const allProducts = getAllProducts();
  return [...new Set(allProducts.map(product => product.category))];
};

export const getPriceRange = (): { min: number; max: number } => {
  const allProducts = getAllProducts();
  const prices = allProducts.map(product => product.salePrice || product.price || 0);
  
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
};

// Constants for easy access
export const COMPANY_IDS = {
  PNB_KITCHENMATE: 'pnb-kitchenmate',
  BHIKHARAM_CHANDMAL: 'bhikharam-chandmal',
  VAADI_HERBALS: 'vaadi-herbals',
  SARLA_MILLS: 'sarla-mills',
  SEVEN_SOFT_INDIA: 'seven-soft-india'
} as const;

export const COMPANY_SLUGS = {
  PNB_KITCHENMATE: 'pnb-kitchenmate',
  BHIKHARAM_CHANDMAL: 'bhikharam-chandmal',
  VAADI_HERBALS: 'vaadi-herbals',
  SARLA_MILLS: 'sarla-mills',
  SEVEN_SOFT_INDIA: 'seven-soft-india'
} as const;

