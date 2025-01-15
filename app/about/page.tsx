import { Metadata } from 'next'
import Image from 'next/image'
import { COLORS } from '@/lib/constants'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: 'About Us | Sridhi Enterprises',
  description: 'Learn about Sridhi Enterprises, our history, mission, and commitment to serving government and paramilitary canteens.',
}

const faqItems = [
  {
    question: "What sets Sridhi Enterprises apart from other distributors?",
    answer: "Our focus on government and paramilitary canteens, extensive distribution network, and commitment to quality make us unique in the industry."
  },
  {
    question: "How does Sridhi Enterprises ensure product quality?",
    answer: "We have a rigorous supplier vetting process, conduct regular quality audits, and ensure compliance with industry standards for all our products."
  },
  {
    question: "Can Sridhi Enterprises handle large-scale orders?",
    answer: "Absolutely. Our robust infrastructure and efficient inventory management system allow us to handle orders of any scale with ease."
  },
  {
    question: "What is Sridhi Enterprises' approach to customer service?",
    answer: "We believe in building long-term relationships with our clients. Our dedicated customer service team is always ready to assist with any queries or concerns."
  }
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className={`text-4xl font-bold mb-8 text-${COLORS.primary}`}>About Sridhi Enterprises</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <p className={`mb-4 text-${COLORS.text}`}>
            Sridhi Enterprises is a leading distributor connecting quality manufacturers to government services. With over two decades of experience, we have established ourselves as a trusted partner for paramilitary and government canteens across India.
          </p>
          <p className={`mb-4 text-${COLORS.text}`}>
            Our mission is to ensure the highest quality products reach our esteemed clients, maintaining the utmost standards of trust and efficiency in our services. We take pride in our extensive network of suppliers and our ability to deliver products that meet the unique needs of government institutions.
          </p>
          <p className={`mb-4 text-${COLORS.text}`}>
            At Sridhi Enterprises, we believe in building long-lasting relationships with both our suppliers and clients. Our commitment to excellence, transparency, and customer satisfaction has made us a preferred choice in the industry.
          </p>
        </div>
        <div className="relative h-96">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Sridhi Enterprises Team"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      <h2 className={`text-3xl font-bold mb-6 text-${COLORS.primary}`}>Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className={`bg-${COLORS.white} p-6 rounded-lg shadow-md`}>
          <h3 className={`text-xl font-semibold mb-3 text-${COLORS.secondary}`}>Quality</h3>
          <p className={`text-${COLORS.text}`}>We are committed to delivering only the highest quality products to our clients.</p>
        </div>
        <div className={`bg-${COLORS.white} p-6 rounded-lg shadow-md`}>
          <h3 className={`text-xl font-semibold mb-3 text-${COLORS.secondary}`}>Reliability</h3>
          <p className={`text-${COLORS.text}`}>Our clients can always count on us for timely and efficient service.</p>
        </div>
        <div className={`bg-${COLORS.white} p-6 rounded-lg shadow-md`}>
          <h3 className={`text-xl font-semibold mb-3 text-${COLORS.secondary}`}>Innovation</h3>
          <p className={`text-${COLORS.text}`}>We continuously strive to improve our processes and services to better serve our clients.</p>
        </div>
      </div>

      <h2 className={`text-3xl font-bold mb-6 text-${COLORS.primary}`}>Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

