'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ExternalLink, 
  Package, 
  Star, 
  Users, 
  Award, 
  Calendar,
  ArrowLeft,
  ShoppingBag
} from 'lucide-react';
import { getCompanyBySlug, Company, Product } from '@/lib/companies';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PlaceholderImage from '@/components/ui/placeholder-image';

interface CompanyDetailPageProps {
  params: {
    slug: string;
  };
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function CompanyDetailPage({ params }: CompanyDetailPageProps) {
  const [company, setCompany] = useState<Company | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const foundCompany = getCompanyBySlug(params.slug);
    if (!foundCompany) {
      notFound();
    }
    setCompany(foundCompany);
    setIsVisible(true);
  }, [params.slug]);

  if (!company) {
    return <div>Loading...</div>;
  }

  const featuredProducts = company.products.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#FDF3E3]">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link href="/companies">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Companies
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-200"
          >
            {/* Cover Image */}
            <div className="relative h-64 md:h-80">
              <PlaceholderImage
                src={company.coverImage}
                alt={`${company.name} cover`}
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
                className="opacity-90"
                type="company"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Company Logo */}
              <div className="absolute bottom-6 left-6 w-20 h-20 bg-white rounded-xl p-3 shadow-lg">
                <PlaceholderImage
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  sizes="80px"
                  style={{ objectFit: 'contain' }}
                  className="rounded-xl"
                  type="company"
                />
              </div>

              {/* External Link */}
              <div className="absolute top-6 right-6">
                <Link
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 hover:bg-white p-3 rounded-xl shadow-lg transition-colors duration-200"
                >
                  <ExternalLink className="w-5 h-5 text-gray-700" />
                </Link>
              </div>
            </div>

            {/* Company Info */}
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="md:col-span-2">
                  <h1 
                    className="text-3xl md:text-4xl font-bold mb-2"
                    style={{ color: company.brandColors.primary }}
                  >
                    {company.name}
                  </h1>
                  <p className="text-lg text-amber-600 font-medium mb-4">
                    {company.category}
                  </p>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {company.description}
                  </p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {company.specialties.map((specialty, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-amber-100 text-amber-800 hover:bg-amber-200"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  {company.certifications && company.certifications.length > 0 && (
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        Certifications
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {company.certifications.map((cert, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="border-green-200 text-green-700"
                          >
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Stats Sidebar */}
                <div className="space-y-6">
                  {/* Stats Cards */}
                  {company.stats && (
                    <div className="space-y-4">
                      <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-2xl font-bold text-amber-900">
                              {company.stats.totalProducts}
                            </div>
                            <div className="text-sm text-amber-700">Total Products</div>
                          </div>
                          <Package className="w-8 h-8 text-amber-600" />
                        </div>
                      </div>

                      {company.stats.avgRating && (
                        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-2xl font-bold text-yellow-900">
                                {company.stats.avgRating}
                              </div>
                              <div className="text-sm text-yellow-700">Average Rating</div>
                            </div>
                            <Star className="w-8 h-8 text-yellow-600 fill-yellow-600" />
                          </div>
                        </div>
                      )}

                      {company.stats.yearsOfPartnership && (
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-2xl font-bold text-blue-900">
                                {company.stats.yearsOfPartnership}
                              </div>
                              <div className="text-sm text-blue-700">Years Partnership</div>
                            </div>
                            <Calendar className="w-8 h-8 text-blue-600" />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Link href={`/products?company=${company.id}`} className="block">
                      <Button 
                        className="w-full text-white"
                        style={{
                          background: `linear-gradient(90deg, ${company.brandColors.primary} 0%, ${company.brandColors.secondary} 100%)`
                        }}
                      >
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        View All Products
                      </Button>
                    </Link>
                    
                    <Link href={company.website} target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="outline" className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Website
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Featured Products
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg border border-amber-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
                >
                  <div className="relative h-48 bg-gradient-to-r from-amber-100 to-red-100">
                    <PlaceholderImage
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      className="opacity-90"
                      type="product"
                    />
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-amber-600 mb-2">
                      {product.category}
                    </p>
                    
                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div>
                        {product.salePrice && product.regularPrice ? (
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-green-600">
                              ₹{product.salePrice}
                            </span>
                            <span className="text-sm text-gray-500 line-through">
                              ₹{product.regularPrice}
                            </span>
                          </div>
                        ) : (
                          <span className="text-lg font-bold text-gray-800">
                            ₹{product.price || product.salePrice || product.regularPrice}
                          </span>
                        )}
                      </div>
                      
                      <Badge 
                        variant={product.availability === 'In stock' ? 'default' : 'secondary'}
                        className={
                          product.availability === 'In stock' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-600'
                        }
                      >
                        {product.availability}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {company.products.length > 6 && (
              <div className="text-center">
                <Link href={`/products?company=${company.id}`}>
                  <Button 
                    size="lg"
                    className="text-white"
                    style={{
                      background: `linear-gradient(90deg, ${company.brandColors.primary} 0%, ${company.brandColors.secondary} 100%)`
                    }}
                  >
                    View All {company.products.length} Products
                  </Button>
                </Link>
              </div>
            )}
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
