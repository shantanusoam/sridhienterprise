'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Define colors based on the provided image
const colors = {
  sourcing: '#A04030', // Dark Red/Brown
  quality: '#D07428', // Burnt Orange
  distribution: '#E89838', // Lighter Orange/Ochre
  support: '#686C30', // Olive Green
  background: '#FDF3E3', // Light textured beige background
  headingText: '#1F2937', // Dark text for main heading
  bodyText: '#4B5563', // Body text color
};

const processTabs = [
  {
    value: 'sourcing',
    title: 'Sourcing',
    description: 'We partner with top manufacturers',
    content:
      'Our team carefully selects products that meet the specific needs of government and paramilitary canteens, ensuring quality and value for money.',
    color: colors.sourcing,
  },
  {
    value: 'quality',
    title: 'Quality Check',
    description: 'Rigorous quality standards',
    content:
      'Every product undergoes thorough quality control processes to ensure it meets our strict standards before being distributed to our clients.',
    color: colors.quality,
  },
  {
    value: 'distribution',
    title: 'Distribution',
    description: 'Efficient nationwide network',
    content:
      'Our extensive distribution network and logistics expertise ensure that products reach our clients efficiently, even in remote locations.',
    color: colors.distribution,
  },
  {
    value: 'support',
    title: 'After-Sales Support',
    description: 'Dedicated client assistance',
    content:
      'We provide ongoing support to our clients, addressing any concerns and ensuring their continued satisfaction with our products and services.',
    color: colors.support,
  },
];

export default function OurProcess() {
  const [activeTab, setActiveTab] = useState(processTabs[0].value);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Handle scroll animation trigger using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2, // Trigger when 20% of the element is visible
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

  const activeTabData = processTabs.find((tab) => tab.value === activeTab);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 },
    },
  };

  const textContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.5 },
    },
  };

  const contentSwitchVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="our-process-section"
      className="relative overflow-hidden font-serif pt-16 pb-0"
      style={{ backgroundColor: colors.background }}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      {/* Mandala Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none">
        <div
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-contain bg-no-repeat bg-left-top"
          style={{
            backgroundImage: 'url(/mandala-pattern.svg)',
            transform: 'rotate(-15deg) scale(0.8) translate(-10%, -10%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-contain bg-no-repeat bg-right-bottom"
          style={{
            backgroundImage: 'url(/mandala-pattern.svg)',
            transform: 'rotate(15deg) scale(0.9) translate(10%, 10%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl  font-bold mb-10 md:mb-16 text-center"
          style={{ color: colors.headingText }}
        >
          Our Process
        </motion.h2>

        {/* Tabs Navigation - Styled like the image */}
        <motion.div
          variants={itemVariants}
          className="relative mx-auto max-w-4xl -mb-[110px] "
        >
          <div className="relative h-14 md:h-16 flex rounded-full overflow-hidden">
            {processTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`relative flex-1 flex items-center justify-center text-base md:text-lg font-medium transition-colors duration-300 ease-in-out focus:outline-none ${
                  activeTab === tab.value
                    ? 'text-white'
                    : 'text-white/80 hover:text-white'
                }`}
                style={{
                  backgroundColor: tab.color,
                  boxShadow:
                    activeTab === tab.value
                      ? 'inset 0 -4px 0 rgba(0,0,0,0.2)'
                      : 'none',
                }}
              >
                {tab.title}

                {/* Highlight indicator for active tab */}
                {activeTab === tab.value && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-white/30"
                    layoutId="activeTabIndicator"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left side - Content */}
            <motion.div
              variants={imageVariants}
              className="w-full lg:w-[35%] flex justify-center lg:justify-end"
            >
              <div className="relative lg:w-[350px] lg:h-[525px] pointer-events-none">
                <Image
                  src="/CulturalWomen.png"
                  className=""
                  alt="Illustration representing our process"
                  fill
                  sizes=""
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </motion.div>
            <motion.div
              variants={textContentVariants}
              className="w-full lg:w-[65%] text-center lg:text-left"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={contentSwitchVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <h3
                    className="text-4xl md:text-5xl font-bold mb-3"
                    style={{ color: activeTabData?.color || colors.sourcing }}
                  >
                    {activeTabData?.title}
                  </h3>
                  <h4
                    className="text-xl md:text-2xl font-medium mb-5"
                    style={{ color: activeTabData?.color || colors.sourcing }}
                  >
                    {activeTabData?.description}
                  </h4>
                  <p
                    className="text-base md:text-lg leading-relaxed md:leading-loose"
                    style={{ color: colors.bodyText }}
                  >
                    {activeTabData?.content}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Right side - Image */}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap');

        .font-serif {
          font-family: 'Lora', serif;
        }
      `}</style>
    </motion.section>
  );
}
