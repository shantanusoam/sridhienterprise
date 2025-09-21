// Utility functions to generate placeholder SVG images

export function generateCompanyPlaceholder(width: number = 400, height: number = 300, companyName: string = 'Company'): string {
  const initials = companyName
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="companyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FEF3C7;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#F59E0B;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#companyGrad)"/>
      <circle cx="${width/2}" cy="${height/2 - 20}" r="40" fill="rgba(255,255,255,0.3)"/>
      <text x="${width/2}" y="${height/2 - 15}" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#92400E">${initials}</text>
      <text x="${width/2}" y="${height/2 + 15}" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#92400E" opacity="0.8">Company Image</text>
    </svg>
  `)}`;
}

export function generateProductPlaceholder(width: number = 300, height: number = 300, productName: string = 'Product'): string {
  const firstLetter = productName.charAt(0).toUpperCase();
  
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="productGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FDF4FF;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#E879F9;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#productGrad)"/>
      <rect x="${width/2 - 30}" y="${height/2 - 30}" width="60" height="60" rx="8" fill="rgba(255,255,255,0.3)"/>
      <text x="${width/2}" y="${height/2 + 5}" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#86198F">${firstLetter}</text>
      <text x="${width/2}" y="${height/2 + 25}" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#86198F" opacity="0.8">Product</text>
    </svg>
  `)}`;
}

