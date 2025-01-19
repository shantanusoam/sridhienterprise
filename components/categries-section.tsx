"use client";

import { motion } from "framer-motion";
import { CategoryCard } from "@/components/category-card";
import { CustomCursor } from "@/components/custom-cursor";

const categories = [
  {
    title: "Kitchenware",
    description:
      "High-quality kitchenware designed to make cooking efficient and enjoyable.",
    image:
      "https://cdn.shopify.com/s/files/1/0268/9577/7903/files/3_480x480.jpg?v=1586949302",
    color: "#FF6B6B",
    link: "/products/kitchenware",
  },
  {
    title: "Snacks & Sweets",
    description:
      "Authentic Indian sweets and snacks that bring traditional flavors to your table.",
    image: "https://bhikharamchandmal.in/pub/media/wysiwyg/slider/banner-2.jpg",
    color: "#4ECDC4",
    link: "/products/snacks",
  },
  {
    title: "Textiles",
    description:
      "Premium textile products known for their durability and comfort.",
    image:
      "https://cdn.shopify.com/s/files/1/0683/0712/4528/files/Product-1.webp?v=1672294968",
    color: "#45B7D1",
    link: "/products/textiles",
  },
  {
    title: "Herbal Care",
    description:
      "Natural herbal skincare and haircare products that promote wellness.",
    image:
      "https://cdn.shopify.com/s/files/1/0086/9036/8627/files/sa_my_SPF_Banner.jpg?v=1685358980",
    color: "#96CEB4",
    link: "/products/herbal",
  },
  {
    title: "Hygiene Products",
    description:
      "Hygienic and comfortable sanitary napkins ensuring women's health and comfort.",
    image:
      "https://www.7softindia.com/wp/wp-content/uploads/2023/01/website-1.jpg",
    color: "#D4A5A5",
    link: "/products/hygiene",
  },
];

export default function ProductsCategriesPage() {
  return (
    <div className="h-full w-full ">
      <CustomCursor />
      <div className="max-w-7xl h-full w-full  mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-tl from-amber-500 to-yellow-400 bg-clip-text text-transparent pb-2 text-white mb-4">
            Our Product Categories
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our diverse range of high-quality products designed to
            enhance your daily life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category, index) => (
            <CategoryCard key={category.title} {...category} index={index} />
          ))}
        </motion.div>

        {/* Animated background gradient */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-700 " />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]" />
        </div>
      </div>
    </div>
  );
}
