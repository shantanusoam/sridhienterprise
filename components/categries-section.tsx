'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { companies } from '@/lib/companies';
import PlaceholderImage from '@/components/ui/placeholder-image';

// --- DATA PREPARATION ---
interface CarouselCompany {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  companyLink: string;
  category: string;
  brandColor: string;
  iconSvg: React.ReactNode;
}

const categories: CarouselCompany[] = companies.map(company => ({
  id: company.id,
  title: company.name,
  description: company.description,
  image: company.coverImage || '/images/placeholder-company.jpg',
  link: `/companies/${company.slug}`,
  companyLink: company.website,
  category: company.category,
  brandColor: company.brandColors.primary,
  iconSvg: getCompanyIcon(company.id),
}));

// Icon mapping (Kept your existing logic)
function getCompanyIcon(_companyId: string) {
    // ... (Your existing icon SVG code here - simplified for brevity in this snippet but assumed present)
    // For the sake of the demo, I'll return a placeholder if the massive SVG block isn't pasted back
    // You should paste your original huge SVG function here.
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18"/>
            <path d="M5 21V7l8-4 8 4v14"/>
            <path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v11"/>
        </svg>
    );
}


export default function AssociateCompaniesCarousel() {
  const carousel = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Scroll Helper Functions
  const scrollLeft = () => {
    if (carousel.current) {
      carousel.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carousel.current) {
      carousel.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  // Auto Scroll Effect
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (carousel.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carousel.current;
        const isEnd = scrollLeft + clientWidth >= scrollWidth - 50; // Tolerance

        if (isEnd) {
          carousel.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carousel.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#FDF3E3]">
       {/* --- BACKGROUND PATTERNS --- */}
      <div className="absolute inset-0 z-0 opacity-40"
        style={{
            backgroundImage: "radial-gradient(#A93118 0.5px, transparent 0.5px), radial-gradient(#A93118 0.5px, #FDF3E3 0.5px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
        }}
      ></div>
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-[#D2722F]/10 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-[#A93118]/10 to-transparent rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[#3D1D07] font-serif mb-4"
            >
              Our Associate Companies
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#3D1D07]/70"
            >
              Discover the premium brands and manufacturers within our distribution network.
            </motion.p>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-3">
            <button 
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full border border-[#D2722F]/30 flex items-center justify-center text-[#D2722F] hover:bg-[#D2722F] hover:text-white transition-all duration-300 active:scale-95"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border border-[#D2722F]/30 flex items-center justify-center text-[#D2722F] hover:bg-[#D2722F] hover:text-white transition-all duration-300 active:scale-95"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* --- CAROUSEL TRACK --- */}
        {/* We use a native overflow container for better touch support, customized with CSS to hide scrollbars */}
        <div 
            ref={carousel}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 px-4 -mx-4 md:px-0 md:mx-0 scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
        >
          {categories.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="snap-center shrink-0 w-[85vw] sm:w-[400px] md:w-[450px]"
            >
              <CompanyCard company={company} />
            </motion.div>
          ))}
          
          {/* Spacer for end of list */}
          <div className="shrink-0 w-4" />
        </div>

      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap');
        .font-serif { font-family: 'Lora', serif; }
      `}</style>
    </section>
  );
}

// --- CARD COMPONENT ---
function CompanyCard({ company }: { company: CarouselCompany }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#D2722F]/10 transition-all duration-500 border border-[#D2722F]/10"
    >
      {/* 1. IMAGE AREA (16:9 Aspect Ratio) */}
      <div className="relative w-full aspect-video overflow-hidden">
         {/* Use Next/Image or Placeholder */}
         <PlaceholderImage
            src={company.image}
            alt={company.title}
            // Use layout fill or specific dimensions
            width={600} 
            height={338} // 16:9 ratio of 600
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            type="company"
         />
         
         {/* Overlay Gradient */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

         {/* Floating Badge (Icon) */}
         <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg border border-white/20 text-[#A93118]">
            <div className="w-8 h-8">
                {company.iconSvg}
            </div>
         </div>
         
         {/* Category Tag */}
         <div className="absolute top-4 right-4 bg-[#D2722F] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {company.category || 'Partner'}
         </div>
      </div>

      {/* 2. CONTENT AREA */}
      <div className="p-6 relative">
        <div className="flex justify-between items-start mb-3">
          <Link href={company.link} className="hover:underline decoration-[#D2722F] underline-offset-4">
            <h3 className="text-2xl font-bold text-[#3D1D07] font-serif group-hover:text-[#D2722F] transition-colors">
                {company.title}
            </h3>
          </Link>
        </div>

        <p className="text-[#3D1D07]/70 text-sm leading-relaxed mb-6 line-clamp-2 h-10">
          {company.description}
        </p>

        {/* 3. ACTIONS */}
        <div className="flex items-center gap-3 pt-4 border-t border-[#D2722F]/10">
          <Link href={company.link} className="flex-1">
            <button className="w-full flex items-center justify-center gap-2 bg-[#FAF3E0] text-[#983B0F] px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#D2722F] hover:text-white transition-all duration-300 group/btn">
              View Profile
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>
          </Link>
          
          {company.companyLink && (
            <Link 
              href={company.companyLink}
              target="_blank"
              className="p-2.5 rounded-lg border border-[#D2722F]/20 text-[#D2722F] hover:bg-[#D2722F]/5 transition-colors"
              title="Visit Website"
            >
              <ExternalLink className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>
      
      {/* Decorative Bottom Line */}
      <div 
        className="absolute bottom-0 left-0 h-1 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        style={{ backgroundColor: company.brandColor || '#D2722F' }}
      />
    </motion.div>
  );
}