import { Button } from '../../components/Button';

const services = [
  {
    id: 1,
    title: 'Vehicle Import',
    description: 'Complete import services for vehicles from international markets',
    features: ['Customs clearance', 'Documentation', 'Shipping coordination', 'Insurance coverage'],
    icon: 'IMPORT',
  },
  {
    id: 2,
    title: 'Parts & Accessories Import',
    description: 'Import services for automotive parts and accessories',
    features: ['Bulk import', 'Quality inspection', 'Customs compliance', 'Warehousing'],
    icon: 'PARTS',
  },
  {
    id: 3,
    title: 'Export Services',
    description: 'Export services for vehicles and automotive products',
    features: ['Export documentation', 'Shipping arrangements', 'Insurance', 'Compliance'],
    icon: 'EXPORT',
  },
  {
    id: 4,
    title: 'Customs Clearance',
    description: 'Professional customs clearance and documentation services',
    features: ['Duty calculation', 'Import duties', 'Tax compliance', 'Legal requirements'],
    icon: 'CUSTOMS',
  },
];

const processSteps = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'Discuss your requirements and provide detailed specifications',
  },
  {
    step: 2,
    title: 'Documentation',
    description: 'Prepare all necessary import/export documentation and permits',
  },
  {
    step: 3,
    title: 'Shipping Coordination',
    description: 'Arrange transportation and track shipment progress',
  },
  {
    step: 4,
    title: 'Customs Clearance',
    description: 'Handle customs procedures, duties, and final delivery',
  },
];

const destinations = [
  'Japan', 'Germany', 'United States', 'United Kingdom', 'South Korea', 'UAE', 'Australia', 'Canada'
];

export const metadata = {
  title: 'Clearing & Forwarding | Obele Autos and Car Accessories',
  description: 'Professional import/export services for vehicles and automotive parts with customs clearance.',
};

export default function ClearingForwardingPage() {
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Clearing & Forwarding</h1>
          <p className="mt-4 text-lg text-slate-400">
            Professional import/export services for vehicles and automotive parts with customs clearance
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-white">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/70 shadow-lg transition hover:border-emerald-500/50 hover:shadow-emerald-900/20 hover:shadow-2xl backdrop-blur p-6 flex flex-col h-full"
            >
              <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mb-4 flex-grow text-slate-300 leading-relaxed">{service.description}</p>
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
              <Button href="#contact">Get Quote</Button>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-white text-center">Our Process</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-2xl font-bold text-emerald-400">
                {step.step}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-sm text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Destinations */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-white text-center">Import Destinations</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {destinations.map((destination, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center rounded-xl border border-slate-700 bg-slate-950/50 py-6 text-center transition hover:border-emerald-500/50 hover:bg-emerald-500/10"
            >
              <span className="text-lg font-semibold text-slate-300">{destination}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-950/70 p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Why Choose Our Clearing Services?</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                  <span className="text-2xl font-bold text-emerald-400">GLOBAL</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Global Network</h3>
                <p className="text-sm text-slate-400">Extensive international partnerships</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                  <span className="text-2xl font-bold text-emerald-400">COMPLIANCE</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Compliance Expert</h3>
                <p className="text-sm text-slate-400">Full customs and legal compliance</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                  <span className="text-2xl font-bold text-emerald-400">SHIPPING</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Reliable Shipping</h3>
                <p className="text-sm text-slate-400">Trusted carriers and tracking systems</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                  <span className="text-2xl font-bold text-emerald-400">INSURANCE</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Insurance Coverage</h3>
                <p className="text-sm text-slate-400">Comprehensive cargo insurance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Start Your Import/Export Today</h2>
            <p className="mt-4 text-lg text-slate-300">
              Get a free consultation and quote for your automotive import or export needs.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20">
                  <span className="text-xl font-bold text-emerald-400">CALL</span>
                </div>
                <p className="text-sm font-semibold text-white">Call Us</p>
                <p className="text-sm text-slate-400">+254700123456</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20">
                  <span className="text-xl font-bold text-emerald-400">EMAIL</span>
                </div>
                <p className="text-sm font-semibold text-white">Email</p>
                <p className="text-sm text-slate-400">clearing@obeleautos.com</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20">
                  <span className="text-xl font-bold text-emerald-400">WHATSAPP</span>
                </div>
                <p className="text-sm font-semibold text-white">WhatsApp</p>
                <p className="text-sm text-slate-400">+254700123456</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20">
                  <span className="text-xl font-bold text-emerald-400">LOCATION</span>
                </div>
                <p className="text-sm font-semibold text-white">Visit Us</p>
                <p className="text-sm text-slate-400">123 Business St</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button href="#contact">Get Free Quote</Button>
              <Button href="tel:+254700123456" variant="secondary">Call Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
