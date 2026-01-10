'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Data for distributors/clients
const distributors = [
  {
    title: 'CRPF Canteens',
    description: 'Serving the Central Reserve Police Force with quality products and dedicated service.',
    image: '/distributorcanteens/image.png',
    link: '#',
    category: 'Paramilitary',
  },
  {
    title: 'BSF Canteens',
    description: 'Trusted partner for Border Security Force canteens across the region.',
    image: '/distributorcanteens/image (1).png',
    link: '#',
    category: 'Paramilitary',
  },

  {
    title: 'CISF Canteens',
    description: 'Partnering with Central Industrial Security Force to meet their procurement needs.',
    image: '/distributorcanteens/image (3).png',
    link: '#',
    category: 'Paramilitary',
  },
  {
    title: 'ITBP Canteens',
    description: 'Serving the Indo-Tibetan Border Police with dedication and reliability.',
    image: '/distributorcanteens/download.jpeg',
    link: '#',
    category: 'Paramilitary',
  },
  {
    title: 'SSB Canteens',
    description: 'Providing quality supplies to Sashastra Seema Bal units and families.',
    image: '/distributorcanteens/image (4).png',
    link: '#',
    category: 'Paramilitary',
  },
  {
    title: 'Assam Rifles',
    description: 'Proudly associated with the Assam Rifles, the Sentinels of the Northeast.',
    image: '/distributorcanteens/image (5).png',
    link: '#',
    category: 'Paramilitary',
  },
  {
    title: 'State Police Canteens',
    description: 'Supplying essential goods to Police Canteens with reliability and efficiency.',
    image: '/distributorcanteens/image (2).png',
    link: '#',
    category: 'Police',
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
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 md:mb-8 px-2"
          style={{ color: '#A93118', fontFamily: 'Lora, serif' }}
        >
          Associate  Buyers
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg text-amber-900/80 max-w-2xl mx-auto text-center mb-8 md:mb-12 px-4"
        >
          Proudly serving our esteemed clients including CRPF, BSF, and other government canteens
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {distributors.map((distributor) => (
            <motion.div
              key={distributor.title}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="h-full"
            >
              <div className="bg-[#FEF6E6] rounded-xl overflow-hidden border border-amber-200 h-full shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  {/* Using standard img tag since we are using local files directly, or PlaceholderImage if needed but direct img is simpler here if we don't need blur */}
                  <img
                    src={distributor.image}
                    alt={distributor.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent pointer-events-none"></div>
                </div>

                <div className="p-4 md:p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">
                    {distributor.title}
                  </h3>
                  
                  <p className="text-amber-900/80 text-sm flex-grow">
                    {distributor.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-amber-100">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                      {distributor.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
