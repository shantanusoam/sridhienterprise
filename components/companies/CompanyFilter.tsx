'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import { Company } from '@/lib/companies/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface CompanyFilterProps {
  companies: Company[];
  onFilterChange: (filteredCompanies: Company[]) => void;
  className?: string;
}

interface FilterState {
  search: string;
  categories: string[];
  specialties: string[];
}

const CompanyFilter = ({ companies, onFilterChange, className = '' }: CompanyFilterProps) => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    categories: [],
    specialties: []
  });
  const [isExpanded, setIsExpanded] = useState(false);

  // Get unique categories and specialties
  const categories = [...new Set(companies.map(company => company.category))];
  const allSpecialties = companies.flatMap(company => company.specialties);
  const specialties = [...new Set(allSpecialties)].slice(0, 10); // Limit to top 10

  const applyFilters = (newFilters: FilterState) => {
    let filtered = companies;

    // Search filter
    if (newFilters.search.trim()) {
      const searchTerm = newFilters.search.toLowerCase();
      filtered = filtered.filter(company =>
        company.name.toLowerCase().includes(searchTerm) ||
        company.description.toLowerCase().includes(searchTerm) ||
        company.category.toLowerCase().includes(searchTerm) ||
        company.specialties.some(specialty => 
          specialty.toLowerCase().includes(searchTerm)
        )
      );
    }

    // Category filter
    if (newFilters.categories.length > 0) {
      filtered = filtered.filter(company =>
        newFilters.categories.includes(company.category)
      );
    }

    // Specialties filter
    if (newFilters.specialties.length > 0) {
      filtered = filtered.filter(company =>
        company.specialties.some(specialty =>
          newFilters.specialties.includes(specialty)
        )
      );
    }

    onFilterChange(filtered);
  };

  const handleSearchChange = (value: string) => {
    const newFilters = { ...filters, search: value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.categories, category]
      : filters.categories.filter(c => c !== category);
    
    const newFilters = { ...filters, categories: newCategories };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const handleSpecialtyChange = (specialty: string, checked: boolean) => {
    const newSpecialties = checked
      ? [...filters.specialties, specialty]
      : filters.specialties.filter(s => s !== specialty);
    
    const newFilters = { ...filters, specialties: newSpecialties };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const clearFilters = () => {
    const newFilters = { search: '', categories: [], specialties: [] };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const hasActiveFilters = filters.search || filters.categories.length > 0 || filters.specialties.length > 0;

  return (
    <div className={`bg-white rounded-lg border border-amber-200 shadow-sm ${className}`}>
      {/* Search Bar - Always Visible */}
      <div className="p-4 border-b border-amber-100">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search companies..."
            value={filters.search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10 border-amber-200 focus:border-amber-400 focus:ring-amber-200"
          />
        </div>
      </div>

      {/* Filter Toggle Button */}
      <div className="p-4 border-b border-amber-100">
        <Button
          variant="outline"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full justify-between border-amber-200 hover:bg-amber-50"
        >
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
            {hasActiveFilters && (
              <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                {filters.categories.length + filters.specialties.length}
              </span>
            )}
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </Button>
      </div>

      {/* Expandable Filter Options */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4 space-y-6">
          {/* Categories Filter */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={filters.categories.includes(category)}
                    onCheckedChange={(checked) => 
                      handleCategoryChange(category, checked as boolean)
                    }
                  />
                  <Label
                    htmlFor={`category-${category}`}
                    className="text-sm font-medium cursor-pointer"
                  >
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Specialties Filter */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-3">Specialties</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {specialties.map((specialty) => (
                <div key={specialty} className="flex items-center space-x-2">
                  <Checkbox
                    id={`specialty-${specialty}`}
                    checked={filters.specialties.includes(specialty)}
                    onCheckedChange={(checked) => 
                      handleSpecialtyChange(specialty, checked as boolean)
                    }
                  />
                  <Label
                    htmlFor={`specialty-${specialty}`}
                    className="text-sm font-medium cursor-pointer"
                  >
                    {specialty}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <div className="pt-4 border-t border-amber-100">
              <Button
                variant="outline"
                onClick={clearFilters}
                className="w-full border-red-200 text-red-600 hover:bg-red-50"
              >
                <X className="w-4 h-4 mr-2" />
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyFilter;

