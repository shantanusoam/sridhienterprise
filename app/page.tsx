import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductCategories from '@/components/ProductCategories';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { COLORS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Sridhi Enterprises - Quality Distribution for Government Services',
  description:
    'Sridhi Enterprises is a leading distributor connecting quality manufacturers to government and paramilitary canteens across India.',
};

const stats = [
  { label: 'Years of Experience', value: '20+' },
  { label: 'Products Distributed', value: '1000+' },
  { label: 'Satisfied Clients', value: '500+' },
  { label: 'Pan-India Presence', value: '28 States' },
];

const services = [
  {
    title: 'Distribution Network',
    description: 'Our extensive network ensures timely delivery across India.',
    icon: '🚚',
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous quality control for all our products.',
    icon: '✅',
  },
  {
    title: 'Inventory Management',
    description: 'Advanced systems to maintain optimal stock levels.',
    icon: '📦',
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className={`py-16 bg-${COLORS.background}`}>
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
        </section>

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

        <ProductCategories />

        <section className={`py-16 bg-${COLORS.background}`}>
          <div className="container mx-auto px-4">
            <h2
              className={`text-3xl font-bold mb-12 text-center text-${COLORS.primary}`}
            >
              Our Process
            </h2>
            <Tabs defaultValue="sourcing" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                <TabsTrigger value="sourcing">Sourcing</TabsTrigger>
                <TabsTrigger value="quality">Quality Check</TabsTrigger>
                <TabsTrigger value="distribution">Distribution</TabsTrigger>
                <TabsTrigger value="support">After-Sales Support</TabsTrigger>
              </TabsList>
              <TabsContent value="sourcing">
                <Card>
                  <CardHeader>
                    <CardTitle>Product Sourcing</CardTitle>
                    <CardDescription>
                      We partner with top manufacturers to source high-quality
                      products.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our team carefully selects products that meet the specific
                      needs of government and paramilitary canteens, ensuring
                      quality and value for money.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="quality">
                <Card>
                  <CardHeader>
                    <CardTitle>Quality Assurance</CardTitle>
                    <CardDescription>
                      Rigorous quality checks to maintain high standards.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Every product undergoes thorough quality control processes
                      to ensure it meets our strict standards before being
                      distributed to our clients.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="distribution">
                <Card>
                  <CardHeader>
                    <CardTitle>Efficient Distribution</CardTitle>
                    <CardDescription>
                      Nationwide network for timely delivery.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our extensive distribution network and logistics expertise
                      ensure that products reach our clients efficiently, even
                      in remote locations.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="support">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Support</CardTitle>
                    <CardDescription>
                      Dedicated after-sales service for client satisfaction.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We provide ongoing support to our clients, addressing any
                      concerns and ensuring their continued satisfaction with
                      our products and services.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <Testimonials />

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className={`text-3xl font-bold mb-8 text-${COLORS.primary}`}>
              Ready to Get Started?
            </h2>
            <p className={`mb-8 text-${COLORS.text}`}>
              Contact us today to learn more about how Sridhi Enterprises can
              serve your canteen's needs.
            </p>
            <Link href="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
