'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Info,
  History,
  Users,
  Target,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import ExperienceShield from './ExperienceShield';

// Images for slideshow
const slideImages = [
  {
    src: '/distributorcanteens/image (5).png',
    alt: 'Army display',
  },
  {
    src: '/distributorcanteens/image (1).png',
    alt: 'Distribution center operations',
  },
  {
    src: '/distributorcanteens/image (2).png',
    alt: 'Stocked canteen shelves',
  },
  {
    src: '/distributorcanteens/image (3).png',
    alt: 'Delivery and logistics network',
  },
];

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'history' | 'people' | 'vision'>('history');

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideImages.length);
    }, 5000); // Slowed down slightly for a more premium feel
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#FAF3E0] py-16 md:py-2 mt-12 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#D2722F]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#983B0F]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT COLUMN: Visuals */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative aspect-[4/5] md:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slideImages[currentImageIndex].src}
                    alt={slideImages[currentImageIndex].alt}
                    fill
                    className="object-cover"
                    priority={currentImageIndex === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Gradient Overlay for text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Offset Decorative Border */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#D2722F] rounded-2xl -z-10 hidden md:block" />
            
            {/* Experience Shield - Floating Badge */}
            <div className="absolute -top-10 -left-10 md:-left-12 md:top-12 z-20 drop-shadow-xl scale-75 md:scale-100 origin-top-left">
              <ExperienceShield years={14} />
            </div>

            {/* Floating Action Card */}
            <div className="absolute -bottom-8 right-4 md:-right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-[#D2722F]">
               <p className="text-[#983B0F] font-bold text-lg mb-2">Join our network</p>
               <a href="/contact">
                  <Button className="w-full bg-[#D2722F] hover:bg-[#B55D22] text-white rounded-lg group">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
               </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Content */}
          <div className="space-y-8 pt-4">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <span className="text-[#D2722F] font-bold tracking-wider uppercase text-sm bg-[#D2722F]/10 px-3 py-1 rounded-full">
                About Sridhi Enterprises
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#3D1D07] mt-4 leading-tight">
                Serving those who <br />
                <span className="text-[#983B0F]">protect our nation.</span>
              </h1>
              <p className="text-lg text-[#3D1D07]/80 mt-4 leading-relaxed">
                Welcome to our world. We bridge the gap between quality manufacturers and government canteens, ensuring esteemed personnel have access to the best.
              </p>
            </motion.div>

            {/* Interactive Info Cards */}
            <div className="space-y-4">
              <InfoCard 
                icon={<History className="w-5 h-5" />}
                title="Our History"
                isActive={activeTab === 'history'}
                onClick={() => setActiveTab('history')}
              >
                <div className="prose prose-sm text-[#3D1D07]/80">
                  <p>
                    Established in 2012, we are a trusted distributor for serving and retired personnel of CAPFs (BSF, CRPF, CISF, ITBP, SSB, Assam Rifles, RPF, IB, SPG).
                  </p>
                  <p className="mt-2 text-sm italic">
                    Supporting the Kendriya Police Kalyan Bhandar (KPKB) network of 119 Master Bhandars and 1800+ Subsidiary Bhandars.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#D2722F]">Registered officially in 2024</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 text-[#D2722F] cursor-pointer" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-[#3D1D07] text-[#FAF3E0]">
                          <p>Proprietorship operating since 2019.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </InfoCard>

              <InfoCard 
                icon={<Users className="w-5 h-5" />}
                title="Our People"
                isActive={activeTab === 'people'}
                onClick={() => setActiveTab('people')}
              >
                <p className="text-[#3D1D07]/80">
                  We have highly experienced employees who take pride in building and maintaining strong relationships with our clients and partners.
                </p>
              </InfoCard>

              <InfoCard 
                icon={<Target className="w-5 h-5" />}
                title="Vision & Mission"
                isActive={activeTab === 'vision'}
                onClick={() => setActiveTab('vision')}
              >
                <p className="text-[#3D1D07]/80">
                  Our mission is to bridge quality manufacturers with government canteens, ensuring that our esteemed clients have access to top-notch products that enhance their daily lives.
                </p>
              </InfoCard>
            </div>

            {/* <motion.div 
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="pt-4"
            >
              <Button variant="outline" className="border-[#983B0F] text-[#983B0F] hover:bg-[#983B0F] hover:text-white rounded-full px-8 py-6 text-lg transition-all duration-300">
                Read Full Story
              </Button>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for the Accordion/Cards
function InfoCard({ icon, title, children, isActive, onClick }: any) {
  return (
    <motion.div 
      initial={false}
      animate={{ backgroundColor: isActive ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.5)' }}
      className={`rounded-xl border border-[#D2722F]/20 overflow-hidden cursor-pointer transition-colors duration-300 ${isActive ? 'shadow-md' : 'hover:bg-white/80'}`}
      onClick={onClick}
    >
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${isActive ? 'bg-[#D2722F] text-white' : 'bg-[#D2722F]/10 text-[#D2722F]'}`}>
            {icon}
          </div>
          <h3 className={`font-bold text-lg ${isActive ? 'text-[#983B0F]' : 'text-[#3D1D07]'}`}>{title}</h3>
        </div>
        <ChevronRight className={`w-5 h-5 text-[#D2722F] transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`} />
      </div>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pb-5 pl-[3.25rem]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}