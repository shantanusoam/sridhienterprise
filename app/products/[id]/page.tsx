import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { COLORS } from '@/lib/constants'

const products = [
  { id: 1, name: 'Stainless Steel Cookware Set', category: 'Kitchenware', brand: 'PNB Kitchenmate', price: 2999, image: '/placeholder.svg?height=600&width=600', description: 'High-quality stainless steel cookware set, perfect for all your cooking needs.' },
  { id: 2, name: 'Assorted Sweets Box', category: 'Snacks', brand: 'Bhikharam Chandmal', price: 599, image: '/placeholder.svg?height=600&width=600', description: 'A delightful assortment of traditional Indian sweets.' },
  { id: 3, name: 'Herbal Face Wash', category: 'Personal Care', brand: 'Vaadi Herbals', price: 199, image: '/placeholder.svg?height=600&width=600', description: 'Natural herbal face wash for clean and refreshed skin.' },
  { id: 4, name: 'Non-Stick Frying Pan', category: 'Kitchenware', brand: 'PNB Kitchenmate', price: 799, image: '/placeholder.svg?height=600&width=600', description: 'Durable non-stick frying pan for easy cooking and cleaning.' },
  { id: 5, name: 'Spicy Mixture', category: 'Snacks', brand: 'Bhikharam Chandmal', price: 149, image: '/placeholder.svg?height=600&width=600', description: 'A savory and spicy snack mix, perfect for any time of day.' },
  { id: 6, name: 'Aloe Vera Moisturizer', category: 'Personal Care', brand: 'Vaadi Herbals', price: 249, image: '/placeholder.svg?height=600&width=600', description: 'Soothing aloe vera moisturizer for soft and hydrated skin.' },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96 md:h-full">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className={`text-3xl font-bold mb-4 text-${COLORS.primary}`}>{product.name}</h1>
          <p className={`text-xl mb-2 text-${COLORS.secondary}`}>{product.brand}</p>
          <p className={`text-2xl font-bold mb-4 text-${COLORS.primary}`}>₹{product.price}</p>
          <p className={`mb-6 text-${COLORS.text}`}>{product.description}</p>
          <p className={`mb-6 text-${COLORS.text}`}>Category: {product.category}</p>
          <Button className={`bg-${COLORS.secondary} hover:bg-${COLORS.primary} text-white`}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

