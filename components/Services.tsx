'use client'

import { motion } from 'framer-motion'

const Services = () => {
  return (
    <section className="py-16 bg-[#D3D3D3]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#001f3f] mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-[#001f3f] mb-4">Distribution Network</h3>
            <p className="text-gray-600">
              Our extensive distribution network ensures timely delivery across various regions, serving government canteens and paramilitary units efficiently.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-[#001f3f] mb-4">Logistics</h3>
            <p className="text-gray-600">
              We pride ourselves on our state-of-the-art logistics solutions, guaranteeing efficient and timely deliveries to all our clients.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-[#001f3f] mb-4">Clientele</h3>
            <p className="text-gray-600">
              Our trusted partnerships with government canteens and paramilitary units speak to our commitment to quality and reliability.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services

