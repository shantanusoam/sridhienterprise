"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { COLORS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Stainless Steel Cookware Set",
    category: "Kitchenware",
    brand: "PNB Kitchenmate",
    price: 2999,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Assorted Sweets Box",
    category: "Snacks",
    brand: "Bhikharam Chandmal",
    price: 599,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Herbal Face Wash",
    category: "Personal Care",
    brand: "Vaadi Herbals",
    price: 199,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Non-Stick Frying Pan",
    category: "Kitchenware",
    brand: "PNB Kitchenmate",
    price: 799,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Spicy Mixture",
    category: "Snacks",
    brand: "Bhikharam Chandmal",
    price: 149,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Aloe Vera Moisturizer",
    category: "Personal Care",
    brand: "Vaadi Herbals",
    price: 249,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 7,
    name: "Electric Kettle",
    category: "Kitchenware",
    brand: "PNB Kitchenmate",
    price: 1299,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 8,
    name: "Dry Fruit Collection",
    category: "Snacks",
    brand: "Bhikharam Chandmal",
    price: 899,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 9,
    name: "Herbal Shampoo",
    category: "Personal Care",
    brand: "Vaadi Herbals",
    price: 299,
    image: "/placeholder.svg?height=300&width=300",
  },
];

const ProductGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`bg-${COLORS.white} rounded-lg shadow-lg overflow-hidden`}
          >
            <Link href={`/products/${product.id}`}>
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3
                  className={`text-xl font-semibold mb-2 text-${COLORS.primary}`}
                >
                  {product.name}
                </h3>
                <p className={`text-${COLORS.text} mb-2`}>{product.brand}</p>
                {/* <p className={`text-${COLORS.secondary} font-bold`}>₹{product.price}</p> */}
                <p className={`text-sm text-${COLORS.text} mt-2`}>
                  {product.category}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 flex justify-center space-x-2">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ProductGrid;
