'use client';

import { motion } from 'framer-motion';
import { Company } from '@/lib/companies/types';
import CompanyCard from './CompanyCard';

interface CompanyGridProps {
  companies: Company[];
  columns?: number;
  showProductCount?: boolean;
  className?: string;
}

const CompanyGrid = ({ 
  companies, 
  columns = 3, 
  showProductCount = true, 
  className = '' 
}: CompanyGridProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const getGridCols = () => {
    switch (columns) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
      default: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  if (companies.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg mb-2">No companies found</div>
        <div className="text-gray-400 text-sm">
          Try adjusting your search or filter criteria
        </div>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`grid ${getGridCols()} gap-6 md:gap-8 ${className}`}
    >
      {companies.map((company) => (
        <motion.div
          key={company.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <CompanyCard 
            company={company} 
            showProducts={showProductCount}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CompanyGrid;

