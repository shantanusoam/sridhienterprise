"use client";
// import { Metadata } from "next";
import Link from "next/link";
// import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
// import { useInView } from "react-intersection-observer";
// import ProductCategories from "@/components/ProductCategories";
import Testimonials from "@/components/Testimonials";
// import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { COLORS } from "@/lib/constants";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import ProductsCategriesPage from "@/components/categries-section";

// export const metadata: Metadata = {
//   title: "Sridhi Enterprises - Quality Distribution for Government Services",
//   description:
//     "Sridhi Enterprises is a leading distributor connecting quality manufacturers to government and paramilitary canteens across India.",
// };

const stats = [
  { label: "Years of Experience", value: "20+" },
  { label: "Products Distributed", value: "1000+" },
  { label: "Satisfied Clients", value: "500+" },
  { label: "Pan-India Presence", value: "28 States" },
];
// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const processTabs = [
  {
    value: "sourcing",
    title: "Sourcing",
    description: "We partner with top manufacturers",
    content:
      "Our team carefully selects products that meet the specific needs of government and paramilitary canteens, ensuring quality and value for money.",
  },
  {
    value: "quality",
    title: "Quality Check",
    description: "Rigorous quality checks",
    content:
      "Every product undergoes thorough quality control processes to ensure it meets our strict standards before being distributed to our clients.",
  },
  {
    value: "distribution",
    title: "Distribution",
    description: "Nationwide network",
    content:
      "Our extensive distribution network and logistics expertise ensure that products reach our clients efficiently, even in remote locations.",
  },
  {
    value: "support",
    title: "After-Sales Support",
    description: "Dedicated customer support",
    content:
      "We provide ongoing support to our clients, addressing any concerns and ensuring their continued satisfaction with our products and services.",
  },
];
const services = [
  {
    title: "Distribution Network",
    description: "Our extensive network ensures timely delivery across India.",
    icon: "🚚",
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality control for all our products.",
    icon: "✅",
  },
  {
    title: "Inventory Management",
    description: "Advanced systems to maintain optimal stock levels.",
    icon: "📦",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <div className="relative ">
          <ProductsCategriesPage />
        </div>
        <div className="bg-white">
          <motion.section
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="py-24 bg-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50" />
            <div className="container mx-auto px-4 relative z-10">
              <motion.h2
                variants={fadeIn}
                className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Why Choose Sridhi Enterprises?
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-lg">
                      <CardHeader>
                        <CardTitle className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                          {stat.value}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 font-medium">
                          {stat.label}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
          {/* <section className={`py-16 bg-${COLORS.background}`}>
            <div className="container mx-auto px-4">
              <h2
                className={`text-3xl font-bold mb-12 text-center text-${COLORS.primary}`}
              >
                Why Choose Sridhi Enterprises?
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <CardTitle
                        className={`text-4xl font-bold text-${COLORS.secondary}`}
                      >
                        {stat.value}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className={`text-${COLORS.text}`}>{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section> */}
          {/* <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="py-24 bg-gray-900"
          >
            <div className="container mx-auto px-4">
              <motion.h2
                variants={fadeIn}
                className="text-4xl font-bold text-center mb-16 bg-gradient-to-tr from-rose-600 to-orange-600 bg-clip-text text-transparent"
              >
                Our Services
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300">
                      <CardHeader>
                        <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{service.description}</p>
                      </CardContent>
                      <CardFooter className="justify-center">
                        <Link href="/services">
                          <Button
                            variant="outline"
                            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-none"
                          >
                            Learn More
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section> */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2
                className={`text-3xl font-bold mb-12 text-center text-${COLORS.primary}`}
              >
                Our Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <CardTitle className="text-4xl mb-4">
                        {service.icon}
                      </CardTitle>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className={`text-${COLORS.text}`}>
                        {service.description}
                      </p>
                    </CardContent>
                    <CardFooter className="justify-center">
                      <Link href="/services">
                        <Button variant="outline">Learn More</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          {/* <ProductCategories /> */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="py-12 bg-gray-50"
          >
            <div className="container mx-auto ">
              <motion.h2
                variants={fadeIn}
                className="text-4xl font-bold text-center mx-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Our Process
              </motion.h2>
              <Tabs defaultValue="sourcing" className="w-full p-4">
                <TabsList className="grid w-full h-16 p-4 grid-cols-1 md:grid-cols-4 bg-gray-100 rounded-lg mb-8">
                  {processTabs.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="data-[state=active]:bg-white p-3 data-[state=active]:shadow-lg transition-all duration-300"
                    >
                      {tab.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {processTabs.map((tab) => (
                  <TabsContent key={tab.value} value={tab.value}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className="border-none shadow-lg">
                        <CardHeader>
                          <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {tab.title}
                          </CardTitle>
                          <CardDescription>{tab.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{tab.content}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </motion.section>
          <Testimonials />
          <section className="py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className={`text-3xl font-bold mb-8 text-${COLORS.primary}`}>
                Ready to Get Started?
              </h2>
              {/* <div className={`mb-8 text-${COLORS.text}`}>
                Contact us today to learn more about how Sridhi Enterprises can
                serve your canteen's needs
              </div> */}
              <Link href="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
            </div>
          </section>
        </div>
        <main className="relative">
          {/* Stats Section */}

          {/* Services Section */}

          {/* Process Section */}

          {/* Call to Action */}
          {/* <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
          >
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
              <p className="mb-12 text-lg opacity-90 max-w-2xl mx-auto">
                Contact us today to learn more about how Sridhi Enterprises can
                serve your canteen's needs.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 text-lg px-8 py-6"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.section> */}
        </main>
      </main>
    </>
  );
}
