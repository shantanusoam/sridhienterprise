'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2, Truck, PackageCheck, MapPin } from 'lucide-react';

// --- DATA ---
const stats = [
  { label: 'Years of Excellence', value: 14, suffix: '+' },
  { label: 'Satisfied Clients', value: 1570, suffix: '' },
  { label: 'States Covered', value: 23, suffix: '' },
  { label: 'Products Delivered', value: 10, suffix: 'M+' }, // Added for balance
];

const services = [
  {
    title: 'Strategic Distribution',
    description: 'Our meticulously planned hub-and-spoke network ensures timely delivery to even the most remote locations across India.',
    // Using Lucide icons for cleaner, consistent premium look (you can swap back to SVGs if strictly needed)
    icon: <Truck className="w-8 h-8 text-[#B8520F]" />,
    delay: 0.1
  },
  {
    title: 'Quality Assurance',
    description: 'Every product undergoes a rigorous 3-step verification process to meet the high standards our government clients deserve.',
    icon: <CheckCircle2 className="w-8 h-8 text-[#4B6145]" />,
    delay: 0.2
  },
  {
    title: 'Inventory Consistency',
    description: 'We utilize AI-driven forecasting to ensure products are always in stock and available for immediate dispatch.',
    icon: <PackageCheck className="w-8 h-8 text-[#8B4513]" />,
    delay: 0.3
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-24 md:py-12 bg-[#FDF8F0] overflow-hidden">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      {/* Soft Gradient Blob */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D2722F]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      {/* Cultural Image - Blended Background */}
      <div className="absolute left-0 bottom-0 h-[600px] w-[600px] opacity-10 pointer-events-none mix-blend-multiply">
         <Image 
            src="/CulturalWomen.png" 
            alt="Cultural Heritage" 
            fill
            className="object-contain object-bottom-left"
         />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D2722F] font-bold tracking-widest uppercase text-xs mb-3 block"
          >
            Why Choose Sridhi Enterprises
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#3D1D07] font-serif leading-tight"
          >
            Excellence in every <br/>
            <span className="text-[#B8520F]">step of the journey.</span>
          </motion.h2>
        </div>

        {/* --- STATS ROW (Glassmorphism) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 bg-white/60 backdrop-blur-xl border border-[#D2722F]/10 rounded-2xl p-8 md:p-12 shadow-xl shadow-[#D2722F]/5"
        >
          {stats.map((stat, i) => (
             <StatItem key={i} stat={stat} />
          ))}
        </motion.div>

        {/* --- SERVICES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}

// --- SUB-COMPONENTS ---

function StatItem({ stat }: { stat: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-[#3D1D07] font-serif mb-2 flex justify-center items-center">
        {isInView && <Counter value={stat.value} />}
        <span className="text-[#D2722F]">{stat.suffix}</span>
      </div>
      <p className="text-[#3D1D07]/60 text-sm font-medium uppercase tracking-wide">
        {stat.label}
      </p>
    </div>
  );
}

function Counter({ value }: { value: number }) {
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
}

function ServiceCard({ service }: { service: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: service.delay, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group bg-[#FFFBF5] rounded-2xl p-8 border border-[#D2722F]/10 shadow-sm hover:shadow-2xl hover:shadow-[#D2722F]/10 transition-all duration-300"
    >
      <div className="w-16 h-16 bg-white rounded-2xl border border-[#D2722F]/20 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>
      
      <h3 className="text-xl font-bold text-[#3D1D07] font-serif mb-3 group-hover:text-[#D2722F] transition-colors">
        {service.title}
      </h3>
      
      <p className="text-[#3D1D07]/70 leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}