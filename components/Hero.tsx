// src/components/Hero.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link'; // Import Link for the button

// Import Swiper React components & modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // If using default navigation elements (we'll customize)

// Import images (ensure paths are correct from /public)
import heroPro1 from '/public/HeroProducts.webp';
import heroPro2 from '/public/Hero2.png';

// Assuming other images might be external URLs or imported similarly
const externalImage1 =
  'https://bhikharamchandmal.in/pub/media/wysiwyg/slider/finni-banner.png';
// const externalImage2 = 'https://bhikharamchandmal.in/pub/media/wysiwyg/slider/banner-1.jpg';
// const externalImage1 = '/images/hero-placeholder-1.jpg'; // Using placeholders
// const externalImage2 = '/images/hero-placeholder-2.jpg'; // Using placeholders

interface Slide {
  image: string | StaticImageData;
  titleLines: string[]; // Split title for animation
  subtitle: string;
  alt: string;
}

const slides: Slide[] = [
  {
    image: externalImage1,
    titleLines: ['Bridging Excellence', 'to Service'],
    subtitle: "Premium Distribution Solutions for India's Protectors",
    alt: 'Wide range of distributed products',
  },
  {
    image: heroPro2,
    titleLines: ['Quality Without', 'Compromise'],
    subtitle: 'Serving Those Who Serve Our Nation',
    alt: 'Close-up of quality food products',
  },
  {
    image: heroPro1, // Use imported image
    titleLines: ['Pan-India Logistics', 'Excellence'],
    subtitle: 'Reaching Every Corner with Precision and Care',
    alt: 'Sridhi Enterprises product variety',
  },
];

// Animation Variants
const textContainerVariants = {
  initial: { opacity: 1 }, // Container always visible, children animate
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger title lines, subtitle, button
    },
  },
};

const textLineVariants = {
  initial: { y: '100%', opacity: 0 },
  animate: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }, // Smooth cubic bezier
  },
  exit: {
    y: '-100%',
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeIn' },
  },
};

const buttonVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.4 },
  }, // Delay slightly more
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(
    null
  );
  const [isInteracting, setIsInteracting] = useState(false); // Track hover/interaction

  // Pause autoplay on interaction
  useEffect(() => {
    if (!swiperInstance || !swiperInstance.autoplay) return;
    if (isInteracting) {
      swiperInstance.autoplay.stop();
    } else {
      swiperInstance.autoplay.start();
    }
  }, [isInteracting, swiperInstance]);

  const currentSlideData = slides[activeIndex];

  return (
    <section
      className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden bg-gray-900" // Ensure background for image load
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onTouchStart={() => setIsInteracting(true)} // Handle touch interaction
      onTouchEnd={() => setIsInteracting(false)}
    >
      <Swiper
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        onSwiper={setSwiperInstance} // Store swiper instance
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Update active index state
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 3000, // Slightly longer delay
          disableOnInteraction: false, // Keep trying to restart autoplay
          pauseOnMouseEnter: false, // We handle pause manually with state
        }}
        loop={true}
        speed={1200} // Slower, smoother transition speed
        pagination={{
          clickable: true,
          // Custom pagination dots rendering
          renderBullet: (index, className) => {
            return `<button class="${className} hero-pagination-bullet" aria-label="Go to slide ${
              index + 1
            }"></button>`;
          },
        }}
        className="h-full w-full"
        // Disable Swiper's default navigation elements if using custom ones
        // navigation={false}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Ken Burns Effect Container */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              // Apply animation only when the slide is active for performance
              animate={
                activeIndex === index
                  ? { scale: [1, 1.08], x: [0, -10], y: [0, 5] }
                  : {}
              }
              transition={{
                duration: 15, // Long duration for slow effect
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'mirror', // Gently zoom in/out and pan
              }}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="100vw" // Image covers viewport width
                style={{ objectFit: 'cover' }}
                priority={index === 0} // Prioritize first image
                quality={85} // Adjust quality
              />
            </motion.div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none"></div>
            {/* Optional: Radial gradient from center bottom */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30 pointer-events-none"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Central Content Container */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 md:px-8 pointer-events-none">
        {/* AnimatePresence for Text Blocks */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex} // Re-trigger animation when slide changes
            variants={textContainerVariants}
            initial="initial"
            animate="animate"
            exit="exit" // Although exit might not be visible with fade, good practice
            className="max-w-xl md:max-w-2xl lg:max-w-3xl pointer-events-auto" // Allow interaction with button etc.
          >
            {/* Title Lines - Animated with Masking */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-white drop-shadow-lg leading-tight">
              {currentSlideData.titleLines.map((line, lineIndex) => (
                // Overflow hidden creates the mask
                <span key={lineIndex} className="block overflow-hidden py-1">
                  <motion.span className="block" variants={textLineVariants}>
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Subtitle - Animated */}
            {/* Overflow hidden creates the mask */}
            <div className="overflow-hidden">
              <motion.p
                variants={textLineVariants} // Use same variant, stagger takes care of delay
                className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-gray-200 drop-shadow-md font-light" // Lighter font weight
              >
                {currentSlideData.subtitle}
              </motion.p>
            </div>

            {/* CTA Button - Animated */}
            <motion.div variants={buttonVariants}>
              <Link href="/products" passHref legacyBehavior>
                <motion.a
                  className="inline-block text-base md:text-lg px-8 py-3 md:px-10 md:py-4 rounded-md font-semibold text-gray-900 transition-all duration-300 cursor-pointer"
                  style={{
                    background:
                      'linear-gradient(145deg, #EACDA3 0%, #D6AE7B 100%)', // Gold gradient
                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0px 6px 20px rgba(214, 174, 123, 0.4)', // Glow effect
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Discover Premium Solutions
                </motion.a>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Custom Navigation Arrows */}
      <button
        onClick={() => swiperInstance?.slidePrev()}
        className="absolute left-3 md:left-5 top-1/2 transform -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/30 text-white hover:bg-[#D6AE7B] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EACDA3] focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 transition-all duration-300 opacity-70 hover:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
      </button>
      <button
        onClick={() => swiperInstance?.slideNext()}
        className="absolute right-3 md:right-5 top-1/2 transform -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/30 text-white hover:bg-[#D6AE7B] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EACDA3] focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 transition-all duration-300 opacity-70 hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
      </button>

      {/* Custom Pagination Styles (applied via global CSS or styled components) */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 20px !important; /* Adjust position */
        }
        .hero-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: rgba(255, 255, 255, 0.5);
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease;
          margin: 0 5px !important; /* Ensure spacing */
          cursor: pointer;
          display: inline-block; /* Needed for layout */
        }
        .hero-pagination-bullet.swiper-pagination-bullet-active {
          background-color: #eacda3; /* Active gold color */
          width: 28px; /* Active bullet width */
          border-radius: 5px; /* Capsule shape for active */
        }
        /* Ensure bullets are clickable */
        .swiper-pagination-clickable .hero-pagination-bullet {
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};

export default Hero;
