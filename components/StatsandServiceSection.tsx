'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';

// --- DATA ---
const stats = [
  { label: 'Years of Excellence', value: 14, suffix: '+' },
  { label: 'Satisfied Clients', value: 1570, suffix: '' },
  { label: 'States Covered  +3  (UT)', value: 23, suffix: '' },
];

const services = [
  {
    title: 'Strategic Distribution Network',
    description: 'Our meticulously planned network ensures timely delivery to even the most remote locations across India.',
    iconSvg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 18.5H19.5V12.5H16.5V18.5H18Z" fill="#B8520F" />
        <path d="M6.5 18.5H15V7.5H2V18.5H4.5" fill="#B8520F" />
        <path d="M4.5 18.5C4.5 19.6046 5.39543 20.5 6.5 20.5C7.60457 20.5 8.5 19.6046 8.5 18.5C8.5 17.3954 7.60457 16.5 6.5 16.5C5.39543 16.5 4.5 17.3954 4.5 18.5Z" fill="#8B4513" />
        <path d="M16.5 18.5C16.5 19.6046 17.3954 20.5 18.5 20.5C19.6046 20.5 20.5 19.6046 20.5 18.5C20.5 17.3954 19.6046 16.5 18.5 16.5C17.3954 16.5 16.5 17.3954 16.5 18.5Z" fill="#8B4513" />
        <path d="M16.5 12.5H19.5L22 16V18.5H19.5M4.5 18.5H2V7.5H15V18.5H16.5M4.5 18.5C4.5 19.6046 5.39543 20.5 6.5 20.5C7.60457 20.5 8.5 19.6046 8.5 18.5C8.5 17.3954 7.60457 16.5 6.5 16.5C5.39543 16.5 4.5 17.3954 4.5 18.5ZM16.5 18.5C16.5 19.6046 17.3954 20.5 18.5 20.5C19.6046 20.5 20.5 19.6046 20.5 18.5C20.5 17.3954 19.6046 16.5 18.5 16.5C17.3954 16.5 16.5 17.3954 16.5 18.5Z" stroke="#5C3817" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Rigorous Quality Assurance',
    description: 'Every product undergoes comprehensive quality verification to meet the high standards our clients deserve.',
    iconSvg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#4B6145" fillOpacity="0.2" />
        <path d="M9 12L11 14L15 10" stroke="#4B6145" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4B6145" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Inventory consistency and availability',
    description: 'We ensure that the products are always available and in stock to meet the needs of our clients.',
    iconSvg: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 9.5V4.5C21 3.94772 20.5523 3.5 20 3.5H4C3.44772 3.5 3 3.94772 3 4.5V9.5" stroke="#B8520F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 9.5V19.5C3 20.0523 3.44772 20.5 4 20.5H20C20.5523 20.5 21 20.0523 21 19.5V9.5" stroke="#B8520F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 9.5H21" stroke="#B8520F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 13.5L12 16.5L15 13.5" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="7" width="6" height="6" rx="1" fill="#8B4513" fillOpacity="0.3" />
      </svg>
    ),
  },
];

// --- ANIMATION COMPONENTS ---

// High performance counter using Framer Motion
function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: 2,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} />;
}


export default function StatsAndServicesSection() {
  return (
    <section className="relative py-20 md:py-28 bg-[#FAF3E0] overflow-hidden">
      {/* Subtle Noise Texture Background */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-multiply"
        style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`
        }}
      />

      {/* Radial Gradient Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D2722F]/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#983B0F]/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- SECTION 1: STATS & INTRO --- */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            {/* Left Content */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <span className="text-[#D2722F] font-bold tracking-wider uppercase text-sm mb-4 block">
                    Proven Excellence
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#3D1D07] font-serif mb-6 leading-tight">
                    Why Choose <br/> Sridhi Enterprises?
                </h2>
                <p className="text-lg text-[#3D1D07]/70 leading-relaxed mb-8">
                    With over a decade of experience, we have built a reputation for reliability, quality, and consistency in the distribution sector.
                </p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                    {stats.slice(0, 2).map((stat, idx) => (
                        <div key={idx} className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-[#D2722F]/10 shadow-sm">
                            <h3 className="text-4xl font-bold text-[#983B0F] mb-1 font-serif">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </h3>
                            <p className="text-sm font-semibold text-[#3D1D07]/80">{stat.label}</p>
                        </div>
                    ))}
                    {/* Full width stat */}
                    <div className="col-span-2 bg-[#D2722F] text-white p-6 rounded-2xl shadow-lg shadow-[#D2722F]/20 flex items-center justify-between">
                         <div>
                            <h3 className="text-4xl font-bold mb-1 font-serif">
                                <Counter value={stats[2].value} suffix={stats[2].suffix} />
                            </h3>
                            <p className="text-sm font-semibold opacity-90">{stats[2].label}</p>
                         </div>
                         <div className="bg-white/20 p-3 rounded-full">
                            {/* Simple India Map Icon */}
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                         </div>
                    </div>
                </div>
            </motion.div>

            {/* Right Visual (Cultural Image) */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-full min-h-[400px] flex items-center justify-center"
            >
                {/* Decorative Circle Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff] to-[#FEF6E6] rounded-full opacity-60 blur-3xl scale-90" />
                
                {/* Mandala SVG Pattern (Rotating slowly) */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-10"
                >
                     <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" stroke="#8B4513" strokeWidth="0.5">
                            <circle cx="100" cy="100" r="80" />
                            <circle cx="100" cy="100" r="60" />
                            <path d="M 100,20 L 100,180" />
                            <path d="M 20,100 L 180,100" />
                            <path d="M 40,40 L 160,160" />
                            <path d="M 40,160 L 160,40" />
                        </g>
                     </svg>
                </motion.div>

                {/* The Image - Contained properly now */}
                <div className="relative z-10 w-full max-w-sm">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b3/India_map_en.svg"
                        alt="India Map"
                        width={400}
                        height={450}
                        className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                </div>
            </motion.div>
        </div>

        {/* --- SECTION 2: SERVICES --- */}
        <div>
            <div className="text-center mb-16">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-[#3D1D07] font-serif mb-4"
                >
                    Our Services
                </motion.h2>
                <div className="w-24 h-1 bg-[#D2722F] mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-[#D2722F]/10 hover:-translate-y-2 overflow-hidden"
        >
            <div className="relative z-10 flex flex-col h-full items-center text-center">
                {/* Icon Container */}
                <div className="mb-6 p-4 rounded-full bg-[#FAF3E0] group-hover:bg-[#FDF3E3] transition-colors duration-300 ring-1 ring-[#D2722F]/20">
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                        {service.iconSvg}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-[#3D1D07] mb-4 font-serif">
                    {service.title}
                </h3>
                
                <p className="text-[#3D1D07]/70 leading-relaxed mb-4">
                    {service.description}
                </p>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#FDF3E3]">
                <div className="h-full w-0 group-hover:w-full bg-[#D2722F] transition-all duration-500 ease-out" />
            </div>
        </motion.div>
    );
}