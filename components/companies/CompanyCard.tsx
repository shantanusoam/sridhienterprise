'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, Package, Star, Users } from 'lucide-react';
import { Company } from '@/lib/companies/types';
import PlaceholderImage from '@/components/ui/placeholder-image';

interface CompanyCardProps {
  company: Company;
  showProducts?: boolean;
  className?: string;
}

const CompanyCard = ({ company, showProducts = true, className = '' }: CompanyCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: 'spring', stiffness: 80 }
    },
    hover: {
      y: -8,
      boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.15)',
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={`bg-white rounded-xl overflow-hidden border border-amber-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full ${className}`}
    >
      {/* Company Header with Cover Image */}
      <div className="relative h-48 w-full">
        <PlaceholderImage
          src={company.coverImage}
          alt={`${company.name} cover`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="opacity-90"
          type="company"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Company Logo */}
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-lg p-2 shadow-lg">
          <PlaceholderImage
            src={company.logo}
            alt={`${company.name} logo`}
            fill
            sizes="64px"
            style={{ objectFit: 'contain' }}
            className="rounded-lg"
            type="company"
          />
        </div>

        {/* External Link */}
        <div className="absolute top-4 right-4">
          <Link
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 hover:bg-white p-2 rounded-lg shadow-lg transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4 text-gray-700" />
          </Link>
        </div>
      </div>

      {/* Company Information */}
      <div className="p-6">
        <div className="mb-4">
          <h3 
            className="text-xl font-bold mb-2"
            style={{ color: company.brandColors.primary }}
          >
            {company.name}
          </h3>
          <p className="text-sm text-amber-600 font-medium mb-2">
            {company.category}
          </p>
          <p className="text-gray-600 text-sm line-clamp-2">
            {company.description}
          </p>
        </div>

        {/* Company Stats */}
        {company.stats && (
          <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <Package className="w-3 h-3" />
              <span>{company.stats.totalProducts} Products</span>
            </div>
            {company.stats.avgRating && (
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span>{company.stats.avgRating}</span>
              </div>
            )}
            {company.stats.yearsOfPartnership && (
              <div className="flex items-center space-x-1">
                <Users className="w-3 h-3" />
                <span>{company.stats.yearsOfPartnership}y Partner</span>
              </div>
            )}
          </div>
        )}

        {/* Specialties Tags */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {company.specialties.slice(0, 3).map((specialty, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full"
              >
                {specialty}
              </span>
            ))}
            {company.specialties.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{company.specialties.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Featured Products Preview */}
        {showProducts && company.products.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">
              Featured Products:
            </h4>
            <div className="space-y-1">
              {company.products.slice(0, 2).map((product) => (
                <div key={product.id} className="text-xs text-gray-600 truncate">
                  • {product.title}
                </div>
              ))}
              {company.products.length > 2 && (
                <div className="text-xs text-gray-500">
                  +{company.products.length - 2} more products
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Link href={`/companies/${company.slug}`} className="flex-1">
            <motion.button
              className="w-full px-4 py-2 rounded-lg text-white text-sm font-medium transition-all duration-300"
              style={{
                background: `linear-gradient(90deg, ${company.brandColors.primary} 0%, ${company.brandColors.secondary} 100%)`
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Company
            </motion.button>
          </Link>
          <Link href={`/products?company=${company.id}`}>
            <motion.button
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Products
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyCard;
