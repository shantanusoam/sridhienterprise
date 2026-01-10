'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

// Import available images
// import AboutUS from './../public/AboutUS.png';
// import HeroProducts from './../public/images/kitchenware-category.jpg';
// import CulturalWomen from './../public/CulturalWomen.png';
// import Hero2 from './../public/Hero2.png';
import ExperienceShield from './ExperienceShield';

// Images for slideshow
const slideImages = [
  // {
  //   src: AboutUS,
  //   alt: 'Product showcase 1',
  // },
  // {
  //   src: HeroProducts,
  //   alt: 'Product showcase 2',
  // },
  {
    src: '/distributorcanteens/image (5).png',
    alt: 'Army display',
  },
  // {
  //   src: Hero2,
  //   alt: 'Product display',
  // },
];

export default function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto slideshow functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#FAF3E0] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left section with image slideshow */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden relative aspect-square max-h-[600px]">
              {/* Orange border effect */}
              <div className="absolute inset-0 rounded-lg border-[16px] border-[#D2722F] z-10"></div>

              {/* Slideshow */}
              <div className="relative h-full bg-black rounded-lg">
                {slideImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom panel with buttons */}
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-[#D2722F] rounded-b-lg z-20 flex justify-between items-center px-8">
              <Button className="bg-[#983B0F] hover:bg-[#7A2F0C] text-white rounded-full px-8 py-2 text-lg font-semibold">
                Our History
              </Button>

              <Button className="bg-[#E36511] hover:bg-[#F17621] text-white rounded-full px-8 py-2 text-lg font-semibold">
                Read More
              </Button>
            </div>
          </div>

          {/* Right section with content */}
          <div className="space-y-8 text-[#3D1D07]">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to
              <br />
              Our world.
            </h1>

            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-[#983B0F] mb-3">
                  Our History
                </h2>
                <p className="text-lg">
                  Established in 2012, Sridhi Enterprises has been a trusted
                  distributor dedicated to serving the needs of serving and
                  retired personnel of Central Armed Police Forces CAPFs (BSF,
                  CRPF, CISF, ITBP, SSB, Assam Rifles, RPF, IB, SPG and All State
                  Police Organizations).
                  <br /> The ministry of Home Affairs has setup the Kendriya
                  Police kalyan bhandar that came into existence in 2006. As of
                  now there are 119 Master Bhandar which act as distribution
                  centers and 2200 subsidiary canteens across India, serving
                  families across the country.
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        className="ml-2 inline-flex align-middle"
                        aria-label="More information"
                      >
                        <Info className="h-4 w-4 text-[#D2722F]" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Our proprietorship has been operating since 2019, with
                        the company officially registered in 2024.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#983B0F] mb-3">
                  Our People
                </h2>
                <p className="text-lg">
                  We have highly experienced employees, who take pride in the
                  work they to : -Building and maintaining strong relationships
                  with our clients and partners.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#983B0F] mb-3">
                  Our Vision & Mission
                </h2>
                <p className="text-lg">
                  Our mission is to bridge quality manufacturers with
                  governmenut canteens, ensuring that our esteemed clients have
                  access to top-notch products that enhance their dally lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Counter Shield */}
      <div className="absolute right-8 bottom-8 lg:right-16 lg:bottom-10 hidden lg:block">
        <ExperienceShield
          years={14} // Or calculate dynamically: new Date().getFullYear() - 2012
          // textLine1="Custom Text" // Optional: Override defaults
          // textLine2="if needed"   // Optional: Override defaults
          // You could pass Framer Motion props here if needed
          // initial={{ opacity: 0, scale: 0.8 }}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{ delay: 0.5 }}
        />
      </div>
    </section>
  );
}
