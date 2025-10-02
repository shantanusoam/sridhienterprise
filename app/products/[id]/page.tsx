import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { COLORS } from '@/lib/constants'
import { getAllProducts, Product } from '@/lib/companies'
import PlaceholderImage from '@/components/ui/placeholder-image'

export default function ProductPage({ params }: { params: { id: string } }) {
  const products = getAllProducts()
  const product = products.find(p => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96 md:h-full">
          <PlaceholderImage
            src={product.image}
            alt={product.title}
            fill
            className="object-cover rounded-lg"
            type="product"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4 text-red-600">{product.title}</h1>
          <p className="text-xl mb-2 text-emerald-600">{product.companyName}</p>
          <p className="text-2xl font-bold mb-4 text-red-600">
            ₹{product.salePrice || product.price || 'Price on request'}
          </p>
          {product.description && (
            <p className="mb-6 text-gray-700">{product.description}</p>
          )}
          <div className="mb-6 space-y-2">
            <p className="text-gray-700">Category: {product.category}</p>
            {product.subcategory && (
              <p className="text-gray-700">Subcategory: {product.subcategory}</p>
            )}
            <p className="text-gray-700">
              Availability: 
              <span className={`ml-2 inline-block px-2 py-1 rounded-full text-xs font-medium ${
                product.availability === 'In stock' 
                  ? 'bg-green-100 text-green-800' 
                  : product.availability === 'Limited stock'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {product.availability}
              </span>
            </p>
          </div>
          {product.features && product.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Features:</h3>
              <ul className="list-disc list-inside space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </div>
          )}
          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Specifications:</h3>
              <div className="space-y-1">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <p key={key} className="text-gray-700">
                    <span className="font-medium">{key}:</span> {value}
                  </p>
                ))}
              </div>
            </div>
          )}
          <Button className="bg-emerald-600 hover:bg-red-600 text-white">
            Contact for Quote
          </Button>
        </div>
      </div>
    </div>
  )
}

