'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="py-16 bg-[#D3D3D3]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#001f3f] mb-8"
        >
          About Us
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg mb-6">
            Sridhi Enterprises is a trusted distributor connecting quality manufacturers to government services. With years of experience, we are committed to providing efficient and reliable distribution solutions for paramilitary and government canteens.
          </p>
          <p className="text-lg font-semibold">
            Our mission is to ensure the highest quality products reach our esteemed clients, maintaining the utmost standards of trust and efficiency in our services.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About

