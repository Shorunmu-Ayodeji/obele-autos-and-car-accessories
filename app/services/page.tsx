import { Anchor, BatteryCharging, CircleDot, Car, Wrench, ShieldCheck, BadgeDollarSign, Users, Layers } from 'lucide-react';
import { Button } from '../../components/Button';
import { getContact } from '../../lib/sanity';

export const revalidate = 60;

export const metadata = {
  title: 'Our Services | Obele Autos and Car Accessories',
  description: 'Professional automotive services including car sales, engine servicing, batteries, tires, and clearing & forwarding services.',
};

const services = [
  {
    id: 1,
    title: 'Car Sales',
    description: 'Affordable, verified foreign vehicles with comprehensive warranties and financing options.',
    icon: Car,
    href: '/cars',
    features: ['Certified Pre-Owned', 'Warranty Coverage', 'Financing Available', 'Trade-In Service'],
  },
  {
    id: 2,
    title: 'Engine Servicing',
    description: 'Professional diagnostics and maintenance to keep your engine running smoothly.',
    icon: Wrench,
    href: '/servicing',
    features: ['Full Diagnostics', 'Oil Changes', 'Tune-ups', 'Repairs'],
  },
  {
    id: 3,
    title: 'Batteries',
    description: 'Reliable and long-lasting power solutions for all vehicle types.',
    icon: BatteryCharging,
    href: '/accessories',
    features: ['Premium Brands', 'Free Testing', 'Installation', 'Warranty'],
  },
  {
    id: 4,
    title: 'Tires',
    description: 'Durable tires for all road conditions with professional mounting and balancing.',
    icon: CircleDot,
    href: '/accessories',
    features: ['All Sizes', 'Professional Fitting', 'Alignment', 'Rotation Service'],
  },
  {
    id: 5,
    title: 'Clearing & Forwarding',
    description: 'Hassle-free vehicle importation services with customs clearance and documentation.',
    icon: Anchor,
    href: '/clearing-forwarding',
    features: ['Customs Clearance', 'Documentation', 'Shipping', 'Insurance'],
  },
];

export default async function ServicesPage() {
  const contact = await getContact();
  return (
    <div className="flex flex-col gap-24 bg-base py-16">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-[26px] border border-ink/10 bg-gradient-to-br from-surface2 to-surface px-6 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
          <span className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-ink/[0.03] px-4 py-1.5 text-xs font-medium text-ink/60">
            <i className="h-1.5 w-1.5 rounded-full bg-brand-light shadow-[0_0_0_4px_rgba(56,224,123,0.15)]" />
            Obele Autos
          </span>
          <h1 className="relative text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Our <em className="bg-gradient-to-r from-brand to-brand-light bg-clip-text font-normal not-italic text-transparent">Services</em>
          </h1>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-ink/60">
            Comprehensive automotive solutions from sales to servicing, all under one roof.
          </p>
          <div className="relative mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" className="!bg-gradient-to-r !from-brand !to-brand-light !text-white !shadow-[0_10px_30px_-10px_rgba(43,59,255,0.8)]">
              Book a Service
            </Button>
            <Button href="/cars" className="!border !border-ink/15 !bg-ink/[0.04] !text-ink hover:!bg-ink/[0.08]">
              Browse Cars
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-12 max-w-xl">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.18em] text-brand-light">What We Offer</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Services built around your vehicle</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 [&>*:last-child:nth-child(3n+2)]:lg:col-span-1">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-[18px] border border-ink/10 bg-gradient-to-b from-surface2 to-surface p-6 transition hover:-translate-y-1.5 hover:border-brand/40"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(220px_140px_at_50%_0%,rgba(43,59,255,0.18),transparent_70%)] opacity-0 transition group-hover:opacity-100" />
              <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] border border-brand/25 bg-brand/10 text-brand-light">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="relative mb-2 text-lg font-bold tracking-tight text-ink">{service.title}</h3>
              <p className="relative mb-5 flex-grow text-sm text-ink/60">{service.description}</p>

              <div className="relative mb-6">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink/50">Includes:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-ink/60">
                      <span className="text-brand-light">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-light">
                <Button href={service.href} className="!bg-transparent !p-0 !text-brand-light hover:!text-brand-light">
                  Learn More →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="overflow-hidden rounded-[26px] border border-ink/10 bg-gradient-to-b from-surface2 to-surface p-8 sm:p-12">
          <div className="text-center">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.18em] text-brand-light">Why Us</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Why Choose Our Services?</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-brand/25 bg-brand/10">
                  <ShieldCheck className="h-7 w-7 text-brand-light" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-ink">Quality You Can Trust</h3>
                <p className="text-sm text-ink/60">Genuine parts and certified technicians</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-brand/25 bg-brand/10">
                  <BadgeDollarSign className="h-7 w-7 text-brand-light" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-ink">Affordable Pricing</h3>
                <p className="text-sm text-ink/60">Competitive prices with no hidden fees</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-brand/25 bg-brand/10">
                  <Users className="h-7 w-7 text-brand-light" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-ink">Expert Servicing</h3>
                <p className="text-sm text-ink/60">Certified technicians with years of experience</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-brand/25 bg-brand/10">
                  <Layers className="h-7 w-7 text-brand-light" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-ink">Complete Solutions</h3>
                <p className="text-sm text-ink/60">Everything you need under one roof</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-[26px] border border-brand/30 bg-gradient-to-r from-brand/10 to-brand-light/10 p-8 text-center sm:p-12">
          <div className="pointer-events-none absolute inset-x-0 -top-20 mx-auto h-56 w-56 rounded-full bg-brand/20 blur-3xl" />
          <h2 className="relative text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Need Our Services?</h2>
          <p className="relative mt-4 text-lg text-ink/80">
            Contact us today to discuss your automotive needs and get a personalized quote.
          </p>
          <div className="relative mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href={contact.wa} className="!bg-gradient-to-r !from-brand !to-brand-light !text-white !shadow-[0_10px_30px_-10px_rgba(43,59,255,0.8)]">
              Chat on WhatsApp
            </Button>
            <Button href={contact.tel} variant="secondary" className="!border !border-ink/15 !bg-ink/[0.04] !text-ink hover:!bg-ink/[0.08]">
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
