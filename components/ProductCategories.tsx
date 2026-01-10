// src/components/ProductCategories.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    title: 'Kitchenware',
    description: 'High-quality kitchenware from PNB Kitchenmate',
    // --- Replace with your actual image path ---
    image: '/images/ ', // Example path
    iconSvg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Adjusted size to fit better in 24x24 default */}
        <path
          d="M8 5H16M8 9H16M7 13H12M20 7L18 12H6L4 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 12V20C6 20.5523 6.44772 21 7 21H17C17.5523 21 18 20.5523 18 20V12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    iconColor: '#A93118', // Example: Define color here if needed for parent div
  },
  {
    title: 'Snacks & Sweets',
    description: 'Delicious treats from Bhikharam Chandmal',
    // --- Replace with your actual image path ---
    image: '/images/snacks-category.jpg', // Example path
    iconSvg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3V4M12 20V21M4 12H3M5.5 5.5L6.5 6.5M18.5 5.5L17.5 6.5M21 12H20M17.5 16C17.5 17.3807 16.8807 18 15.5 18H8.5C7.11929 18 6.5 17.3807 6.5 16C6.5 14.6193 7.11929 14 8.5 14H15.5C16.8807 14 17.5 14.6193 17.5 16Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5 14C15.5 11.7909 13.7091 10 11.5 10C9.29086 10 7.5 11.7909 7.5 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    iconColor: '#A93118',
  },
  {
    title: 'Herbal Care',
    description: 'Natural care products from Vaadi Herbals',
    // --- Replace with your actual image path ---
    image: '/images/herbal-category.jpg', // Example path
    iconSvg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 15C8 15 9 14 12 14C15 14 16 15 16 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Use fill for solid dots */}
        <circle cx="8.5" cy="8.5" r="1" fill="currentColor" />
        <circle cx="15.5" cy="8.5" r="1" fill="currentColor" />
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    iconColor: '#4B6145',
  },
  {
    title: 'Stationery',
    description: 'Office supplies for efficient operations',
    // --- Replace with your actual image path ---
    image: '/images/stationery-category.jpg', // Example path
    iconSvg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Filled square example */}
        <rect
          x="6"
          y="16"
          width="2"
          height="2"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 8.09072V4H8.09072M18 8.09072L8.09072 4M18 8.09072L16 10.0907M8.09072 4L10 5.90928"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    iconColor: '#8B4513',
  },
  {
    title: 'Electronics',
    description: 'Reliable electronic goods for daily use',
    // --- Replace with your actual image path ---
    image: '/images/electronics-category.jpg', // Example path
    iconSvg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 6H16M8 10H16M8 14H12M4 4H20V16H4V4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 16V20M16 16V20M6 20H18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    iconColor: '#B8520F',
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// FadeIn variant (if needed elsewhere, otherwise cardVariants is used below)
// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6 }
//   }
// };

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: 'spring', stiffness: 80 },
  },
  hover: {
    y: -8, // Slightly less jump
    boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.1)', // Enhanced shadow
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%', // Use percentage for better responsiveness
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    zIndex: 1, // Ensure current slide is on top
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
    zIndex: 0,
  }),
};

const ProductCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null); // Ref for Intersection Observer

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Disconnect after first view
          // observer.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -100px 0px', // Trigger थोड़ा पहले when 100px from bottom enters view
        threshold: 0.1, // Trigger when 10% is visible
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const changeSlide = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + newDirection;
      if (newIndex < 0) {
        return categories.length - 1; // Wrap around to last
      } else if (newIndex >= categories.length) {
        return 0; // Wrap around to first
      }
      return newIndex;
    });
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : index < currentIndex ? -1 : 0);
    setCurrentIndex(index);
  };

  // Calculate visible categories for desktop carousel effect (showing 3)
  const getVisibleIndices = () => {
    const indices = [];
    const numVisible = 3; // Number of cards to show on desktop
    for (let i = 0; i < numVisible; i++) {
      // Calculate index, handling wrap-around correctly
      const index = (currentIndex + i) % categories.length;
      indices.push(index);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section
      id="product-categories"
      ref={sectionRef} // Attach ref here
      className="py-16 md:py-24 relative font-body overflow-hidden" // Use body font, Lora applied specifically below
      style={{
        backgroundColor: '#FDF3E3', // Slightly lighter background
        // Corrected SVG background URL using template literal
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23b88c46' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '80px',
      }}
    >
      {/* Decorative border - subtle */}
      <div className="absolute inset-4 md:inset-8 border border-amber-800/10 rounded-lg pointer-events-none"></div>

      {/* Ornamental corners - Adjusted positioning and size */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 w-12 h-12 md:w-16 md:h-16 pointer-events-none opacity-50 md:opacity-100">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 20C1 20 8 8 20 8M1 20C1 20 8 32 20 32M1 20H8"
            stroke="#B8520F"
            strokeOpacity="0.3"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <div className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 md:w-16 md:h-16 pointer-events-none opacity-50 md:opacity-100 transform scale-x-[-1]">
        {' '}
        {/* Flip horizontally */}
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 20C1 20 8 8 20 8M1 20C1 20 8 32 20 32M1 20H8"
            stroke="#B8520F"
            strokeOpacity="0.3"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-12 h-12 md:w-16 md:h-16 pointer-events-none opacity-50 md:opacity-100 transform scale-y-[-1]">
        {' '}
        {/* Flip vertically */}
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 20C1 20 8 8 20 8M1 20C1 20 8 32 20 32M1 20H8"
            stroke="#B8520F"
            strokeOpacity="0.3"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-12 h-12 md:w-16 md:h-16 pointer-events-none opacity-50 md:opacity-100 transform scale-x-[-1] scale-y-[-1]">
        {' '}
        {/* Flip both */}
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 20C1 20 8 8 20 8M1 20C1 20 8 32 20 32M1 20H8"
            stroke="#B8520F"
            strokeOpacity="0.3"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Decorative mandala patterns background (Subtle) */}
      {/* Removed complex SVG pattern for cleaner code, using simple background image instead */}

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          // Apply Lora font specifically here if not globally set
          className="text-4xl md:text-5xl font-bold font-heading text-center mb-12 md:mb-16"
          style={{ color: '#A93118', fontFamily: "'Lora', serif" }} // Ensure font name is quoted if it contains spaces
        >
                 Our Associate Companies
        </motion.h2>

        <div className="relative px-0 md:px-10">
          {' '}
          {/* Reduced padding on mobile */}
          {/* Desktop view - show multiple cards */}
          <div className="hidden md:block">
            <motion.div
              // Use key to re-trigger stagger animation if currentIndex changes? Might be too flashy.
              // key={currentIndex}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" // Adjusted gap
            >
              {/* Map over calculated visible indices */}
              {visibleIndices.map((catIndex, displayIndex) => {
                const category = categories[catIndex];
                return (
                  <motion.div
                    key={`${category.title}-${catIndex}`} // Use unique key based on actual category index
                    custom={displayIndex} // Pass index for potential staggered delay in variant if needed
                    variants={cardVariants}
                    whileHover="hover"
                    className="h-full" // Ensure motion div takes full height for layout
                  >
                    {/* Card Content */}
                    <div className="bg-[#FEFBF3] rounded-lg overflow-hidden border border-amber-200/70 h-full shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
                      <div className="relative h-48 w-full bg-gradient-to-r from-amber-100 to-red-100">
                        <Image
                          src={category.image}
                          alt={category.title}
                          fill // Use fill layout
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px" // Provide sizes hint
                          style={{ objectFit: 'cover' }} // Use objectFit with fill
                          className="opacity-90" // Removed mix-blend-multiply for clarity unless intended
                          priority={displayIndex === 0} // Prioritize loading the first visible image
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

                        {/* Simplified Jali Pattern Overlay */}
                        <div
                          className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 10,0 L 20,10 L 10,20 L 0,10 Z' fill='none' stroke='%23B8520F' stroke-width='0.5' /%3E%3Ccircle cx='10' cy='10' r='2' fill='%23B8520F' fill-opacity='0.3' /%3E%3C/svg%3E")`,
                          }}
                        ></div>
                      </div>

                      <div className="p-5 lg:p-6 flex flex-col flex-grow">
                        {' '}
                        {/* Ensure content area grows */}
                        <div className="flex items-center mb-3">
                          <div
                            className="mr-3 p-2 bg-amber-100 rounded-full border border-amber-200/80"
                            style={{ color: category.iconColor || '#B8520F' }}
                          >
                            {category.iconSvg}
                          </div>
                          <h3
                            className="text-xl font-semibold font-heading"
                            style={{ color: '#8B4513' }}
                          >
                            {category.title}
                          </h3>
                        </div>
                        <p className="text-amber-900/80 text-sm mb-5 flex-grow">
                          {' '}
                          {/* Allow description to grow */}
                          {category.description}
                        </p>
                        <div className="mt-auto text-left">
                          {' '}
                          {/* Ensure button is at bottom */}
                          <Link href="/products" passHref legacyBehavior>
                            <motion.a
                              className="inline-block px-5 py-2 rounded text-sm font-medium text-white transition-all duration-300 cursor-pointer"
                              style={{
                                background:
                                  'linear-gradient(90deg, #973116 0%, #B8520F 50%, #E18931 100%)',
                              }}
                              whileHover={{
                                scale: 1.03,
                                boxShadow:
                                  '0px 4px 15px rgba(183, 85, 39, 0.25)',
                              }}
                              whileTap={{ scale: 0.98 }}
                            >
                              View Products
                            </motion.a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          {/* Mobile view - Slider */}
          <div className="md:hidden">
            {/* Added container with explicit height and relative positioning */}
            <div className="relative overflow-hidden h-[450px]">
              {' '}
              {/* Adjust height as needed */}
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex} // Key change triggers animation
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: {
                      type: 'spring',
                      stiffness: 300,
                      damping: 35,
                      restDelta: 0.001,
                    }, // Fine-tuned spring
                    opacity: { duration: 0.3 },
                  }}
                  className="absolute w-full h-full p-1" // Added padding to prevent shadow clipping
                  drag="x" // Enable dragging
                  dragConstraints={{ left: 0, right: 0 }} // Constrain dragging
                  dragElastic={0.1} // Allow slight elastic drag
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipeThreshold = 50; // Min distance for swipe
                    const swipeVelocityThreshold = 200; // Min velocity for swipe
                    if (
                      offset.x < -swipeThreshold ||
                      velocity.x < -swipeVelocityThreshold
                    ) {
                      changeSlide(1); // Swipe left -> next
                    } else if (
                      offset.x > swipeThreshold ||
                      velocity.x > swipeVelocityThreshold
                    ) {
                      changeSlide(-1); // Swipe right -> prev
                    }
                  }}
                >
                  {/* Mobile Card Content */}
                  <div className="bg-[#FEFBF3] rounded-lg overflow-hidden border border-amber-200/70 h-full shadow-sm flex flex-col">
                    <div className="relative h-48 w-full bg-gradient-to-r from-amber-100 to-red-100">
                      {/* Use current category based on currentIndex */}
                      <Image
                        src={categories[currentIndex].image}
                        alt={categories[currentIndex].title}
                        fill
                        sizes="100vw" // Mobile takes full width
                        style={{ objectFit: 'cover' }}
                        className="opacity-90"
                        priority // Prioritize loading image on mobile
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 10,0 L 20,10 L 10,20 L 0,10 Z' fill='none' stroke='%23B8520F' stroke-width='0.5' /%3E%3Ccircle cx='10' cy='10' r='2' fill='%23B8520F' fill-opacity='0.3' /%3E%3C/svg%3E")`,
                        }}
                      ></div>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex items-center mb-3">
                        <div
                          className="mr-3 p-2 bg-amber-100 rounded-full border border-amber-200/80"
                          style={{
                            color:
                              categories[currentIndex].iconColor || '#B8520F',
                          }}
                        >
                          {categories[currentIndex].iconSvg}
                        </div>
                        <h3
                          className="text-xl font-semibold font-heading"
                          style={{ color: '#8B4513' }}
                        >
                          {categories[currentIndex].title}
                        </h3>
                      </div>
                      <p className="text-amber-900/80 text-sm mb-5 flex-grow">
                        {categories[currentIndex].description}
                      </p>
                      <div className="mt-auto text-center">
                        {' '}
                        {/* Centered button on mobile */}
                        <Link href="/products" passHref legacyBehavior>
                          <motion.a
                            className="inline-block px-6 py-2 rounded text-sm font-medium text-white transition-all duration-300 cursor-pointer"
                            style={{
                              background:
                                'linear-gradient(90deg, #973116 0%, #B8520F 50%, #E18931 100%)',
                            }}
                            whileHover={{
                              scale: 1.03,
                              boxShadow: '0px 4px 15px rgba(183, 85, 39, 0.25)',
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            View Products
                          </motion.a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          {/* Navigation arrows */}
          {/* Hide arrows on mobile if using drag */}
          <div className="absolute left-0 md:left-[-10px] top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
            <motion.button
              onClick={() => changeSlide(-1)} // Use changeSlide for consistency
              className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full text-white border border-amber-300/50 shadow-md"
              style={{
                background: 'linear-gradient(135deg, #973116 0%, #B8520F 100%)',
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: '0px 4px 10px rgba(183, 85, 39, 0.3)',
              }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous category"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </motion.button>
          </div>
          <div className="absolute right-0 md:right-[-10px] top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
            <motion.button
              onClick={() => changeSlide(1)} // Use changeSlide for consistency
              className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full text-white border border-amber-300/50 shadow-md"
              style={{
                background: 'linear-gradient(135deg, #973116 0%, #B8520F 100%)',
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: '0px 4px 10px rgba(183, 85, 39, 0.3)',
              }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next category"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </motion.button>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 md:mt-12">
          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)} // Use goToSlide for direct navigation
              className={`w-2.5 h-2.5 mx-1 rounded-full transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDF3E3] ${
                index === currentIndex
                  ? 'bg-amber-700 w-5 scale-110' // Active dot style
                  : 'bg-amber-400 hover:bg-amber-500' // Inactive dot style
              }`}
              aria-label={`Go to category ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'} // Accessibility
            />
          ))}
        </div>
      </div>

      {/*
        Font Import Note:
        The <style jsx global> tag below imports the 'Lora' font.
        For optimal performance and best practices in Next.js,
        consider using the `@next/font` package instead.
        Example:
        import { Lora } from '@next/font/google';
        const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });
        Then add `lora.variable` to your root layout's className
        and use `font-lora` (defined in tailwind.config.js) in your components.
      */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
        .font-heading {
          font-family: 'Lora', serif; /* Apply Lora specifically */
        }
        /* Apply a default body font if needed, or set in layout/tailwind config */
        .font-body {
          /* font-family: 'Your Default Sans Serif Font', sans-serif; */
        }
      `}</style>
    </section>
  );
};

export default ProductCategories;
