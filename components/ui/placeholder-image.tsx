'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Package, Building2 } from 'lucide-react';
import { generateCompanyPlaceholder, generateProductPlaceholder } from '@/lib/utils/placeholder-svg';

interface PlaceholderImageProps {
  src?: string | null;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  type?: 'product' | 'company';
}

export default function PlaceholderImage({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes,
  className = '',
  style,
  priority = false,
  type = 'product'
}: PlaceholderImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // If no src or image failed to load, show SVG placeholder
  if (!src || imageError) {
    const placeholderSrc = type === 'company' 
      ? generateCompanyPlaceholder(width || 400, height || 300, alt)
      : generateProductPlaceholder(width || 300, height || 300, alt);
    
    return (
      <Image
        src={placeholderSrc}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        sizes={sizes}
        className={className}
        style={style}
        priority={priority}
      />
    );
  }

  return (
    <>
      {isLoading && (
        <div 
          className={`flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse ${className}`}
          style={fill ? { position: 'absolute', inset: 0, ...style } : { width, height, ...style }}
        >
          <div className="flex flex-col items-center justify-center text-gray-400">
            {type === 'company' ? (
              <Building2 className="w-6 h-6 opacity-50" />
            ) : (
              <Package className="w-6 h-6 opacity-50" />
            )}
          </div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        sizes={sizes}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        style={style}
        priority={priority}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImageError(true);
          setIsLoading(false);
        }}
      />
    </>
  );
}
