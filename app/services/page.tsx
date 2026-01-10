import { Metadata } from 'next'
import { COLORS } from '@/lib/constants'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: 'Our Services | Sridhi Enterprises',
  description: 'Explore the range of services offered by Sridhi Enterprises for government and paramilitary canteens.',
}

const services = [
  {
    title: 'Distribution Network',
    description: 'Our extensive distribution network ensures timely delivery across various regions, serving government canteens and paramilitary units efficiently.',
    icon: '🚚',
    details: [
      'Pan-India coverage',
   
      'Efficient last-mile delivery',
      'Real-time tracking system'
    ]
  },
  {
    title: 'Quality Assurance',
    description: 'We maintain strict quality control measures to ensure that all products meet the highest standards before reaching our clients.',
    icon: '✅',
    details: [
      'Rigorous supplier vetting process',
      'Regular quality audits',
      'Compliance with industry standards',
      'Product testing and certification'
    ]
  },
  {
    title: 'Customized Solutions',
    description: 'We offer tailored solutions to meet the specific needs of different government and paramilitary canteens.',
    icon: '🛠️',
    details: [
      'Personalized product selection',
      'Flexible ordering options',
      'Custom packaging solutions',
      'Specialized inventory management'
    ]
  },
  {
    title: 'Inventory Management',
    description: 'Our advanced inventory management system ensures optimal stock levels and prevents shortages or overstock situations.',
    icon: '📦',
    details: [
      'Real-time inventory tracking',
      'Demand forecasting',
      'Automated reordering system',
      'Stock optimization algorithms'
    ]
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className={`text-4xl font-bold mb-8 text-${COLORS.primary}`}>Our Services</h1>
      <p className={`text-lg mb-8 text-${COLORS.text}`}>
        At Sridhi Enterprises, we pride ourselves on offering comprehensive services tailored to meet the unique needs of government and paramilitary canteens. Our commitment to excellence ensures that we deliver not just products, but complete solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-4xl mr-4">{service.icon}</span>
                <span>{service.title}</span>
              </CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 mb-4">
                {service.details.map((detail, i) => (
                  <li key={i} className={`text-${COLORS.text} mb-2`}>{detail}</li>
                ))}
              </ul>
              <Button>Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

