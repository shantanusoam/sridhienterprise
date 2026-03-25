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
  ShoppingBag,
  CheckCircle2
} from 'lucide-react';
import { getCompanyBySlug, Company } from '@/lib/companies';
import { Button } from '@/components/ui/button';
import { WHATSAPP_LINK } from '@/lib/constants';
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
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
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 bg-primary/20 rounded-full mb-4"></div>
          <div className="h-4 w-32 bg-primary/20 rounded"></div>
        </div>
      </div>
    );
  }

  const featuredProducts = company.products.slice(0, 6);

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6 pb-4">
        <Link href="/companies">
          <Button variant="ghost" className="hover:bg-primary/5 -ml-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Companies
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pb-8 md:pb-12 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl shadow-xl overflow-hidden border border-border/50 relative group"
          >
            {/* Cover Image Banner (Separate from content) */}
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 w-full bg-muted">
              <PlaceholderImage
                src={company.coverImage}
                alt={`${company.name} cover`}
                fill
                sizes="100vw"
                style={{ objectFit: 'fill' }}
                className="transition-transform duration-700 group-hover:scale-105"
                type="company"
              />
              {/* Optional subtle gradient at the bottom only to soften the edge */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-50"></div>
            </div>
            
            {/* Company Info Section (Below Image) */}
            <div className="relative px-6 py-6 md:px-10 md:py-8 bg-card flex flex-col md:flex-row items-start gap-6 md:gap-8">
               {/* Logo - Overlapping Banner */}
              <div className="-mt-16 md:-mt-20 shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl p-2 shadow-xl rotate-3 transition-transform duration-300 group-hover:rotate-0">
                    <div className="relative w-full h-full bg-white rounded-xl overflow-hidden border border-gray-100">
                      <PlaceholderImage
                        src={company.logo}
                        alt={`${company.name} logo`}
                        fill
                        sizes="(max-width: 768px) 96px, 128px"
                        style={{ objectFit: 'contain' }}
                        className="p-1"
                        type="company"
                      />
                    </div>
                  </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 w-full">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <motion.h1 
                      className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {company.name}
                    </motion.h1>
                    <div className="flex flex-wrap items-center gap-3 text-muted-foreground font-medium">
                      <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10">
                        {company.category}
                      </Badge>
                      <span className="hidden md:inline text-border">•</span>
                      <span className="flex items-center gap-1 text-sm">
                        <Users className="w-4 h-4" />
                        Official Partner
                      </span>
                    </div>
                  </div>
                  
                  {/* Desktop Website Button */}
                  <div className="hidden md:block shrink-0">
                     <Link
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="gap-2 hover:bg-muted/50">
                        Visit Website
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Mobile Action Button */}
                <div className="block md:hidden w-full mt-4">
                   <Link
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full justify-between">
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Info Column */}
          <motion.div 
            className="lg:col-span-2 space-y-10"
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* About Section */}
            <motion.section variants={fadeIn} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border/40">
              <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">About the Brand</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {company.description}
              </p>
            </motion.section>

            {/* Specialties & Certifications */}
            <motion.section variants={fadeIn} className="grid sm:grid-cols-2 gap-6">
              <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-100">
                <h3 className="font-heading font-semibold text-lg text-amber-900 mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                  Specialties
                </h3>
                <div className="flex flex-wrap gap-2">
                  {company.specialties.map((specialty, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-white text-amber-800 hover:bg-amber-100 border-amber-100 shadow-sm"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              {company.certifications && company.certifications.length > 0 && (
                <div className="bg-green-50/50 rounded-2xl p-6 border border-green-100">
                  <h3 className="font-heading font-semibold text-lg text-green-900 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-600" />
                    Certifications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {company.certifications.map((cert, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-white border-green-200 text-green-700 shadow-sm"
                      >
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </motion.section>

            {/* Featured Products */}
            <motion.section variants={fadeIn}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-heading font-bold text-foreground">
                  Featured Products
                </h2>
                <Link href={`/products?company=${company.id}`} className="text-primary hover:text-primary/80 font-medium text-sm flex items-center">
                  View All
                  <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {featuredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
                  >
                    <div className="relative aspect-square bg-muted overflow-hidden">
                      <PlaceholderImage
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 group-hover:scale-110"
                        type="product"
                      />
                      {product.salePrice && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                          SALE
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4 flex flex-col flex-1">
                      <div className="text-xs text-muted-foreground mb-1">{product.category}</div>
                      <h3 className="font-medium text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      
                      <div className="mt-auto pt-2 flex items-center justify-between">
                        <div className="flex flex-col">
                          {product.salePrice && product.regularPrice ? (
                            <>
                              <span className="text-xs text-muted-foreground line-through">
                                ₹{product.regularPrice}
                              </span>
                              <span className="font-bold text-primary">
                                ₹{product.salePrice}
                              </span>
                            </>
                          ) : (
                            <span className="font-bold text-foreground">
                              ₹{product.price || product.salePrice || product.regularPrice}
                            </span>
                          )}
                        </div>
                        <Badge variant={product.availability === 'In stock' ? 'default' : 'secondary'} className="text-[10px] px-1.5 h-5">
                          {product.availability === 'In stock' ? 'In Stock' : 'Out'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="sticky top-24 space-y-6">
              {/* Stats Card */}
              <div className="bg-card rounded-2xl shadow-sm border border-border p-6">
                <h3 className="font-heading font-semibold text-lg mb-6">Company Overview</h3>
                
                <div className="space-y-6">
                  {company.stats?.totalProducts && (
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                        <Package className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">
                          {company.stats.totalProducts}
                        </div>
                        <div className="text-sm text-muted-foreground">Active Products</div>
                      </div>
                    </div>
                  )}

                  {company.stats?.avgRating && (
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-600 group-hover:scale-110 transition-transform">
                        <Star className="w-6 h-6 fill-current" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">
                          {company.stats.avgRating}
                        </div>
                        <div className="text-sm text-muted-foreground">Customer Rating</div>
                      </div>
                    </div>
                  )}

                  {company.stats?.yearsOfPartnership && (
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">
                          {company.stats.yearsOfPartnership}
                        </div>
                        <div className="text-sm text-muted-foreground">Years Partnership</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="my-6 border-t border-dashed border-border"></div>

                <div className="space-y-3">
                  <Link href={`/products?company=${company.id}`} className="block">
                    <Button 
                      className="w-full text-white font-medium h-12 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow"
                      style={{
                        background: `linear-gradient(135deg, ${company.brandColors.primary} 0%, ${company.brandColors.secondary} 100%)`
                      }}
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Browse Catalogue
                    </Button>
                  </Link>
                  
                  <Link href={company.website} target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" className="w-full h-12 hover:bg-muted/50">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Website
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Contact/Support Box */}
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 text-center">
                <h4 className="font-semibold text-primary mb-2">Need bulk supplies?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact us directly for bulk orders from {company.name} at special rates.
                </p>
                <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="sm" className="w-full text-secondary-foreground">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
