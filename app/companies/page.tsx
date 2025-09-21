'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Metadata } from 'next';
import { companies, Company, getCompanyStats } from '@/lib/companies';
import CompanyGrid from '@/components/companies/CompanyGrid';
import CompanyFilter from '@/components/companies/CompanyFilter';
import { Building2, Package, Users, TrendingUp } from 'lucide-react';

// export const metadata: Metadata = {
//   title: 'Our Partner Companies | Sridhi Enterprises',
//   description: 'Explore our trusted partner companies and their premium products for government and paramilitary canteens.',
// };

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function CompaniesPage() {
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>(companies);
  const [isVisible, setIsVisible] = useState(false);
  const stats = getCompanyStats();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleFilterChange = (filtered: Company[]) => {
    setFilteredCompanies(filtered);
  };

  return (
    <div className="min-h-screen bg-[#FDF3E3]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23b88c46' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '80px'
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ color: '#A93118', fontFamily: 'Lora, serif' }}
            >
              Our Partner Companies
            </h1>
            <p className="text-lg md:text-xl text-amber-900/80 max-w-3xl mx-auto leading-relaxed">
              Discover our trusted network of partner companies, each specializing in premium products 
              for government and paramilitary canteens across India.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-amber-200">
                <Building2 className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-amber-900">{stats.totalCompanies}</div>
                <div className="text-sm text-amber-700">Partner Companies</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-amber-200">
                <Package className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-amber-900">{stats.totalProducts}</div>
                <div className="text-sm text-amber-700">Total Products</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-amber-200">
                <TrendingUp className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-amber-900">{stats.totalCategories}</div>
                <div className="text-sm text-amber-700">Categories</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-amber-200">
                <Users className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-amber-900">100+</div>
                <div className="text-sm text-amber-700">Canteens Served</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-8">
                <CompanyFilter
                  companies={companies}
                  onFilterChange={handleFilterChange}
                />
              </div>
            </div>

            {/* Companies Grid */}
            <div className="lg:w-3/4">
              <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {filteredCompanies.length === companies.length 
                      ? 'All Companies' 
                      : `${filteredCompanies.length} Companies Found`
                    }
                  </h2>
                  <div className="text-sm text-gray-600">
                    Showing {filteredCompanies.length} of {companies.length} companies
                  </div>
                </div>

                <CompanyGrid 
                  companies={filteredCompanies}
                  columns={2}
                  showProductCount={true}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F5E6C8] relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%238B4513' stroke-width='0.5'%3E%3Ccircle cx='200' cy='200' r='150'/%3E%3Ccircle cx='200' cy='200' r='120'/%3E%3Ccircle cx='200' cy='200' r='90'/%3E%3Ccircle cx='200' cy='200' r='60'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: '#A93118', fontFamily: 'Lora, serif' }}
            >
              Partner With Quality
            </h2>
            <p className="text-lg text-amber-900/80 max-w-2xl mx-auto mb-8">
              Join our network of trusted companies serving government and paramilitary 
              canteens across India. Quality products, reliable service, lasting partnerships.
            </p>
            <motion.button
              className="px-8 py-3 rounded-lg text-white font-semibold text-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(90deg, #973116 0%, #B8520F 50%, #E18931 100%)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Products
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  );
}

