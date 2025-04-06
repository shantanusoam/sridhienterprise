'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    title: 'Kitchenware',
    description:
      'High-quality kitchenware designed to make cooking efficient and enjoyable.',
    image:
      'https://cdn.shopify.com/s/files/1/0268/9577/7903/files/3_480x480.jpg?v=1586949302',
    link: 'https://www.pnbkitchenmate.com/',
    iconSvg: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 5H16M8 9H16M7 13H12M20 7L18 12H6L4 7"
          stroke="#A93118"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 12V20C6 20.5523 6.44772 21 7 21H17C17.5523 21 18 20.5523 18 20V12"
          stroke="#A93118"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Snacks & Sweets',
    description:
      'Authentic Indian sweets and snacks that bring traditional flavors to your table.',
    image: 'https://bhikharamchandmal.in/pub/media/wysiwyg/slider/banner-2.jpg',
    link: 'https://bhikharamchandmal.in/',
    iconSvg: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3V4M12 20V21M4 12H3M5.5 5.5L6.5 6.5M18.5 5.5L17.5 6.5M21 12H20M17.5 16C17.5 17.3807 16.8807 18 15.5 18H8.5C7.11929 18 6.5 17.3807 6.5 16C6.5 14.6193 7.11929 14 8.5 14H15.5C16.8807 14 17.5 14.6193 17.5 16Z"
          stroke="#A93118"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5 14C15.5 11.7909 13.7091 10 11.5 10C9.29086 10 7.5 11.7909 7.5 14"
          stroke="#A93118"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Textiles',
    description:
      'Premium textile products known for their durability and comfort.',
    image:
      'https://cdn.shopify.com/s/files/1/0683/0712/4528/files/Product-1.webp?v=1672294968',
    link: 'https://www.sarlamills.in/',
    iconSvg: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 10.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H12"
          stroke="#B8520F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 2V22"
          stroke="#B8520F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 2V10"
          stroke="#B8520F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 16C22 16.7956 21.6839 17.5587 21.1213 18.1213C20.5587 18.6839 19.7956 19 19 19C18.2044 19 17.4413 18.6839 16.8787 18.1213C16.3161 17.5587 16 16.7956 16 16C16 15.2044 16.3161 14.4413 16.8787 13.8787C17.4413 13.3161 18.2044 13 19 13C19.7956 13 20.5587 13.3161 21.1213 13.8787C21.6839 14.4413 22 15.2044 22 16Z"
          stroke="#8B4513"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Herbal Care',
    description:
      'Natural herbal skincare and haircare products that promote wellness.',
    image:
      'https://cdn.shopify.com/s/files/1/0086/9036/8627/files/sa_my_SPF_Banner.jpg?v=1685358980',
    link: 'https://vaadiherbals.in/',
    iconSvg: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 15C8 15 9 14 12 14C15 14 16 15 16 15"
          stroke="#4B6145"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 9C8.22386 9 8 8.77614 8 8.5C8 8.22386 8.22386 8 8.5 8C8.77614 8 9 8.22386 9 8.5C9 8.77614 8.77614 9 8.5 9Z"
          stroke="#4B6145"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5 9C15.2239 9 15 8.77614 15 8.5C15 8.22386 15.2239 8 15.5 8C15.7761 8 16 8.22386 16 8.5C16 8.77614 15.7761 9 15.5 9Z"
          stroke="#4B6145"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="#4B6145"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Hygiene Products',
    description:
      "Hygienic and comfortable sanitary napkins ensuring women's health and comfort.",
    image:
      'https://www.7softindia.com/wp/wp-content/uploads/2023/01/website-1.jpg',
    link: 'https://www.7softindia.com/wp/',
    iconSvg: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5 4.5C14.5 3.11929 13.3807 2 12 2C10.6193 2 9.5 3.11929 9.5 4.5C9.5 5.88071 10.6193 7 12 7C13.3807 7 14.5 5.88071 14.5 4.5Z"
          stroke="#A93118"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 14C17.5 13.4477 17.0523 13 16.5 13H7.5C6.94772 13 6.5 13.4477 6.5 14V19.5C6.5 20.0523 6.94772 20.5 7.5 20.5H16.5C17.0523 20.5 17.5 20.0523 17.5 19.5V14Z"
          stroke="#A93118"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 7V13"
          stroke="#A93118"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 13L14.1961 11.2887C14.0369 10.6516 13.4655 10.1901 12.8117 10.1971L11.1883 10.2102C10.5345 10.2171 9.96309 10.6834 9.80386 11.3228L9.5 13"
          stroke="#A93118"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, type: 'spring' },
  },
};

export default function ProductsCategriesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('products-categories-section');
      if (!element) return;

      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="products-categories-section"
      className="py-16 md:py-24 relative font-serif overflow-hidden"
      style={{
        backgroundColor: '#FDF3E3',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23b88c46' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        backgroundSize: '80px',
      }}
    >
      {/* Decorative border */}
      <div className="absolute inset-8 border border-amber-800/20 rounded-lg pointer-events-none"></div>

      {/* Background decorative circles */}
      <div className="absolute right-0 top-0 w-96 h-96 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="mandalaPattern"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <g fill="none" stroke="#8B4513" strokeWidth="0.5">
                <circle cx="100" cy="100" r="80" />
                <circle cx="100" cy="100" r="70" />
                <circle cx="100" cy="100" r="60" />
                <circle cx="100" cy="100" r="50" />
                <circle cx="100" cy="100" r="40" />
                <circle cx="100" cy="100" r="30" />
                <circle cx="100" cy="100" r="20" />
                <path d="M 100,20 L 100,180" />
                <path d="M 20,100 L 180,100" />
                <path d="M 40,40 L 160,160" />
                <path d="M 40,160 L 160,40" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mandalaPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          style={{ color: '#A93118', fontFamily: 'Lora, serif' }}
        >
          Our Product Categories
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-amber-900/80 max-w-2xl mx-auto text-center mb-12"
        >
          Explore our diverse range of high-quality products designed to enhance
          your daily life
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="h-full"
            >
              <div className="bg-[#FEF6E6] rounded-xl overflow-hidden border border-amber-200 h-full shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />

                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent"></div>

                  {/* Category title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 p-2 bg-amber-100 rounded-lg border border-amber-200 mr-4">
                      {category.iconSvg}
                    </div>
                    <p className="text-amber-900/80 flex-grow">
                      {category.description}
                    </p>
                  </div>

                  <Link
                    href={category.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      className="w-full flex items-center justify-center px-6 py-3 rounded-lg text-white transition-all duration-300"
                      style={{
                        background:
                          'linear-gradient(90deg, #973116 0%, #B8520F 50%, #E18931 100%)',
                      }}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: '0px 4px 15px rgba(183, 85, 39, 0.25)',
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="mr-2">Explore Products</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Import serif font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap');

        .font-serif {
          font-family: 'Lora', serif;
        }
      `}</style>
    </section>
  );
}
