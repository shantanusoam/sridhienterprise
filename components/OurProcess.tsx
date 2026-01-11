'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Truck, 
  HeadphonesIcon, 
  Globe2, 
  ArrowRight,
  Sparkles,
  Zap,
  Leaf
} from 'lucide-react';

// --- Assets & Configuration ---

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

const colors = {
  sourcing: '#8B3A3A',     // Deep Red/Burgundy
  quality: '#D97706',      // Rich Amber
  distribution: '#B45309', // Bronze/Ochre
  support: '#4D7C0F',      // Deep Olive
  background: '#FDFCF6',   // Cream/Bone White
  text: '#1F2937',         // Charcoal
  gold: '#D4AF37',         // Metallic Gold Accent
};

const UsersIcon = ({ ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const processSteps = [
  {
    id: 'sourcing',
    value: 'sourcing',
    title: 'Strategic Sourcing',
    subtitle: 'We partner with top manufacturers',
    icon: Globe2,
    secondaryIcon: Leaf,
    description: 'Our team carefully selects products that meet the specific needs of government and paramilitary canteens, ensuring quality and value for money.',
    color: colors.sourcing,

  },
  {
    id: 'quality',
    value: 'quality',
    title: 'Rigorous Quality',
    subtitle: 'Zero Compromise Policy',
    icon: ShieldCheck,
    secondaryIcon: Sparkles,
    description: 'Every product undergoes thorough quality control processes before being distributed to our clients. We also offer custom pricing and availability as per client needs.',
    color: colors.quality,
    stats: { value: '99.8%', label: 'Quality Rate' },
  },
  {
    id: 'distribution',
    value: 'distribution',
    title: 'Nationwide Distribution',
    subtitle: 'Efficient nationwide network',
    icon: Truck,
    secondaryIcon: Zap,
    description: 'Our extensive distribution network ensures that products reach our clients efficiently, even in remote locations.',
    color: colors.distribution,
    stats: { value: '23', label: 'States Covered' },
  },
  {
    id: 'support',
    value: 'support',
    title: 'Dedicated Support',
    subtitle: 'Partnership Beyond Delivery',
    icon: HeadphonesIcon,
    secondaryIcon: UsersIcon,
    description: 'We provide ongoing support to our clients, addressing any concerns and ensuring their continued satisfaction with our products and services.',
    color: colors.support,
    stats: { value: '24/7', label: 'Support' },
  },
];

// --- Components ---

const MandalaBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.04]">
    <motion.div 
      className="absolute -top-[20%] -left-[20%] w-[70vw] h-[70vw] bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: 'url(/mandala-pattern.svg)' }}
      animate={{ rotate: 360 }}
      transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
    />
    <motion.div 
      className="absolute -bottom-[20%] -right-[20%] w-[80vw] h-[80vw] bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: 'url(/mandala-pattern.svg)' }}
      animate={{ rotate: -360 }}
      transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
    />
    {/* Noise Texture Overlay */}
    <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.1\'/%3E%3C/svg%3E")' }}></div>
  </div>
);

const InfiniteMarquee = ({ items, direction = 'left', speed = 20 }: { items: typeof distributors, direction?: 'left' | 'right', speed?: number }) => {
  return (
    <div className="flex overflow-hidden w-full relative group">
      <motion.div 
        className="flex gap-8 py-4 px-4 min-w-full"
        animate={{ x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items, ...items].map((d, i) => (
          <div 
            key={`${d.name}-${i}`} 
            className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-white rounded-xl shadow-sm border border-stone-100 p-4 flex items-center justify-center relative hover:shadow-md transition-shadow"
          >
            <div className="relative w-full h-full">
               <Image 
                 src={d.src} 
                 alt={d.name} 
                 fill 
                 className="object-contain filter transition-all duration-300"
               />
            </div>
          </div>
        ))}
      </motion.div>
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

const DistributorShowcase = () => {
  const firstRow = distributors.slice(0, 5);
  const secondRow = distributors.slice(5);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-2 md:p-4 overflow-hidden">
      <div className="w-full max-w-lg space-y-6">
         <InfiniteMarquee items={firstRow} direction="left" speed={25} />
         <InfiniteMarquee items={secondRow} direction="right" speed={30} />
      </div>
      <div className="mt-8 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-stone-400 mb-2">Trusted By Our Nation&apos;s Finest</p>
        <div className="h-0.5 w-16 bg-stone-300 mx-auto rounded-full"></div>
      </div>
    </div>
  );
};

const StepVisual = ({ step }: { step: typeof processSteps[0] }) => {
  if (step.id === 'distribution') {
    return (
      <div className="flex flex-col h-full w-full justify-between">
        <div className="flex-1 flex flex-col justify-center">
           <DistributorShowcase />
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-stone-600 text-sm font-medium text-center px-4 py-4 max-w-lg mx-auto bg-white/50 backdrop-blur-sm rounded-xl border border-stone-100/50 shadow-sm mb-4"
        >
          {step.description}
        </motion.p>
      </div>
    );
  }

  const Icon = step.icon;
  const SecondaryIcon = step.secondaryIcon;

  return (
    <div className="relative w-full h-full flex items-center justify-center p-6 md:p-8">
      {/* Dynamic Background Aura */}
      <motion.div 
        className="absolute w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        style={{ backgroundColor: step.color }}
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        style={{ backgroundColor: colors.gold, right: '15%', bottom: '15%' }}
        animate={{ 
          scale: [1.3, 1, 1.3],
          x: [0, -30, 0],
          y: [0, 30, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Glass Card Container - Expanded and Utilized */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md bg-white/60 backdrop-blur-xl rounded-[2rem] border border-white/80 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] flex flex-col items-center justify-center overflow-hidden group p-8 md:p-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50" />
        
        {/* Animated Icons & Graphics */}
        <div className="relative z-10 flex flex-col items-center gap-6 w-full text-center">
           <div className="relative mb-2">
              <div className="absolute inset-0 bg-white/50 rounded-full blur-xl animate-pulse" style={{ backgroundColor: `${step.color}20` }}></div>
              <Icon size={72} color={step.color} strokeWidth={1} className="drop-shadow-sm relative z-10" />
              
              {/* Secondary decorative icon */}
              <motion.div 
                className="absolute -right-4 -top-4 bg-white rounded-full p-2 shadow-sm border border-stone-100"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                 <SecondaryIcon size={18} color={colors.gold} />
              </motion.div>
           </div>
           
           <div className="space-y-3">
             <h3 className="font-serif text-xl font-bold text-stone-800">{step.title}</h3>
             <p className="text-stone-600 text-sm leading-relaxed font-medium">
               {step.description}
             </p>
           </div>

           {step.id === 'sourcing' && (
              <div className="flex gap-2 mt-2">
                 {[1,2,3].map(i => (
                   <motion.div 
                     key={i} 
                     className="w-1.5 h-1.5 rounded-full" 
                     style={{ backgroundColor: step.color }}
                     animate={{ y: [0, -4, 0] }}
                     transition={{ delay: i * 0.15, repeat: Infinity, duration: 1.5 }}
                   />
                 ))}
              </div>
           )}

           {step.id === 'support' && (
              <div className="mt-2 w-24 h-1 bg-stone-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-green-500"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                />
              </div>
           )}
        </div>
      </motion.div>
    </div>
  );
};

export default function OurProcess() {
  const [activeStepId, setActiveStepId] = useState(processSteps[0].id);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  
  const activeStep = processSteps.find(s => s.id === activeStepId) || processSteps[0];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const currentIndex = processSteps.findIndex(s => s.id === activeStepId);
      const nextIndex = (currentIndex + 1) % processSteps.length;
      setActiveStepId(processSteps[nextIndex].id);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeStepId, isPaused]);

  return (
    <section 
      ref={containerRef}
      className="relative pb-16 md:pb-24 pt-8 overflow-hidden bg-[#FDFCF6]"
    >
      {/* <MandalaBackground /> */}

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <span className="h-px w-8 bg-stone-300"></span>
            <span className="text-stone-500 uppercase tracking-[0.2em] text-xs font-semibold">How We Operate</span>
            <span className="h-px w-8 bg-stone-300"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-stone-900 mb-6"
          >
            Our Process to <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-amber-600">Excellence</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-stone-600 leading-relaxed font-serif max-w-2xl mx-auto px-4"
          >
            Precision in sourcing. Rigor in quality. Speed in distribution. 
            <br className="hidden md:block"/> We don&apos;t just deliver products; we deliver reliability.
          </motion.p>
        </div>

        {/* --- Mobile Navigation (Horizontal Scroll) --- */}
        <div className="lg:hidden mb-8 sticky top-4 z-30">
          <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar snap-x px-4 justify-start sm:justify-center">
            {processSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => {
                  setActiveStepId(step.id);
                  setIsPaused(true);
                }}
                className={`flex-none snap-center px-5 py-2.5 rounded-full text-xs font-bold shadow-sm border transition-all duration-300 ${
                  activeStepId === step.id 
                    ? 'bg-stone-900 text-white border-stone-900 scale-105' 
                    : 'bg-white text-stone-500 border-stone-200 hover:border-stone-400'
                }`}
              >
                {step.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Layout */}
        <div 
          className="flex flex-col lg:flex-row gap-0 bg-white lg:rounded-[2rem] rounded-2xl shadow-xl overflow-hidden border border-stone-100 ring-1 ring-stone-900/5 min-h-[500px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* LEFT: Navigation (Desktop) & Detailed Content */}
          <div className="w-full lg:w-1/2 p-6 md:p-10 flex flex-col relative bg-white z-20 border-b lg:border-b-0 lg:border-r border-stone-100">
             
             {/* Desktop Timeline Navigation */}
             <div className="hidden lg:flex flex-col space-y-1 mb-8">
                {processSteps.map((step) => (
                  <div 
                    key={step.id}
                    className="relative group"
                  >
                    <button
                      onClick={() => {
                        setActiveStepId(step.id);
                        setIsPaused(true);
                      }}
                      className={`w-full text-left py-3 pl-6 relative transition-all duration-300 ${
                        activeStepId === step.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                      }`}
                    >
                      <span className={`block font-serif text-xl font-bold mb-0.5 ${activeStepId === step.id ? 'text-stone-900' : 'text-stone-600'}`}>
                        {step.title}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: activeStepId === step.id ? step.color : 'inherit' }}>
                        {step.subtitle}
                      </span>
                    </button>
                    
                    {/* Active Indicator Line */}
                    {activeStepId === step.id && (
                      <motion.div 
                        layoutId="active-indicator"
                        className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full"
                        style={{ backgroundColor: step.color }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                ))}
             </div>

             {/* Dynamic Content Area */}
             <div className="flex-1 flex flex-col justify-center">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeStepId}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.3 }}
                   className="space-y-4"
                 >
                   <div className="lg:hidden flex items-center gap-2 mb-1 text-stone-400 font-serif italic text-sm">
                      <activeStep.icon size={16} color={activeStep.color} />
                      <span>{activeStep.subtitle}</span>
                   </div>
                   
                   {/* Stats Display */}
                   {activeStep.stats && (
                     <div className="pt-4 pb-2">
                       <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border" style={{ borderColor: `${activeStep.color}40`, backgroundColor: `${activeStep.color}10` }}>
                         <span className="text-2xl font-bold font-serif" style={{ color: activeStep.color }}>
                           {activeStep.stats.value}
                         </span>
                         <span className="text-sm font-medium text-stone-600">
                           {activeStep.stats.label}
                         </span>
                       </div>
                     </div>
                   )}
                   
                   <motion.div className="pt-4">
                     <button
                       className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all"
                       style={{ color: activeStep.color }}
                     >
                       <span className="border-b border-transparent group-hover:border-current transition-all pb-0.5">Learn More</span> 
                       <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                     </button>
                   </motion.div>
                 </motion.div>
               </AnimatePresence>
             </div>
          </div>

          {/* RIGHT: Visual Stage */}
          <div className="w-full lg:w-1/2 relative bg-stone-50 overflow-hidden min-h-[350px] md:min-h-[450px] lg:h-auto">
            {/* Ambient Background for Stage */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id + '-bg'}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                 <div 
                   className="absolute inset-0 opacity-15"
                   style={{ 
                     background: `radial-gradient(circle at 70% 50%, ${activeStep.color} 0%, transparent 70%)` 
                   }} 
                 />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                className="relative w-full h-full flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: "circOut" }}
              >
                <div className="flex-1 w-full relative min-h-0">
                  <StepVisual step={activeStep} />
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Large Decorative Number */}
            <div className="absolute -bottom-10 -right-10 pointer-events-none select-none">
               <motion.span 
                 key={activeStepId + '-num'}
                 initial={{ y: 50, opacity: 0 }}
                 animate={{ y: 0, opacity: 0.05 }}
                 className="font-serif text-[15rem] leading-none font-bold text-stone-900 block"
               >
                 {processSteps.findIndex(s => s.id === activeStepId) + 1}
               </motion.span>
            </div>
          </div>
        </div>

      </div>
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
        
        .font-serif { font-family: 'Lora', serif; }
        
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
