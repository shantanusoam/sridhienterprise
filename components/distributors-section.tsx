'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Building2, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// --- DATA ---
const distributors = [
  {
    id: 'crpf',
    title: 'CRPF Canteens',
    description: 'Serving the Central Reserve Police Force with quality products and dedicated service.',
    image: '/distributorcanteens/image.png',
    link: '#',
    category: 'Paramilitary',
    icon: Shield,
  },
  {
    id: 'bsf',
    title: 'BSF Canteens',
    description: 'Trusted partner for Border Security Force canteens across the region.',
    image: '/distributorcanteens/image (1).png',
    link: '#',
    category: 'Paramilitary',
    icon: Shield,
  },
  {
    id: 'cisf',
    title: 'CISF Canteens',
    description: 'Serving the Central Industrial Security Force to meet their procurement needs.',
    image: '/distributorcanteens/image (3).png',
    link: '#',
    category: 'Paramilitary',
    icon: Shield,
  },
  {
    id: 'itbp',
    title: 'ITBP Canteens',
    description: 'Serving the Indo-Tibetan Border Police with dedication and reliability.',
    image: '/distributorcanteens/download.jpeg',
    link: '#',
    category: 'Paramilitary',
    icon: Shield,
  },
  {
    id: 'ssb',
    title: 'SSB Canteens',
    description: 'Providing quality supplies to Sashastra Seema Bal units and families.',
    image: '/distributorcanteens/image (4).png',
    link: '#',
    category: 'Paramilitary',
    icon: Shield,
  },
  {
    id: 'assam',
    title: 'Assam Rifles',
    description: 'Proudly associated with the Assam Rifles, the Sentinels of the Northeast.',
    image: '/distributorcanteens/image (5).png',
    link: '#',
    category: 'Paramilitary',
    icon: Shield,
  },
  {
    id: 'police',
    title: 'State Police',
    description: 'Supplying essential goods to Police Canteens with reliability and efficiency.',
    image: '/distributorcanteens/image (2).png',
    link: '#',
    category: 'Police',
    icon: Building2,
  },
];

export default function AssociateBuyersSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // --- AUTO SCROLL LOGIC ---
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (!isPaused && carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        
        // If we are at the end, scroll back to start, otherwise scroll right
        // We use a tolerance of 10px to detect end of scroll
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll by the width of one card (approx 350px + gap)
          carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
        }
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  return (
    <section className="relative py-20 md:py-12 bg-[#FEF6E6] overflow-hidden">
      {/* Decorative Background Patterns */}
      <div className="absolute inset-0 z-0" 
           style={{ 
             backgroundImage: 'radial-gradient(#A93118 0.5px, transparent 0.5px)', 
             backgroundSize: '24px 24px',
             opacity: 0.05
           }} 
      />
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#FEF6E6] to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#FEF6E6] to-transparent z-10" />

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Header */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#D2722F]/10 px-4 py-1.5 rounded-full mb-6"
          >
            <Star className="w-4 h-4 text-[#D2722F] fill-current" />
            <span className="text-[#D2722F] text-xs font-bold tracking-widest uppercase">
              Trusted Partners
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#3D1D07] font-serif mb-6"
          >
            Serving Our Forces
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#3D1D07]/70 max-w-2xl mx-auto"
          >
            We are honored to supply essential goods to the brave personnel of CRPF, BSF, and government canteens across the nation.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Scrollable Area */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto gap-6  px-4 -mx-4 md:px-0 md:mx-0 scrollbar-hide snap-x snap-mandatory"
            style={{ 
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {distributors.map((distributor, index) => (
              <motion.div
                key={distributor.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="snap-center shrink-0 w-[600px] md:w-[600px]"
              >
                <DistributorCard distributor={distributor} />
              </motion.div>
            ))}
            
            {/* Spacer to allow last item to be centered */}
            <div className="w-[10vw] shrink-0" />
          </div>

          {/* Fade Gradients for visual scrolling hints */}
          <div className="absolute top-0 bottom-12 left-0 w-12 md:w-24 bg-gradient-to-r from-[#FEF6E6] to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 bottom-12 right-0 w-12 md:w-24 bg-gradient-to-l from-[#FEF6E6] to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}

// --- CARD COMPONENT ---
function DistributorCard({ distributor }: { distributor: any }) {
  const Icon = distributor.icon;
  
  return (
    <Link href={distributor.link} className="block h-full group">
      <div className="bg-white rounded-xl overflow-hidden h-full border border-[#D2722F]/10 shadow-sm hover:shadow-xl hover:shadow-[#D2722F]/10 transition-all duration-500 ease-out transform hover:-translate-y-2">
        
        {/* Image Container - 16:9 Aspect Ratio */}
        <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
          <Image
            src={distributor.image}
            alt={distributor.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
          
          {/* Floating Icon Badge */}
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm p-2 rounded-lg shadow-lg text-[#983B0F] z-10">
            <Icon className="w-5 h-5" />
          </div>

          {/* Category Tag */}
          <div className="absolute bottom-3 left-3">
             <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D2722F] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md">
               <Shield className="w-3 h-3 fill-current" />
               {distributor.category}
             </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold text-[#3D1D07] font-serif group-hover:text-[#D2722F] transition-colors">
              {distributor.title}
            </h3>
            <ArrowRight className="w-5 h-5 text-[#D2722F] -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </div>
          
          <p className="text-[#3D1D07]/70 text-sm leading-relaxed line-clamp-2">
            {distributor.description}
          </p>
        </div>

        {/* Bottom Line Accents */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FDF3E3]">
           <div className="h-full bg-[#D2722F] w-0 group-hover:w-full transition-all duration-700 ease-out" />
        </div>
      </div>
    </Link>
  );
}