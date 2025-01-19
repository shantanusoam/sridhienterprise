"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { COLORS } from "@/lib/constants";

const categories = [
  {
    title: "Kitchenware",
    description: "High-quality kitchenware from PNB Kitchenmate",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Snacks and Sweets",
    description: "Delicious treats from Bhikharam Chandmal",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Herbal Care",
    description: "Natural care products from Vaadi Herbals",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Stationery",
    description: "Office supplies for efficient operations",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Electronics",
    description: "Reliable electronic goods for daily use",
    image: "/placeholder.svg?height=300&width=400",
  },
];

const ProductCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
    );
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl font-bold mb-12 text-center text-${COLORS.primary}`}
        >
          Our Product Categories
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `${-currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {categories.map((category) => (
                <div key={category.title} className="w-full flex-shrink-0 px-4">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="relative h-48 mb-4">
                        <Image
                          src={category.image}
                          alt={category.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-t-lg"
                        />
                      </div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className={`text-${COLORS.text}`}>
                        Explore our wide range of {category.title.toLowerCase()}{" "}
                        products.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className={`w-full bg-${COLORS.secondary} hover:bg-${COLORS.primary} text-white`}
                      >
                        View Products
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
            aria-label="Previous category"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
            aria-label="Next category"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
