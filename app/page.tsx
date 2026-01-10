'use client';
// import { Metadata } from "next";
import Link from 'next/link';
// import Image from "next/image";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
// import { useInView } from "react-intersection-observer";
// import ProductCategories from "@/components/ProductCategories";
import Testimonials from '@/components/Testimonials';
// import Footer from "@/components/Footer";

import { motion } from 'framer-motion';

import AboutSection from '@/components/about-section';
import ServicesSection from '@/components/services-section';
import ProductsCategriesPage from '@/components/categries-section';

import OurProcess from '@/components/OurProcess';
import StatsAndServicesSection from '@/components/StatsandServiceSection';
import { CustomCursor } from '@/components/custom-cursor';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <CustomCursor />
        <Hero />
        <ServicesSection />
        <AboutSection />
        <div className="relative ">
          <ProductsCategriesPage />
        </div>
        <div className="bg-[#FDF3E3]">
          <StatsAndServicesSection />

          {/* <ProductCategories /> */}
          <OurProcess />
          {/* <Testimonials /> */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="py-16 md:py-20 font-serif relative overflow-hidden"
            style={{
              backgroundColor: '#F5E6C8',
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23b88c46' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")",
              backgroundSize: '80px',
            }}
          >
            {/* Decorative elements that match the other components */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="absolute left-0 top-0 w-full h-full">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="ctaPattern"
                      x="0"
                      y="0"
                      width="400"
                      height="400"
                      patternUnits="userSpaceOnUse"
                    >
                      <g fill="none" stroke="#8B4513" strokeWidth="0.5">
                        <circle cx="200" cy="200" r="150" />
                        <circle cx="200" cy="200" r="140" />
                        <circle cx="200" cy="200" r="130" />
                        <circle cx="200" cy="200" r="120" />
                        <circle cx="200" cy="200" r="110" />
                        <circle cx="200" cy="200" r="100" />
                        <circle cx="200" cy="200" r="90" />
                        <circle cx="200" cy="200" r="80" />
                        <circle cx="200" cy="200" r="70" />
                        <circle cx="200" cy="200" r="60" />
                        <circle cx="200" cy="200" r="50" />
                        <circle cx="200" cy="200" r="40" />

                        {/* Decorative lines */}
                        <path d="M 200,50 L 200,350" />
                        <path d="M 50,200 L 350,200" />
                        <path d="M 90,90 L 310,310" />
                        <path d="M 90,310 L 310,90" />
                      </g>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#ctaPattern)" />
                </svg>
              </div>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
              <motion.h2
                variants={fadeIn}
                className="text-4xl md:text-5xl font-bold mb-8"
                style={{ color: '#A93118', fontFamily: 'Lora, serif' }}
              >
                Elevate Your Service Standards
              </motion.h2>

              <motion.p
                variants={fadeIn}
                className="mb-12 text-lg opacity-90 max-w-2xl mx-auto"
                style={{ color: '#5D3A1A', fontFamily: 'Lora, serif' }}
              >
                Join the hundreds of government and paramilitary canteens that
                trust Sridhi Enterprises to deliver excellence. Let&apos;s build
                a partnership that serves those who serve our nation.
              </motion.p>

              <motion.div variants={fadeIn}>
                <Link href="/contact">
                  <div
                    className="inline-block rounded-lg text-white text-lg px-8 py-4 font-medium transition-all duration-300 hover:shadow-lg"
                    style={{
                      background:
                        'linear-gradient(90deg, #973116 0%, #B8520F 50%, #E18931 100%)',
                      fontFamily: 'Lora, serif',
                    }}
                  >
                    Begin Your Journey With Us
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Import serif font - this would be included once in a layout component */}
            <style jsx global>{`
              @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap');
            `}</style>
          </motion.section>
        </div>
      </main>
    </>
  );
}
