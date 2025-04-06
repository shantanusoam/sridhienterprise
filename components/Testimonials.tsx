'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    text: 'Sridhi Enterprises has consistently delivered high-quality products to our canteen. Their reliability is unmatched.',
    author: 'Maj. Rajesh Kumar',
    position: 'Army Canteen Services',
    initial: 'M',
  },
  {
    id: 2,
    text: "We've been impressed with the efficiency and professionalism of Sridhi Enterprises. They're a trusted partner in our operations.",
    author: 'Capt. Priya Singh',
    position: 'BSF Logistics Department',
    initial: 'P',
  },
  {
    id: 3,
    text: 'The range of products and the quality of service provided by Sridhi Enterprises have exceeded our expectations.',
    author: 'Subedar Vikram Thapa',
    position: 'CRPF Mess Committee',
    initial: 'V',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        background: "url('/testimonial-bg-pattern.png'), #F5E6C8",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Left Side Decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 h-full max-w-md hidden lg:block">
        <div className="relative h-full w-full">
          <Image
            src="/decorative-window.png"
            alt="Decorative Window"
            height={1200}
            width={500}
            objectFit="contain"
            className="opacity-90"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="relative max-w-4xl z-20 mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                duration: 0.6,
              }}
              className="relative"
              onMouseEnter={pauseAutoPlay}
              onMouseLeave={resumeAutoPlay}
            >
              <div className="bg-[#FEF6E6] border-2 border-amber-100 rounded-2xl shadow-xl p-8 md:p-10 overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="w-full h-full bg-repeat"
                    style={{
                      backgroundImage: "url('/pattern-bg.png')",
                      backgroundSize: '200px',
                    }}
                  ></div>
                </div>

                <div className="relative">
                  {/* Testimonial Content */}
                  <div className="flex mb-8">
                    <div className="flex-shrink-0 mr-6">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="w-16 h-16 bg-gradient-to-br from-red-700 to-red-900 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                      >
                        {testimonials[currentIndex].initial}
                      </motion.div>
                    </div>
                    <div className="flex-grow">
                      <motion.p
                        className="text-xl md:text-2xl text-slate-800 italic font-medium leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                      >
                        {testimonials[currentIndex].text}
                      </motion.p>
                    </div>
                  </div>

                  {/* Author Info */}
                  <motion.div
                    className="border-t-2 border-amber-200 pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <p className="font-bold text-xl text-slate-800">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-slate-600">
                      {testimonials[currentIndex].position}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-between mt-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 hover:bg-amber-200 text-slate-800 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-red-800 w-5'
                      : 'bg-amber-300 hover:bg-amber-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 hover:bg-amber-200 text-slate-800 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom -z-[0] -translate-y-1/2 w-1/4 h-full max-w-md hidden lg:block">
        <div className="relative h-full w-full">
          <Image
            src="/decorative-window.png"
            alt="Decorative Window"
            height={1200}
            width={500}
            objectFit="contain"
            className="opacity-90"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
