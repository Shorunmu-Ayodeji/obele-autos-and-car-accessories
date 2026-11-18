import { BatteryCharging, BadgeDollarSign, Car, CircleDot, Anchor, ShieldCheck, Users, Wrench, Layers } from 'lucide-react';
import { Button } from '../components/Button';
import { getContact } from '../lib/sanity';

export const revalidate = 60;

const trustItems = [
  { title: 'Quality you can trust', icon: ShieldCheck },
  { title: 'Affordable pricing', icon: BadgeDollarSign },
  { title: 'Expert servicing', icon: Wrench },
  { title: 'Wide range of vehicles and parts', icon: Layers },
  { title: 'Customer-first approach', icon: Users },
];

const cardClass =
  'group relative overflow-hidden rounded-[18px] border border-ink/10 bg-gradient-to-b from-surface2 to-surface transition hover:-translate-y-1.5 hover:border-brand/40';
const waClass =
  'inline-flex items-center justify-center rounded-full bg-green-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-green-600';

function SectionHead({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.18em] text-brand-light">{eyebrow}</span>
      <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-ink/60">{subtitle}</p>}
    </div>
  );
}

function ImageTile({ icon: Icon }: { icon: typeof Car }) {
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-tile1 to-tile2">
      <Icon className="h-16 w-16 text-brand-light/40 transition duration-500 group-hover:scale-110" />
    </div>
  );
}

const cars = [
  {
    id: 1,
    name: 'Toyota Camry 2012',
    price: '₦2,500,000',
    specs: '2.5L Engine, Automatic',
    image: '/api/placeholder/400/300',
  },
  {
    id: 2,
    name: 'Honda Accord 2015',
    price: '₦3,200,000',
    specs: '2.4L Engine, CVT',
    image: '/api/placeholder/400/300',
  },
  {
    id: 3,
    name: 'Nissan Altima 2013',
    price: '₦2,800,000',
    specs: '2.5L Engine, Automatic',
    image: '/api/placeholder/400/300',
  },
  {
    id: 4,
    name: 'Mazda CX-5 2018',
    price: '₦4,500,000',
    specs: '2.0L Turbo, Automatic',
    image: '/api/placeholder/400/300',
  },
];

const services = [
  {
    title: 'Car Sales',
    description: 'Wide selection of quality pre-owned and new vehicles.',
    icon: Car,
  },
  {
    title: 'Engine Servicing',
    description: 'Professional engine maintenance and repair services.',
    icon: Wrench,
  },
  {
    title: 'Batteries',
    description: 'High-quality batteries for all vehicle types.',
    icon: BatteryCharging,
  },
  {
    title: 'Tires',
    description: 'Premium tires and wheel services.',
    icon: CircleDot,
  },
  {
    title: 'Clearing & Forwarding',
    description: 'Complete import/export and customs clearance.',
    icon: Anchor,
  },
];

const accessories = [
  {
    name: 'Car Battery 12V',
    price: '₦25,000',
    image: '/api/placeholder/200/200',
  },
  {
    name: 'Michelin Tires Set',
    price: '₦150,000',
    image: '/api/placeholder/200/200',
  },
  {
    name: 'Leather Seat Covers',
    price: '₦80,000',
    image: '/api/placeholder/200/200',
  },
];

export default async function HomePage() {
  const contact = await getContact();
  return (
    <div className="flex flex-col gap-24 py-12 lg:py-16">
      {/* Hero Section */}
      <section className="relative mx-auto w-full max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-[26px] border border-ink/10 bg-gradient-to-br from-surface2 via-surface to-base p-8 shadow-2xl sm:p-12 lg:p-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-brand-light/10 blur-3xl" />
          <div className="relative mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Obele Autos and Accessories: Your Trusted{' '}
              <em className="bg-gradient-to-r from-brand to-brand-light bg-clip-text not-italic text-transparent">Auto Plug</em>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink/60">
              Affordable foreign cars, quality auto parts, and expert servicing, all in one place.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button href="/cars">Browse Cars</Button>
              <Button href="/accessories" variant="secondary">
                Shop Accessories
              </Button>
              <Button href={contact.wa} className="!bg-green-500 !bg-none !text-white !shadow-none hover:!bg-green-600">
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Why Choose Us */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <SectionHead eyebrow="Why Us" title="Why Choose Obele Autos?" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map((item, index) => (
            <div key={index} className={`${cardClass} flex flex-col items-center p-6 text-center`}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] border border-brand/30 bg-brand/10 text-brand-light">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold text-ink">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <SectionHead eyebrow="Inventory" title="Available Cars" subtitle="Explore our premium selection of quality vehicles" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cars.map((car) => (
            <div key={car.id} className={cardClass}>
              <ImageTile icon={Car} />
              <div className="p-5">
                <h3 className="text-lg font-bold tracking-tight text-ink">{car.name}</h3>
                <p className="mt-1 text-sm text-ink/60">{car.specs}</p>
                <p className="mt-4 text-2xl font-extrabold tracking-tight text-brand-light">{car.price}</p>
                <div className="mt-5 flex flex-col gap-2">
                  <a
                    href={`/cars/${car.id}`}
                    className="rounded-full border border-ink/15 bg-ink/[0.04] px-4 py-3 text-center text-sm font-semibold text-ink transition hover:border-ink/30 hover:bg-ink/[0.08]"
                  >
                    View Details
                  </a>
                  <a href={`${contact.wa}?text=Hi, I'm interested in the ${car.name}`} className={waClass}>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/cars">View All Cars</Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <SectionHead eyebrow="What We Offer" title="Our Services" subtitle="Comprehensive automotive solutions for all your needs" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => (
            <div key={index} className={`${cardClass} flex h-full flex-col p-6`}>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(220px_140px_at_50%_0%,rgba(43,59,255,0.18),transparent_70%)] opacity-0 transition group-hover:opacity-100" />
              <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] border border-brand/30 bg-brand/10 text-brand-light">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="relative mb-2 text-lg font-bold tracking-tight text-ink">{service.title}</h3>
              <p className="relative mb-5 flex-grow text-sm leading-relaxed text-ink/60">{service.description}</p>
              <a
                href={`${contact.wa}?text=Hi, I'm interested in ${service.title}`}
                className={`${waClass} relative mt-auto w-full`}
              >
                Chat on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Accessories Preview */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <SectionHead eyebrow="Shop" title="Auto Accessories" subtitle="Enhance your vehicle with our premium accessories" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {accessories.map((item, index) => (
            <div key={index} className={cardClass}>
              <ImageTile icon={BatteryCharging} />
              <div className="p-5">
                <h3 className="text-lg font-bold tracking-tight text-ink">{item.name}</h3>
                <p className="mt-3 text-2xl font-extrabold tracking-tight text-brand-light">{item.price}</p>
                <a
                  href={`${contact.wa}?text=Hi, I'm interested in ordering ${item.name}`}
                  className={`${waClass} mt-5 w-full`}
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/accessories">Shop Accessories</Button>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="overflow-hidden rounded-[26px] border border-ink/10 bg-gradient-to-b from-surface2 to-surface p-8 sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-ink/80">
              At Obele Autos and Accessories, we are committed to delivering quality, reliability, and convenience to every car owner. We provide affordable foreign cars, genuine parts, and expert servicing all in one place.
            </p>
            <div className="mt-8">
              <Button href="/about">Learn More About Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-[26px] border border-brand/30 bg-gradient-to-r from-brand/15 to-brand-light/10 p-8 sm:p-12">
          <div className="pointer-events-none absolute inset-x-0 -top-20 mx-auto h-56 w-56 rounded-full bg-brand/25 blur-3xl" />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Ready to upgrade your ride?</h2>
            <p className="mt-4 text-lg text-ink/80">
              Get in touch with us today for the best automotive deals.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button href={contact.wa} className="!bg-green-500 !bg-none !text-white !shadow-none hover:!bg-green-600">
                Chat on WhatsApp
              </Button>
              <Button href={contact.tel} variant="secondary">Call Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
