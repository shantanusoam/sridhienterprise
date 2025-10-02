"use client";

import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { COLORS } from "@/lib/constants";
import { getProductCategories, companies, ProductFilter as ProductFilterType } from "@/lib/companies";
import { Search } from "lucide-react";

interface ProductFilterProps {
  onFilterChange: (filters: ProductFilterType) => void;
}

const ProductFilter = ({ onFilterChange }: ProductFilterProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);

  useEffect(() => {
    // Get unique categories and company names
    setCategories(getProductCategories());
    setBrands(companies.map(company => company.name));
  }, []);

  useEffect(() => {
    // Notify parent component of filter changes
    const filters: ProductFilterType = {};
    if (selectedCategories.length > 0) {
      filters.categories = selectedCategories;
    }
    if (selectedBrands.length > 0) {
      filters.companies = companies
        .filter(company => selectedBrands.includes(company.name))
        .map(company => company.id);
    }
    if (searchQuery.trim()) {
      filters.search = searchQuery.trim();
    }
    onFilterChange(filters);
  }, [selectedCategories, selectedBrands, searchQuery, onFilterChange]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-red-600">
        Filters
      </h2>
      
      {/* Search Input */}
      <div className="mb-6">
        <Label htmlFor="search" className="text-sm font-medium mb-2 block">
          Search Products
        </Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            id="search"
            type="text"
            placeholder="Search by name, category, or company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2 mb-2">
                <Checkbox
                  id={`category-${category}`}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => handleCategoryChange(category)}
                />
                <Label
                  htmlFor={`category-${category}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category}
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="brands">
          <AccordionTrigger>Companies</AccordionTrigger>
          <AccordionContent>
            {brands.map((brand) => (
              <div key={brand} className="flex items-center space-x-2 mb-2">
                <Checkbox
                  id={`brand-${brand}`}
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={() => handleBrandChange(brand)}
                />
                <Label
                  htmlFor={`brand-${brand}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {brand}
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductFilter;
