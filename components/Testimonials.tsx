'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { COLORS } from '@/lib/constants'

const testimonials = [
  {
    id: 1,
    text: "Sridhi Enterprises has consistently delivered high-quality products to our canteen. Their reliability is unmatched.",
    author: "Maj. Rajesh Kumar",
    position: "Army Canteen Services"
  },
  {
    id: 2,
    text: "We've been impressed with the efficiency and professionalism of Sridhi Enterprises. They're a trusted partner in our operations.",
    author: "Capt. Priya Singh",
    position: "BSF Logistics Department"
  },
  {
    id: 3,
    text: "The range of products and the quality of service provided by Sridhi Enterprises have exceeded our expectations.",
    author: "Subedar Vikram Thapa",
    position: "CRPF Mess Committee"
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-12 text-center text-${COLORS.primary}`}>What Our Clients Say</h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white rounded-lg shadow-lg p-8">
                <CardContent>
                  <p className="text-lg mb-6 italic">{testimonials[currentIndex].text}</p>
                </CardContent>
                <CardFooter className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={`/placeholder.svg?height=50&width=50&text=${testimonials[currentIndex].author.charAt(0)}`} />
                    <AvatarFallback>{testimonials[currentIndex].author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className={`font-semibold text-${COLORS.primary}`}>{testimonials[currentIndex].author}</p>
                    <p className={`text-sm text-${COLORS.text}`}>{testimonials[currentIndex].position}</p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

