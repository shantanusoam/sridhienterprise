'use client';

import { motion } from 'framer-motion';
import { Truck, Lightbulb, Clock } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Quality Services',
    description:
      'Providing only the best products that meet the highest standards.. We encourage our colleagues to commit themselves to provide customer care, adopt to vibrant technology to maintain our top position in the field.',
  },
  {
    icon: Lightbulb,
    title: 'Strong customer focus',
    description:
      'Our staff have been with us for many years and that helps us to serve each and every customer to suit their needs.',
  },
  {
    icon: Clock,
    title: 'On time delivery',
    description:
      'We earn the trust of our customers through meaningful interactions. Ensuring timely and reliable distribution services across the nation.',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
