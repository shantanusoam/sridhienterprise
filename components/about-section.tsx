"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import "./module.css";
export default function AboutSection() {
  return (
    <section className="relative bg-zinc-900 mb-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with clip-path */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mb  "
          >
            <div className="relative h-[700px] ">
              <Image
                src="https://bhikharamchandmal.in/pub/media/catalog/1270x185px-Product-Page-Banner_01.jpg"
                alt="Atlas Distributor Service"
                fill
                className="object-cover z-[2] rounded-bl-[45px]"
              />

              <div className="absolute rounded-bl-[45px] top-6 -left-6 w-full z-[1] h-full  bg-green-600" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-4xl font-bold">Welcome to Our world.</h1>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Our History</h2>
                <p className="text-gray-300 mb-2">
                  Established in 2012, Sridhi Enterprises has been a trusted
                  distributor dedicated to serving the needs of serving and
                  retired personnel of Central Armed Police Forces (CAPFs),
                  Central Police Organizations (CPOs), State Police Forces, and
                  their families across India.
                </p>
                <a
                  href="https://kpkb.mha.gov.in/#blog"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="secondary"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Read More
                  </Button>
                </a>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Our People</h2>
                <p className="text-gray-300 mb-2">
                  We have hoghley experinced employees, who take pride in the
                  work they do. Building and maintaining strong relationships
                  with our clients and partners.
                </p>

                <a
                  href="https://kpkb.mha.gov.in/#blog"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="secondary"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Read More
                  </Button>
                </a>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">
                  Our Vision & Mission
                </h2>
                <p className="text-gray-300 mb-2">
                  Our mission is to bridge quality manufacturers with government
                  canteens, ensuring that our esteemed clients have access to
                  top-notch products that enhance their daily lives.
                </p>
                <Button
                  variant="secondary"
                  className="bg-green-600 hover:bg-green-700"
                >
                  Read More
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className=" year "
        >
          <div className="text-7xl font-bold text-green-600">14</div>
          <div className="text-sm text-black">
            Years of experience
            <br />
            and continuing...
          </div>
        </motion.div>
      </div>
    </section>
  );
}
