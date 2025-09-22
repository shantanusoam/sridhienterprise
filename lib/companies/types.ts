// Company and Product Type Definitions for Sridhi Enterprises

export interface Company {
  id: string;
  name: string;
  slug: string;
  description: string;
  website: string;
  logo?: string;
  coverImage?: string;
  category: string;
  brandColors: {
    primary: string;
    secondary: string;
    accent?: string;
  };
  contact?: {
    email?: string;
    phone?: string;
    address?: string;
    website?: string;
  };
  products: Product[];
  established?: number;
  specialties: string[];
  certifications?: string[];
  stats?: {
    totalProducts: number;
    avgRating?: number;
    yearsOfPartnership?: number;
  };
}

export interface Product {
  id: string;
  title: string;
  url: string;
  image?: string | null;
  regularPrice?: number;
  salePrice?: number;
  price?: number;
  category: string;
  subcategory?: string;
  availability: 'In stock' | 'Out of stock' | 'Limited stock';
  companyId: string;
  companyName: string;
  description?: string;
  features?: string[];
  specifications?: Record<string, string>;
  tags?: string[];
  rating?: number;
  reviews?: number;
}

export interface CompanyStats {
  totalCompanies: number;
  totalProducts: number;
  totalCategories: number;
  featuredCompanies: string[];
}

export interface ProductFilter {
  companies?: string[];
  categories?: string[];
  priceRange?: {
    min: number;
    max: number;
  };
  availability?: string[];
  search?: string;
}

// Helper types for component props
export interface CompanyCardProps {
  company: Company;
  showProducts?: boolean;
  className?: string;
}

export interface ProductCardProps {
  product: Product;
  showCompany?: boolean;
  className?: string;
}

export interface CompanyGridProps {
  companies: Company[];
  columns?: number;
  showProductCount?: boolean;
  className?: string;
}

export interface ProductGridProps {
  products: Product[];
  columns?: number;
  showPagination?: boolean;
  itemsPerPage?: number;
  className?: string;
}

