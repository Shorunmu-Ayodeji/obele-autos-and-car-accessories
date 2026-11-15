import { Button } from '../../components/Button';
import { getContact } from '../../lib/sanity';

export const revalidate = 60;

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

export default async function ClearingForwardingPage() {
  const contact = await getContact();
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-ink sm:text-5xl">Clearing & Forwarding</h1>
          <p className="mt-4 text-lg text-ink/60">
            Professional import/export services for vehicles and automotive parts with customs clearance
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-ink">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="group overflow-hidden rounded-2xl border border-ink/10 bg-surface/80 shadow-lg transition hover:border-brand/50 hover:shadow-brand-dark/30 hover:shadow-2xl backdrop-blur p-6 flex flex-col h-full"
            >
              <h3 className="mb-3 text-xl font-semibold text-ink">{service.title}</h3>
              <p className="mb-4 flex-grow text-ink/80 leading-relaxed">{service.description}</p>
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-ink/60">Includes:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-ink/60">
                      <span className="text-brand-light">✓</span>
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
        <h2 className="mb-8 text-3xl font-bold text-ink text-center">Our Process</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/20 text-2xl font-bold text-brand-light">
                {step.step}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="text-sm text-ink/60">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Destinations */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-ink text-center">Import Destinations</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {destinations.map((destination, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center rounded-xl border border-ink/10 bg-base py-6 text-center transition hover:border-brand/50 hover:bg-brand/10"
            >
              <span className="text-lg font-semibold text-ink/80">{destination}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="overflow-hidden rounded-[26px] border border-ink/10 bg-surface/80 p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">Why Choose Our Clearing Services?</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/20">
                  <span className="text-2xl font-bold text-brand-light">GLOBAL</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-ink">Global Network</h3>
                <p className="text-sm text-ink/60">Extensive international partnerships</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/20">
                  <span className="text-2xl font-bold text-brand-light">COMPLIANCE</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-ink">Compliance Expert</h3>
                <p className="text-sm text-ink/60">Full customs and legal compliance</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/20">
                  <span className="text-2xl font-bold text-brand-light">SHIPPING</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-ink">Reliable Shipping</h3>
                <p className="text-sm text-ink/60">Trusted carriers and tracking systems</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/20">
                  <span className="text-2xl font-bold text-brand-light">INSURANCE</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-ink">Insurance Coverage</h3>
                <p className="text-sm text-ink/60">Comprehensive cargo insurance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="overflow-hidden rounded-[26px] border border-brand/30 bg-gradient-to-r from-brand/10 to-brand-light/10 p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">Start Your Import/Export Today</h2>
            <p className="mt-4 text-lg text-ink/80">
              Get a free consultation and quote for your automotive import or export needs.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-brand/20">
                  <span className="text-xl font-bold text-brand-light">CALL</span>
                </div>
                <p className="text-sm font-semibold text-ink">Call Us</p>
                <p className="text-sm text-ink/60">{contact.phone}</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-brand/20">
                  <span className="text-xl font-bold text-brand-light">EMAIL</span>
                </div>
                <p className="text-sm font-semibold text-ink">Email</p>
                <p className="text-sm text-ink/60">clearing@obeleautos.com</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-brand/20">
                  <span className="text-xl font-bold text-brand-light">WHATSAPP</span>
                </div>
                <p className="text-sm font-semibold text-ink">WhatsApp</p>
                <p className="text-sm text-ink/60">{contact.whatsapp}</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-brand/20">
                  <span className="text-xl font-bold text-brand-light">LOCATION</span>
                </div>
                <p className="text-sm font-semibold text-ink">Visit Us</p>
                <p className="text-sm text-ink/60">123 Business St</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button href="#contact">Get Free Quote</Button>
              <Button href={contact.tel} variant="secondary">Call Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
