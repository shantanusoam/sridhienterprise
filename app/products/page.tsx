"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductGrid from "@/components/ProductGrid";
import ProductFilter from "@/components/ProductFilter";
import { COLORS } from "@/lib/constants";
import { ProductFilter as ProductFilterType } from "@/lib/companies";

// Note: metadata export is removed because this is now a client component
// You might want to move metadata to layout.tsx or create a separate server component wrapper

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<ProductFilterType>({});

  // Initialize filters from URL parameters
  useEffect(() => {
    const companyParam = searchParams.get('company');
    if (companyParam) {
      setFilters({ companies: [companyParam] });
    }
  }, [searchParams]);

  const handleFilterChange = (newFilters: ProductFilterType) => {
    setFilters(newFilters);
  };

  return (
    <div className="container mx-auto px-4 py-8">
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
    </div>
  );
}
