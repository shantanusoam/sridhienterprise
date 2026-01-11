'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shield, Users, Building2 } from 'lucide-react';

// Data for distributors/clients
const distributors = [
  {
    title: 'CRPF Canteens',
    description: 'Serving the Central Reserve Police Force with quality products and dedicated service.',
    image: '/distributorcanteens/image.png',
    link: '#',
    category: 'Paramilitary',
    icon: Shield,
  },
  {
    title: 'BSF Canteens',
    description: 'Trusted partner for Border Security Force canteens across the region.',
    image: '/distributorcanteens/image (1).png',
    link: '#',
    category: 'Paramilitary',
    icon: Shield,
  },
  {
    title: 'CISF Canteens',
    description: 'Serving the Central Industrial Security Force to meet their procurement needs.',
    image: '/distributorcanteens/image (3).png',
    link: '#',
    category: 'Paramilitary',
    icon: Shield,
  },
  {
    title: 'ITBP Canteens',
    description: 'Serving the Indo-Tibetan Border Police with dedication and reliability.',
    image: '/distributorcanteens/download.jpeg',
    link: '#',
    category: 'Paramilitary',
    icon: Shield,
  },
  {
    title: 'SSB Canteens',
    description: 'Providing quality supplies to Sashastra Seema Bal units and families.',
    image: '/distributorcanteens/image (4).png',
    link: '#',
    category: 'Paramilitary',
    icon: Shield,
  },
  {
    title: 'Assam Rifles',
    description: 'Proudly associated with the Assam Rifles, the Sentinels of the Northeast.',
    image: '/distributorcanteens/image (5).png',
    link: '#',
    category: 'Paramilitary',
    icon: Shield,
  },
  {
    title: 'State Police Canteens',
    description: 'Supplying essential goods to Police Canteens with reliability and efficiency.',
    image: '/distributorcanteens/image (2).png',
    link: '#',
    category: 'Police',
    icon: Building2,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, type: 'spring' },
  },
};

export default function DistributorsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('distributors-section');
      if (!element) return;

      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="distributors-section"
      className="py-12 md:py-24 relative font-serif overflow-hidden"
      style={{
        backgroundColor: '#FDF3E3',
      }}
    >
      {/* Decorative border */}
      <div className="absolute inset-8 border border-amber-800/20 rounded-lg pointer-events-none"></div>

      {/* Background decorative circles */}
      <div className="absolute left-0 bottom-0 w-96 h-96 opacity-10 pointer-events-none transform rotate-180">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="mandalaPattern2"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <g fill="none" stroke="#8B4513" strokeWidth="0.5">
                <circle cx="100" cy="100" r="80" />
                <circle cx="100" cy="100" r="70" />
                <circle cx="100" cy="100" r="60" />
                <circle cx="100" cy="100" r="50" />
                <path d="M 100,20 L 100,180" />
                <path d="M 20,100 L 180,100" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mandalaPattern2)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-px w-12 bg-amber-300"></span>
            <span className="text-amber-700 uppercase tracking-[0.2em] text-xs font-semibold">Our Partners</span>
            <span className="h-px w-12 bg-amber-300"></span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 px-2"
            style={{ color: '#A93118', fontFamily: 'Lora, serif' }}
          >
            Associate Buyers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-amber-900/80 max-w-2xl mx-auto text-center px-4"
          >
            Proudly serving our esteemed clients including CRPF, BSF, and other government canteens across India
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {distributors.map((distributor) => {
            const Icon = distributor.icon;
            return (
              <motion.div
                key={distributor.title}
                variants={itemVariants}
                whileHover={{
                  y: -12,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
                className="h-full group"
              >
                <Link href={distributor.link} className="block h-full">
                  <div className="bg-gradient-to-br from-[#FEF6E6] to-[#FFF8ED] rounded-2xl overflow-hidden border-2 border-amber-200/50 h-full shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group-hover:border-amber-400/70 relative">
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Image container with enhanced styling */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-amber-50 to-white">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={distributor.image}
                          alt={distributor.title}
                          fill
                          className="object-contain p-4 transition-all duration-700"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        />
                      </motion.div>
                      
                      {/* Enhanced gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Icon badge */}
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <Icon className="w-5 h-5 text-amber-700" />
                      </div>
                    </div>

                    {/* Content section with improved styling */}
                    <div className="p-5 md:p-6 flex-grow flex flex-col relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-amber-900 group-hover:text-amber-950 transition-colors duration-300 pr-2">
                          {distributor.title}
                        </h3>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          className="text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </div>
                      
                      <p className="text-amber-900/70 text-sm leading-relaxed flex-grow mb-4 group-hover:text-amber-900/90 transition-colors duration-300">
                        {distributor.description}
                      </p>
                      
                      {/* Enhanced category badge */}
                      <div className="mt-auto pt-4 border-t border-amber-200/50 group-hover:border-amber-300 transition-colors duration-300">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-amber-100 to-amber-50 text-amber-800 text-xs font-semibold rounded-full border border-amber-200/50 group-hover:from-amber-200 group-hover:to-amber-100 transition-all duration-300 shadow-sm">
                          <Users className="w-3 h-3" />
                          {distributor.category}
                        </span>
                      </div>
                    </div>

                    {/* Hover effect glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/0 to-amber-600/0 group-hover:from-amber-400/10 group-hover:to-amber-600/10 transition-all duration-500 pointer-events-none"></div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap');

        .font-serif {
          font-family: 'Lora', serif;
        }
      `}</style>
    </section>
  );
}
