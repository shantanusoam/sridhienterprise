'use client';
import Link from 'next/link';
import Hero from '@/components/Hero';

import { motion } from 'framer-motion';

import AboutSection from '@/components/about-section';
import ServicesSection from '@/components/services-section';
import ProductsCategriesPage from '@/components/categries-section';
import DistributorsSection from '@/components/distributors-section';

import OurProcess from '@/components/OurProcess';
import StatsAndServicesSection from '@/components/StatsandServiceSection';
import { CustomCursor } from '@/components/custom-cursor';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <CustomCursor />

      {/* Ambient background superposition */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(185,82,15,0.22),transparent_62%)] blur-2xl" />
        <div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(75,97,69,0.20),transparent_60%)] blur-3xl" />
        <div className="absolute top-[40vh] -right-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(169,49,24,0.16),transparent_60%)] blur-3xl" />
      </div>

      <Hero />
      <OurProcess />
      {/* Subtle “trust ribbon” to tighten hierarchy after the hero */}
      {/* <section className="relative bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="-mt-7 md:-mt-10 relative z-10 rounded-2xl border border-amber-900/10 bg-white/70 backdrop-blur-md shadow-[0_18px_55px_-30px_rgba(0,0,0,0.45)]">
            <div className="grid gap-4 px-5 py-5 sm:grid-cols-3 sm:items-center sm:gap-6 sm:px-8">
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-[0.22em] text-amber-900/70">
                  DISTRIBUTION · QUALITY · TRUST
                </p>
                <p className="text-lg font-heading font-bold text-amber-950">
                  Built for canteens that can’t afford compromise
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:col-span-2 sm:gap-4">
                {[
                  { k: '14+', v: 'Years' },
                  { k: '28', v: 'States' },
                  { k: '1570', v: 'Clients' },
                ].map((s) => (
                  <div
                    key={s.v}
                    className="rounded-xl border border-amber-900/10 bg-gradient-to-b from-white to-amber-50/60 px-3 py-3 text-center"
                  >
                    <div className="text-xl font-heading font-extrabold text-[#A93118]">
                      {s.k}
                    </div>
                    <div className="text-xs font-semibold tracking-wide text-amber-900/70">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <ServicesSection />
      <AboutSection />

      <div className="relative">
        <ProductsCategriesPage />
      </div>

      <div className="relative">
        <DistributorsSection />
      </div>

      {/* Premium “foundation” panel for the lower half of the homepage */}
      <section className="relative bg-[#FDF3E3]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-white/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-transparent via-white/20 to-transparent" />
        </div>

        <StatsAndServicesSection />
   

        {/* Award-feel CTA (cleaner typography + better semantics + richer layering) */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeIn}
          className="relative overflow-hidden py-16 md:py-20"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-20%,rgba(184,82,15,0.28),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(900px_460px_at_10%_110%,rgba(75,97,69,0.18),transparent_58%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(245,230,200,0.95),rgba(253,243,227,0.95))]" />
            <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#8B4513_0.8px,transparent_0.8px)] [background-size:18px_18px]" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-amber-900/15 bg-white/65 backdrop-blur-md shadow-[0_30px_90px_-55px_rgba(0,0,0,0.55)]">
              <div aria-hidden className="absolute inset-0">
                <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#E18931]/25 blur-3xl" />
                <div className="absolute -right-28 -bottom-28 h-72 w-72 rounded-full bg-[#4B6145]/20 blur-3xl" />
              </div>

              <div className="relative px-6 py-10 sm:px-10 sm:py-12 md:px-14">
                <p className="text-xs font-semibold tracking-[0.26em] text-amber-900/70">
                  PARTNERSHIP THAT LASTS
                </p>

                <motion.h2
                  variants={fadeIn}
                  className="mt-3 text-balance font-heading text-4xl font-extrabold text-[#A93118] sm:text-5xl"
                >
                  Elevate your service standards
                </motion.h2>

                <motion.p
                  variants={fadeIn}
                  className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-amber-950/80 sm:text-lg"
                >
                  Join government and paramilitary canteens that trust Sridhi
                  Enterprises for reliable distribution, quality assurance, and
                  on-time fulfillment—at scale.
                </motion.p>

                <motion.div
                  variants={fadeIn}
                  className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
                >
                  <Link
                    href="/contact"
                    data-cursor-interactable
                    className="inline-flex items-center justify-center rounded-xl px-7 py-3 text-base font-semibold text-white shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E18931] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDF3E3] hover:shadow-lg"
                    style={{
                      background:
                        'linear-gradient(90deg, #973116 0%, #B8520F 50%, #E18931 100%)',
                    }}
                  >
                    Begin your journey with us
                  </Link>

                  <Link
                    href="/companies"
                    data-cursor-interactable
                    className="inline-flex items-center justify-center rounded-xl border border-amber-900/20 bg-white/60 px-7 py-3 text-base font-semibold text-amber-950/80 backdrop-blur transition-colors hover:bg-white/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E18931] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDF3E3]"
                  >
                    Explore associate companies
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </section>
    </div>
  );
}
