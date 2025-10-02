"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getAllProducts, Product, ProductFilter, filterProducts } from "@/lib/companies";
import PlaceholderImage from "@/components/ui/placeholder-image";

interface ProductGridProps {
  filters?: ProductFilter;
}

const ProductGrid = ({ filters }: ProductGridProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    console.log('ProductGrid filters changed:', filters);
    if (filters) {
      const filteredProducts = filterProducts(filters);
      console.log('Filtered products count:', filteredProducts.length);
      console.log('First few filtered products:', filteredProducts.slice(0, 3).map(p => ({ id: p.id, title: p.title, companyId: p.companyId })));
      setProducts(filteredProducts);
    } else {
      const allProducts = getAllProducts();
      console.log('All products count:', allProducts.length);
      setProducts(allProducts);
    }
  }, [filters]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Link href={`/products/${product.id}`}>
              <div className="relative h-64">
                <PlaceholderImage
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  type="product"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-red-600">
                  {product.title}
                </h3>
                <p className="text-gray-700 mb-2">{product.companyName}</p>
                <p className="text-emerald-600 font-bold mb-2">
                  ₹{product.salePrice || product.price || 'Price on request'}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  {product.category}
                </p>
                <div className="mt-2">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    product.availability === 'In stock' 
                      ? 'bg-green-100 text-green-800' 
                      : product.availability === 'Limited stock'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.availability}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      {/* Debug info */}
      <div className="mt-4 p-4 bg-gray-100 rounded-lg text-sm">
        <p><strong>Debug Info:</strong></p>
        <p>Total Products: {products.length}</p>
        <p>Showing: {products.length} products (all products, no pagination)</p>
        <p>Filters: {JSON.stringify(filters)}</p>
      </div>
    </div>
  );
};

export default ProductGrid;
