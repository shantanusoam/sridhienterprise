"use client";

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductGrid from '@/components/ProductGrid';
import ProductFilter from '@/components/ProductFilter';
import { ProductFilter as ProductFilterType } from '@/lib/companies';

// Note: metadata export is removed because this is now a client component
// You might want to move metadata to layout.tsx or create a separate server component wrapper

function ProductsContent() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<ProductFilterType>({});

  // Initialize filters from URL parameters
  useEffect(() => {
    const companyParam = searchParams?.get('company');
    if (companyParam) {
      setFilters({ companies: [companyParam] });
    }
  }, [searchParams]);

  const handleFilterChange = (newFilters: ProductFilterType) => {
    setFilters(newFilters);
  };

  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-red-600">
        Our Products
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <ProductFilter onFilterChange={handleFilterChange} />
        </div>
        <div className="w-full md:w-3/4">
          <ProductGrid filters={filters} />
        </div>
      </div>
    </>
  );
}

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-red-600 border-r-transparent"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        </div>
      }>
        <ProductsContent />
      </Suspense>
    </div>
  );
}
