"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#FAF3E0]">
      <div className="container mx-auto px-4">
        {/* Top border line */}
        <div className="border-t border-[#D2B883] my-8"></div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {["Home", "About", "Products", "Services", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="text-black hover:text-[#D2B883] transition-colors"
                  >
                    {item}
                  </Link>
                )
              )}
            </nav>
          </div>
          
          {/* Contact section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p>Phone: +91 123 456 7990</p>
              <p>Email: info@srichienterprises.com</p>
              <p>123 Distribution Lane,<br />New Delhi<br />India 110001</p>
            </div>
          </div>
          
          {/* Follow Us section */}
          {/* <div>
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-black hover:text-[#D2B883] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="text-black hover:text-[#D2B883] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-black hover:text-[#D2B883] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
           */}
          {/* Newsletter section with lotus logo */}
          <div className="flex flex-col items-start">
            <div className="flex flex-col items-center mb-4 md:items-start">
              {/* <div className="mb-4 relative w-24 h-24">
                <Image 
                  src="/logo-gold.png" 
                  alt="Srichi Enterprises Logo" 
                  layout="fill"
                  objectFit="contain"
                />
              </div> */}
              <h3 className="text-2xl font-semibold">Stay updated</h3>
              <p className="text-md">with our latest news and offers.</p>
            </div>
            <div className="w-full mt-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="border-[#D2B883] bg-transparent rounded-md w-full"
              />
            </div>
          </div>
        </div>
        
        {/* Bottom border line */}
        <div className="border-t border-[#D2B883] my-8"></div>
        
        {/* Copyright section */}
        <div className="py-4 text-center">
          <p>&copy; 2023 Srichi Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
