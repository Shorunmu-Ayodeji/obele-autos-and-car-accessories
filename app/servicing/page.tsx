import { Button } from '../../components/Button';

const services = [
  {
    id: 1,
    title: 'Oil Change & Filter Replacement',
    description: 'Complete oil change service with premium filters for optimal engine performance',
    price: 'From $49',
    duration: '30-45 mins',
    icon: 'OIL',
  },
  {
    id: 2,
    title: 'Brake Service',
    description: 'Comprehensive brake inspection, pad replacement, and rotor resurfacing',
    price: 'From $129',
    duration: '1-2 hours',
    icon: 'BRAKE',
  },
  {
    id: 3,
    title: 'Engine Diagnostics',
    description: 'Advanced computer diagnostics to identify and resolve engine issues',
    price: 'From $89',
    duration: '30-60 mins',
    icon: 'ENGINE',
  },
  {
    id: 4,
    title: 'Tire Services',
    description: 'Tire rotation, balancing, alignment, and replacement services',
    price: 'From $25',
    duration: '45-90 mins',
    icon: 'TIRES',
  },
  {
    id: 5,
    title: 'Battery Testing & Replacement',
    description: 'Free battery testing and replacement with warranty coverage',
    price: 'From $99',
    duration: '15-30 mins',
    icon: 'BATTERY',
  },
  {
    id: 6,
    title: 'Air Conditioning Service',
    description: 'AC system inspection, recharge, and repair services',
    price: 'From $79',
    duration: '45-90 mins',
    icon: 'AC',
  },
];

const maintenancePackages = [
  {
    id: 1,
    name: 'Basic Service',
    price: '$149',
    description: 'Essential maintenance for everyday driving',
    includes: ['Oil Change', 'Filter Replacement', 'Basic Inspection', 'Fluid Check'],
  },
  {
    id: 2,
    name: 'Comprehensive Service',
    price: '$299',
    description: 'Complete vehicle maintenance package',
    includes: ['All Basic Services', 'Brake Inspection', 'Tire Rotation', 'Battery Test', 'Wiper Replacement'],
  },
  {
    id: 3,
    name: 'Premium Service',
    price: '$499',
    description: 'Full service package with advanced diagnostics',
    includes: ['All Comprehensive Services', 'Engine Diagnostics', 'AC Service', 'Alignment Check', 'Detailing'],
  },
];

export const metadata = {
  title: 'Car Servicing | Obele Autos and Car Accessories',
  description: 'Professional car maintenance and repair services by certified technicians.',
};

export default function ServicingPage() {
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Car Servicing</h1>
          <p className="mt-4 text-lg text-slate-400">
            Professional maintenance and repair services by certified technicians
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-white">Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/70 shadow-lg transition hover:border-emerald-500/50 hover:shadow-emerald-900/20 hover:shadow-2xl backdrop-blur p-6 flex flex-col h-full"
            >
              <h3 className="mb-3 text-lg font-semibold text-white">{service.title}</h3>
              <p className="mb-4 flex-grow text-sm text-slate-400 leading-relaxed">{service.description}</p>
              <div className="mb-4 flex items-center justify-between text-sm bg-slate-900/50 rounded-lg p-3">
                <div className="flex flex-col">
                  <span className="text-slate-500 text-xs">Price</span>
                  <span className="font-semibold text-emerald-400">{service.price}</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-slate-500 text-xs">Duration</span>
                  <span className="font-semibold text-slate-300">{service.duration}</span>
                </div>
              </div>
              <Button href="#contact">Book Service</Button>
            </div>
          ))}
        </div>
      </section>

      {/* Maintenance Packages */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-white text-center">Maintenance Packages</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {maintenancePackages.map((pkg) => (
            <div
              key={pkg.id}
              className="flex flex-col rounded-2xl border border-slate-700 bg-slate-950/70 p-6 shadow-lg transition hover:border-emerald-500/50 hover:shadow-emerald-900/20 backdrop-blur"
            >
              <div className="text-center">
                <h3 className="mb-2 text-xl font-semibold text-white">{pkg.name}</h3>
                <p className="mb-4 text-3xl font-bold text-emerald-400">{pkg.price}</p>
                <p className="mb-6 text-sm text-slate-400">{pkg.description}</p>
              </div>
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-slate-300">Includes:</h4>
                <ul className="space-y-2">
                  {pkg.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                      <span className="text-emerald-400">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Button href="#contact">Choose Package</Button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-950/70 p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Why Choose Our Service?</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                  <span className="text-2xl font-bold text-emerald-400">CERTIFIED</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Certified Technicians</h3>
                <p className="text-sm text-slate-400">ASE certified with years of experience</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                  <span className="text-2xl font-bold text-emerald-400">WARRANTY</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Warranty Coverage</h3>
                <p className="text-sm text-slate-400">Comprehensive warranty on all services</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                  <span className="text-2xl font-bold text-emerald-400">FAST</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Quick Turnaround</h3>
                <p className="text-sm text-slate-400">Most services completed same day</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                  <span className="text-2xl font-bold text-emerald-400">AFFORDABLE</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Competitive Pricing</h3>
                <p className="text-sm text-slate-400">Transparent pricing with no hidden fees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-8 text-center sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Book Your Service Today</h2>
          <p className="mt-4 text-lg text-slate-300">
            Schedule an appointment online or call us to book your vehicle service.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="#contact">Book Online</Button>
            <Button href="tel:+254700123456" variant="secondary">Call Now</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
