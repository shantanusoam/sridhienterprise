"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  color: string;
  link: string;
  index: number;
}

export function CategoryCard({
  title,
  description,
  image,
  color,
  link,
  index,
}: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative overflow-hidden rounded-2xl"
    >
      <Link href={link} className="block">
        <div
          className="absolute inset-0 z-10 "
          style={{
            background: `linear-gradient(210deg, ${color}10 0%, ${color}50 100%)`,
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
          }}
        />
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <motion.div
              whileHover={{ rotate: 45 }}
              className="bg-white/20 p-2 rounded-full backdrop-blur-sm"
            >
              <ArrowUpRight className="w-6 h-6 text-white" />
            </motion.div>
          </div>
          <p className="mt-2 text-white/90 max-w-md">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
}
