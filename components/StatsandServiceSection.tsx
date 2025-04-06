'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const stats = [
  { label: 'Years of Excellence', value: '14+' },
  { label: 'Products Distributed', value: '1,500+' },
  { label: 'Satisfied Clients', value: '570' },
  { label: 'States', value: '28' },
];

const services = [
  {
    title: 'Strategic Distribution Network',
    description:
      'Our meticulously planned network ensures timely delivery to even the most remote locations across India.',
    icon: '🚚',
    iconSvg: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 18.5H19.5V12.5H16.5V18.5H18Z" fill="#B8520F" />
        <path d="M6.5 18.5H15V7.5H2V18.5H4.5" fill="#B8520F" />
        <path
          d="M4.5 18.5C4.5 19.6046 5.39543 20.5 6.5 20.5C7.60457 20.5 8.5 19.6046 8.5 18.5C8.5 17.3954 7.60457 16.5 6.5 16.5C5.39543 16.5 4.5 17.3954 4.5 18.5Z"
          fill="#8B4513"
        />
        <path
          d="M16.5 18.5C16.5 19.6046 17.3954 20.5 18.5 20.5C19.6046 20.5 20.5 19.6046 20.5 18.5C20.5 17.3954 19.6046 16.5 18.5 16.5C17.3954 16.5 16.5 17.3954 16.5 18.5Z"
          fill="#8B4513"
        />
        <path
          d="M16.5 12.5H19.5L22 16V18.5H19.5M4.5 18.5H2V7.5H15V18.5H16.5M4.5 18.5C4.5 19.6046 5.39543 20.5 6.5 20.5C7.60457 20.5 8.5 19.6046 8.5 18.5C8.5 17.3954 7.60457 16.5 6.5 16.5C5.39543 16.5 4.5 17.3954 4.5 18.5ZM16.5 18.5C16.5 19.6046 17.3954 20.5 18.5 20.5C19.6046 20.5 20.5 19.6046 20.5 18.5C20.5 17.3954 19.6046 16.5 18.5 16.5C17.3954 16.5 16.5 17.3954 16.5 18.5Z"
          stroke="#5C3817"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Rigorous Quality Assurance',
    description:
      'Every product undergoes comprehensive quality verification to meet the high standards our clients deserve.',
    icon: '✅',
    iconSvg: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="4" fill="#4B6145" fillOpacity="0.2" />
        <path
          d="M9 12L11 14L15 10"
          stroke="#4B6145"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="#4B6145"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Advanced Inventory Solutions',
    description:
      'Our cutting-edge inventory management systems ensure optimal stock levels and minimal fulfillment times.',
    icon: '📦',
    iconSvg: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 9.5V4.5C21 3.94772 20.5523 3.5 20 3.5H4C3.44772 3.5 3 3.94772 3 4.5V9.5"
          stroke="#B8520F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 9.5V19.5C3 20.0523 3.44772 20.5 4 20.5H20C20.5523 20.5 21 20.0523 21 19.5V9.5"
          stroke="#B8520F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 9.5H21"
          stroke="#B8520F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 13.5L12 16.5L15 13.5"
          stroke="#8B4513"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="9"
          y="7"
          width="6"
          height="6"
          rx="1"
          fill="#8B4513"
          fillOpacity="0.3"
        />
      </svg>
    ),
  },
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, type: 'spring', stiffness: 100 },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.3 },
  },
};

const serviceVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: 'spring', stiffness: 80 },
  },
  hover: {
    y: -5,
    boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.08)',
    transition: { duration: 0.3 },
  },
};

const FloatingDecorative = () => {
  return (
    <div className="absolute w-full h-full overflow-hidden pointer-events-none">
      {/* Corner decorative elements */}
      <div className="absolute top-4 left-4">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M2 20C2 20 10 28 20 28C30 28 38 20 38 20"
            stroke="#5C3817"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <path
            d="M2 20C2 20 10 12 20 12C30 12 38 20 38 20"
            stroke="#5C3817"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <path
            d="M20 2C20 2 12 10 12 20C12 30 20 38 20 38"
            stroke="#5C3817"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <path
            d="M20 2C20 2 28 10 28 20C28 30 20 38 20 38"
            stroke="#5C3817"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
        </svg>
      </div>
      <div className="absolute top-4 right-4">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M2 20C2 20 10 28 20 28C30 28 38 20 38 20"
            stroke="#5C3817"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <path
            d="M2 20C2 20 10 12 20 12C30 12 38 20 38 20"
            stroke="#5C3817"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <path
            d="M20 2C20 2 12 10 12 20C12 30 20 38 20 38"
            stroke="#5C3817"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <path
            d="M20 2C20 2 28 10 28 20C28 30 20 38 20 38"
            stroke="#5C3817"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
        </svg>
      </div>
      <div className="absolute bottom-4 left-4">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M2 20C2 20 10 28 20 28C30 28 38 20 38 20"
            stroke="#5C3817"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <path
            d="M2 20C2 20 10 12 20 12C30 12 38 20 38 20"
            stroke="#5C3817"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <path
            d="M20 2C20 2 12 10 12 20C12 30 20 38 20 38"
            stroke="#5C3817"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <path
            d="M20 2C20 2 28 10 28 20C28 30 20 38 20 38"
            stroke="#5C3817"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
        </svg>
      </div>
      <div className="absolute bottom-4 right-4">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M2 20C2 20 10 28 20 28C30 28 38 20 38 20"
            stroke="#5C3817"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <path
            d="M2 20C2 20 10 12 20 12C30 12 38 20 38 20"
            stroke="#5C3817"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <path
            d="M20 2C20 2 12 10 12 20C12 30 20 38 20 38"
            stroke="#5C3817"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <path
            d="M20 2C20 2 28 10 28 20C28 30 20 38 20 38"
            stroke="#5C3817"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
        </svg>
      </div>
    </div>
  );
};

export default function StatsAndServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('stats-services-section');
      if (!element) return;

      const top = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.75) {
        setIsVisible(true);
        controls.start('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  // Number counter animation
  interface AnimatedCounterProps {
    value: string;
    duration?: number;
  }

  const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    value,
    duration = 2,
  }) => {
    const [count, setCount] = useState(0);
    const isPlus = value.includes('+');
    const numericValue = parseInt(value.replace(/\D/g, ''));

    useEffect(() => {
      if (!isVisible) return;

      let start = 0;
      const end = numericValue;
      const incrementTime = (duration * 1000) / end;
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }, [numericValue, duration]);

    return (
      <span>
        {count}
        {isPlus ? '+' : ''}
      </span>
    );
  };

  return (
    <section
      id="stats-services-section"
      className="py-16 md:py-20 relative font-serif overflow-hidden"
      style={{
        backgroundColor: '#F5E6C8',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23b88c46' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        backgroundSize: '80px',
      }}
    >
      {/* Decorative border */}
      <div className="absolute inset-8 border border-amber-800/20 rounded-lg pointer-events-none"></div>

      {/* Floating corner decorative elements */}
      <FloatingDecorative />

      {/* Background decorative circles */}
      <div className="absolute right-0 top-0 w-96 h-96 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="mandalaPattern"
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
                <circle cx="100" cy="100" r="40" />
                <circle cx="100" cy="100" r="30" />
                <circle cx="100" cy="100" r="20" />
                <path d="M 100,20 L 100,180" />
                <path d="M 20,100 L 180,100" />
                <path d="M 40,40 L 160,160" />
                <path d="M 40,160 L 160,40" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mandalaPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900"
        >
          Why Choose Sridhi Enterprises?
        </motion.h2>

        {/* Stats section with Indian Woman illustration */}
        <div className="relative">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                whileHover="hover"
                className="relative"
              >
                <div className="rounded-lg overflow-hidden">
                  <div
                    className="bg-amber-100/70 p-6 text-center rounded-lg border border-amber-200"
                    style={{ backdropFilter: 'blur(4px)' }}
                  >
                    <h3 className="text-4xl md:text-5xl font-bold text-amber-900 mb-2">
                      {isVisible ? <AnimatedCounter value={stat.value} /> : '0'}
                    </h3>
                    <p className="text-amber-800">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative illustration - Indian Woman */}
          <div className="absolute -right-4 -top-4 w-40 h-40 md:w-64 md:h-64 opacity-90 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isVisible
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 rounded-full bg-amber-100/50"></div>
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  <Image
                    src="/CulturalWomen.png"
                    alt="Indian Woman Illustration"
                    width={256}
                    height={256}
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services section */}
        <div>
          <motion.h2
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-900"
          >
            Our Services
          </motion.h2>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={serviceVariants}
                whileHover="hover"
                className="relative"
              >
                <div className="bg-amber-100/70 p-8 rounded-lg border border-amber-200 h-full flex flex-col">
                  <div className="flex justify-center mb-4">
                    {service.iconSvg}
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-amber-800 flex-grow text-center mb-4">
                    {service.description}
                  </p>
                  <div className="text-center">
                    <Link href="/services">
                      <motion.div
                        className="inline-block px-6 py-2 rounded-lg border border-amber-500 text-amber-800 hover:bg-amber-500 hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Import serif font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap');

        .font-serif {
          font-family: 'Lora', serif;
        }
      `}</style>
    </section>
  );
}
