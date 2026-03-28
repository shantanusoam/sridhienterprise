import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
};

const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[#FAF3E0]" aria-label="Site footer">
      <div className="container mx-auto px-4">
        <div className="border-t border-[#D2B883] my-8"></div>

        <div className="flex justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-black hover:text-[#D2B883] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-[#D2B883] my-8"></div>

        <div className="py-4 text-center">
          <p>&copy; {new Date().getFullYear()} Sridhi Enterprises pvt ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

