import { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";
import ProductFilter from "@/components/ProductFilter";
import { COLORS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Products | Sridhi Enterprises",
  description:
    "Explore our wide range of products for government and paramilitary canteens.",
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className={`text-4xl font-bold mb-8 text-${COLORS.primary}`}>
        Our Products
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <ProductFilter />
        </div>
        <div className="w-full md:w-3/4">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}
