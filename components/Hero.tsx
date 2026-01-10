// src/components/Hero.tsx
'use client';

import { useState, useEffect } from 'react';
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
// import heroPro1 from '/public/HeroProducts.webp';
// import heroPro2 from '/public/Hero2.png';

// Distributors Data
const distributors = [
  { name: 'CRPF', src: '/destributors/CRPF_Logo.svg.png', aspect: 'square' },
  { name: 'BSF', src: '/destributors/BSF_Logo.svg.png', aspect: 'square' },
  { name: 'CISF', src: '/destributors/CISF_LOGO.svg.png', aspect: 'square' },
  { name: 'ITBP', src: '/destributors/ITBP_Logo.svg.png', aspect: 'square' },
  { name: 'SSB', src: '/destributors/Sashastra_Seema_Bal.svg.png', aspect: 'square' },
  { name: 'Assam Rifles', src: '/destributors/assam rifal.jpeg', aspect: 'square' },
  { name: 'UP Police', src: '/destributors/up-police-logo-uttar-pradesh-police-up-police-logo-11563421838xjer0uaxol.png', aspect: 'square' },
  { name: 'TN Police', src: '/destributors/185-1854893_tn-police-department-logo-tamil-nadu-police-flag.png', aspect: 'wide' },
  { name: 'GeM', src: '/destributors/2560px-GeM-logo.svg.png', aspect: 'wide' },
];

// Assuming other images might be external URLs or imported similarly
const externalImage1 =
  'https://www.sarlamills.in/cdn/shop/files/Group-2.webp?v=1672291195';
const externalImage2 = 'https://cdn.shopify.com/s/files/1/0268/9577/7903/files/1_6.jpg?v=1743142253';
const externalImage3 = 'https://bhikharamchandmal.in/pub/media/catalog/1270x185px-Product-Page-Banner_01.jpg'; // Using placeholders
const externalImage4 = 'https://cdn.shopify.com/s/files/1/2402/9599/files/oil-Banner.png?v=1748498078';
const externalImage5 = 'https://www.7softindia.com/wp/wp-content/uploads/2023/01/website-3.jpg';
// const externalImage2 = '/images/hero-placeholder-2.jpg'; // Using placeholders

interface Slide {
  image: string | StaticImageData;
  titleLines: string[]; // Split title for animation
  subtitle: string;
  alt: string;
}

const slides: Slide[] = [
  {
    image: '/distributorcanteens/image.png',
    titleLines: ['Trusted by', 'CAPFs  Canteens'],
    subtitle: 'Reliable Supply Chain for BSF & CRPF',
    alt: 'Distributor canteen facility overview',
  },
  {
    image: '/distributorcanteens/image (1).png',
    titleLines: ['Serving Those', 'Who Serve'],
    subtitle: 'Dedicated Distribution Network Across India',
    alt: 'Distribution center operations',
  },
  {
    image: '/distributorcanteens/image (2).png',
    titleLines: ['Premium Canteen', 'Buyers'],
    subtitle: 'Quality Products for Our Armed Forces',
    alt: 'Stocked canteen shelves',
  },
  {
    image: '/distributorcanteens/image (3).png',
    titleLines: ['Nationwide', 'Reach'],
    subtitle: 'Connecting Premium Brands to Remote Canteens',
    alt: 'Delivery and logistics network',
  },
  {
    image: externalImage1,
    titleLines: ['Bridging Excellence', 'to Service'],
    subtitle: "Premium Distribution Solutions for India's Protectors",
    alt: 'Wide range of distributed products',
  },
  {
    image: externalImage2,
    titleLines: ['Quality Without', 'Compromise'],
    subtitle: 'Serving Those Who Serve Our Nation',
    alt: 'Close-up of quality food products',
  },
  {
    image: externalImage3, // Use imported image
    titleLines: ['Quality Without', 'Compromise'],
    subtitle: 'Reaching Every Corner with Precision and Care',
    alt: 'Sridhi Enterprises product variety',
  },
  {
    image: externalImage4,
    titleLines: ['Quality Without', 'Compromise'],
    subtitle: 'Serving Those Who Serve Our Nation',
    alt: 'Close-up of quality food products',
  },
  {
    image: externalImage5,
    titleLines: ['Pan-India', 'Distribution'],

    subtitle: 'Serving Those Who Serve Our Nation',
    alt: 'Close-up of quality food products',
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

// Animated background bands for text readability on bright images
const bandVariantsLeft = {
  initial: { x: '-100%', opacity: 0.9 },
  animate: {
    x: '0%',
    opacity: 0.9,
    transition: { duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] },
  },
  exit: { x: '100%', opacity: 0.9, transition: { duration: 0.4, ease: 'easeIn' } },
};

const bandVariantsRight = {
  initial: { x: '100%', opacity: 0.9 },
  animate: {
    x: '0%',
    opacity: 0.9,
    transition: { duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] },
  },
  exit: { x: '-100%', opacity: 0.9, transition: { duration: 0.4, ease: 'easeIn' } },
};

const bandVariantsTop = {
  initial: { y: '-100%', opacity: 0.9 },
  animate: {
    y: '0%',
    opacity: 0.9,
    transition: { duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] },
  },
  exit: { y: '100%', opacity: 0.9, transition: { duration: 0.4, ease: 'easeIn' } },
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

const LogoMarquee = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 h-24 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center overflow-hidden pointer-events-auto">
      <div className="relative w-full flex items-center overflow-hidden">
        {/* Gradients for smooth fade on sides */}
        <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-gray-900 to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-gray-900 to-transparent"></div>
        
        <motion.div
          className="flex items-center gap-16 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          style={{ width: "fit-content" }}
        >
          {/* Triplicate list for seamless loop and enough length */}
          {[...distributors, ...distributors, ...distributors].map((dist, idx) => (
             <div 
               key={`${dist.name}-${idx}`} 
               className="relative h-14 w-auto  transition-all duration-500 transform hover:scale-110 flex items-center justify-center shrink-0 cursor-pointer"
               title={dist.name}
             >
               <Image
                 src={dist.src}
                 alt={dist.name}
                 height={56}
                 width={140}
                 className="h-full w-auto object-contain max-w-[140px] drop-shadow-md"
               />
             </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
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
      className="relative h-[55vh] md:h-[75vh] w-full overflow-hidden bg-gray-900" // Ensure background for image load
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
            {/* Title Lines - Animated with Masking and Color Bands */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-white drop-shadow-lg leading-tight">
              {currentSlideData.titleLines.map((line, lineIndex) => (
                <span key={lineIndex} className="block overflow-hidden py-1">
                  <motion.span variants={textLineVariants} className="relative block">
                    <motion.span
                      className="absolute inset-0 rounded-sm md:rounded md:skew-x-[-6deg]"
                      variants={lineIndex % 2 === 0 ? bandVariantsLeft : bandVariantsRight}
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(234,205,163,0.95) 0%, rgba(214,174,123,0.95) 100%)',
                        filter: 'drop-shadow(0 6px 18px rgba(214,174,123,0.25))',
                      }}
                    />
                    <span className="relative z-10 px-2 text-gray-900">{line}</span>
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Subtitle - Animated with a subtle band */}
            <div className="overflow-hidden">
              <motion.p
                variants={textLineVariants}
                className="relative text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-gray-100 drop-shadow-md font-light"
              >
                <motion.span
                  className="absolute inset-0 rounded-sm md:rounded opacity-90"
                  variants={bandVariantsTop}
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(234,205,163,0.85) 0%, rgba(214,174,123,0.85) 100%)',
                    filter: 'drop-shadow(0 6px 18px rgba(214,174,123,0.25))',
                  }}
                />
                <span className="relative z-10 px-2 text-gray-900">{currentSlideData.subtitle}</span>
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

      <LogoMarquee />

      {/* Custom Pagination Styles (applied via global CSS or styled components) */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 100px !important; /* Adjust position above marquee */
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
