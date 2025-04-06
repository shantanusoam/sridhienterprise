import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// In your layout.js or relevant component
import { Playfair_Display, Lato } from '@next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'], // Adjust weights as needed
  variable: '--font-playfair', // CSS variable
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], // Adjust weights as needed
  variable: '--font-lato', // CSS variable
});

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Sridhi Enterprises - Premium Distribution for India's Protectors",
  description:
    'Sridhi Enterprises is a leading distributor connecting quality manufacturers to government and paramilitary canteens across India.',
  keywords:
    'distribution, government canteens, paramilitary canteens, quality products, India',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className={`${inter.className} ]`}>
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
