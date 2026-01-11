"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#FAF3E0]">
      <div className="container mx-auto px-4">
        {/* Top border line */}
        <div className="border-t border-[#D2B883] my-8"></div>
        
        {/* Main footer content */}
        <div className="flex justify-center">
          {/* Quick Links section */}
          <div className="text-center">
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
        </div>
        
        {/* Bottom border line */}
        <div className="border-t border-[#D2B883] my-8"></div>
        
        {/* Copyright section */}
        <div className="py-4 text-center">
          <p>&copy; {new Date().getFullYear()} Sridhi Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

