import { Button } from '../../components/Button';

export const metadata = {
  title: 'Our Services | Obele Autos and Car Accessories',
  description: 'Professional automotive services including car sales, engine servicing, batteries, tires, and clearing & forwarding services.',
};

const services = [
  {
    id: 1,
    title: 'Car Sales',
    description: 'Affordable, verified foreign vehicles with comprehensive warranties and financing options.',
    icon: 'CAR',
    href: '/cars',
    features: ['Certified Pre-Owned', 'Warranty Coverage', 'Financing Available', 'Trade-In Service'],
  },
  {
    id: 2,
    title: 'Engine Servicing',
    description: 'Professional diagnostics and maintenance to keep your engine running smoothly.',
    icon: 'ENGINE',
    href: '/servicing',
    features: ['Full Diagnostics', 'Oil Changes', 'Tune-ups', 'Repairs'],
  },
  {
    id: 3,
    title: 'Batteries',
    description: 'Reliable and long-lasting power solutions for all vehicle types.',
    icon: 'BATTERY',
    href: '/accessories',
    features: ['Premium Brands', 'Free Testing', 'Installation', 'Warranty'],
  },
  {
    id: 4,
    title: 'Tires',
    description: 'Durable tires for all road conditions with professional mounting and balancing.',
    icon: 'TIRES',
    href: '/accessories',
    features: ['All Sizes', 'Professional Fitting', 'Alignment', 'Rotation Service'],
  },
  {
    id: 5,
    title: 'Clearing & Forwarding',
    description: 'Hassle-free vehicle importation services with customs clearance and documentation.',
    icon: 'IMPORT',
    href: '/clearing-forwarding',
    features: ['Customs Clearance', 'Documentation', 'Shipping', 'Insurance'],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Our Services</h1>
          <p className="mt-4 text-lg text-slate-400">
            Comprehensive automotive solutions from sales to servicing, all under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/70 shadow-lg transition hover:border-emerald-500/50 hover:shadow-emerald-900/20 hover:shadow-2xl backdrop-blur p-6"
            >
              <div className="mb-4 text-4xl font-bold text-emerald-400">{service.icon}</div>
              <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mb-4 flex-grow text-slate-300">{service.description}</p>

              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-slate-400">Includes:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                      <span className="text-emerald-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button href={service.href}>Learn More</Button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-950/70 p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Why Choose Our Services?</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                  <span className="text-2xl font-bold text-emerald-400">QUALITY</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Quality You Can Trust</h3>
                <p className="text-sm text-slate-400">Genuine parts and certified technicians</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                  <span className="text-2xl font-bold text-emerald-400">AFFORDABLE</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Affordable Pricing</h3>
                <p className="text-sm text-slate-400">Competitive prices with no hidden fees</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                  <span className="text-2xl font-bold text-emerald-400">EXPERT</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Expert Servicing</h3>
                <p className="text-sm text-slate-400">ASE certified technicians with years of experience</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                  <span className="text-2xl font-bold text-emerald-400">COMPREHENSIVE</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Complete Solutions</h3>
                <p className="text-sm text-slate-400">Everything you need under one roof</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-8 text-center sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Need Our Services?</h2>
          <p className="mt-4 text-lg text-slate-300">
            Contact us today to discuss your automotive needs and get a personalized quote.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="https://wa.me/254700123456">Chat on WhatsApp</Button>
            <Button href="tel:+254700123456" variant="secondary">Call Now</Button>
          </div>
        </div>
      </section>
    </div>
  );
}