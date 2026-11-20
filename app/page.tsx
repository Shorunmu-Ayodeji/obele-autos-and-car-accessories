import { Button } from '../components/Button';
import { HeroVideo } from '../components/HeroVideo';
import { getCars, getContact } from '../lib/sanity';

export const revalidate = 60;

const trustItems = [
  { title: 'Quality you can trust', text: 'Top-quality vehicles, handpicked for you.', href: '/cars', path: 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3zm-3 9l2 2 4-4' },
  { title: 'Affordable pricing', text: 'Get the best value for your money.', href: '/cars', path: 'M3 12l9-9h8v8l-9 9-8-8zm13-5h.01' },
  { title: 'Expert servicing', text: 'Keep your ride in perfect condition.', href: '/servicing', path: 'M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.4 2.4-2.6-.6-.6-2.6 2.6-2.2z' },
  { title: 'Wide range of vehicles and parts', text: "From cars to parts, we've got you covered.", href: '/parts', path: 'M5 16l1.5-5h11L19 16M5 16h14v3H5v-3zm2 0v-.01M17 16v-.01' },
  { title: 'Customer-first approach', text: 'Your satisfaction is our priority.', href: '/contact', path: 'M4 14v-2a8 8 0 0116 0v2M4 14h3v4H4v-4zm13 0h3v4h-3v-4zm3 4c0 2-3 3-6 3' },
];

const trustStats = ['Trusted by Thousands', 'Reliable Service Always', 'Drive with Confidence'];


const services = [
  {
    title: 'Car Sales',
    description: 'Wide selection of quality pre-owned and new vehicles.',
    icon: '🚗',
  },
  {
    title: 'Engine Servicing',
    description: 'Professional engine maintenance and repair services.',
    icon: '🔧',
  },
  {
    title: 'Batteries',
    description: 'High-quality batteries for all vehicle types.',
    icon: '🔋',
  },
  {
    title: 'Tires',
    description: 'Premium tires and wheel services.',
    icon: '🛞',
  },
  {
    title: 'Clearing & Forwarding',
    description: 'Complete import/export and customs clearance.',
    icon: '📦',
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
  const [allCars, contact] = await Promise.all([getCars(), getContact()]);
  const cars = allCars.slice(0, 4);
  return (
    <div className="flex flex-col gap-20 py-12 lg:gap-24 lg:py-16">
      {/* Hero Section */}
      <section className="relative isolate mx-auto w-full max-w-6xl overflow-hidden rounded-3xl px-4 py-16 sm:py-24">
        <HeroVideo />
        <div className="relative mx-auto max-w-3xl pt-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Obele Autos and Accessories, Your Trusted Auto Plug
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink/70">
            Affordable foreign cars, quality auto parts, and expert servicing, all in one place.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <Button href="/cars">Browse Cars</Button>
            <Button href="/accessories" variant="secondary">
              Shop Accessories
            </Button>
            <Button href={contact.wa} className="bg-accent text-white shadow-accent/30 hover:bg-accent-dark">
              Chat on WhatsApp
            </Button>
          </div>
        </div>

      </section>
      {/* Trust / Why Choose Us */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-10 text-center sm:text-left">
          <span className="inline-block rounded-full border border-brand/40 px-4 py-1 text-sm font-semibold text-brand-light">Why Choose Us</span>
          <h2 className="mt-4 text-4xl font-extrabold text-ink sm:text-5xl">
            Why Choose <span className="block text-brand-light">Obele Autos?</span>
          </h2>
          <p className="mt-4 max-w-xl text-ink/60">
            At Obele Autos, we are committed to giving you more than just a car, we deliver trust, value and a seamless experience.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group flex flex-col rounded-2xl border border-brand/30 bg-surface/70 p-5 shadow-lg transition hover:border-brand-light hover:shadow-brand/20"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand-light">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={item.path} />
                </svg>
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm text-ink/60">{item.text}</p>
              <span className="mt-4 flex h-8 w-8 items-center justify-center rounded-full border border-brand text-brand-light transition group-hover:bg-brand group-hover:text-white">→</span>
            </a>
          ))}
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-brand/30 bg-surface/70 p-5 sm:flex-row">
          <div className="flex flex-col gap-2 text-center text-sm font-semibold text-ink sm:flex-row sm:gap-8 sm:text-left">
            {trustStats.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          <Button href="/cars">Explore Our Cars →</Button>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Available Cars</h2>
          <p className="mt-4 text-lg text-ink/60">Explore our premium selection of quality vehicles</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cars.map((car) => (
            <div
              key={car.id}
              className="group overflow-hidden rounded-2xl border border-brand/20 bg-surface/70 shadow-lg transition hover:border-brand/60 hover:shadow-brand/20 hover:shadow-lg backdrop-blur"
            >
              <div className="aspect-square bg-gradient-to-br from-tile1 to-tile2 flex items-center justify-center">
                {car.image && <img src={car.image} alt={car.name} className="w-full h-full object-cover" />}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-ink">{car.name}</h3>
                <p className="text-sm text-ink/60 mt-1">{[car.year, car.transmission, car.engine].filter(Boolean).join(", ")}</p>
                <p className="mt-4 text-2xl font-bold text-brand-light">{car.price}</p>
                <div className="mt-6 flex gap-2">
                  <a
                    href={`/cars/${car.id}`}
                    className="flex-1 rounded-lg bg-brand px-4 py-3 text-center font-semibold text-white transition hover:bg-brand-light"
                  >
                    View Details
                  </a>
                  <a
                    href={`${contact.wa}?text=${encodeURIComponent(`Hi, I'm interested in the ${car.name}`)}`}
                    className="flex-1 rounded-lg bg-accent px-4 py-3 text-center font-semibold text-white transition hover:bg-accent-dark"
                  >
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
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-ink/60">Comprehensive automotive solutions for all your needs</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-brand/20 bg-surface/70 shadow-lg transition hover:border-brand/60 hover:shadow-brand/20 hover:shadow-2xl backdrop-blur p-6 flex flex-col h-full"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-ink mb-3">{service.title}</h3>
              <p className="flex-grow text-sm text-ink/60 mb-4 leading-relaxed">{service.description}</p>
              <a
                href={`https://wa.me/254700123456?text=Hi, I'm interested in ${service.title}`}
                className="inline-flex items-center justify-center gap-2 mt-auto w-full rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
              >
                Chat on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Accessories Preview */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Auto Accessories</h2>
          <p className="mt-4 text-lg text-ink/60">Enhance your vehicle with our premium accessories</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {accessories.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-brand/20 bg-surface/70 shadow-lg transition hover:border-brand/60 hover:shadow-brand/20 hover:shadow-lg backdrop-blur"
            >
              <div className="aspect-square bg-gradient-to-br from-tile1 to-tile2 flex items-center justify-center">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-ink">{item.name}</h3>
                <p className="mt-4 text-2xl font-bold text-brand-light">{item.price}</p>
                <a
                  href={`https://wa.me/254700123456?text=Hi, I'm interested in ordering ${item.name}`}
                  className="mt-6 inline-block w-full rounded-lg bg-accent px-4 py-3 text-center font-semibold text-white transition hover:bg-accent-dark"
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
        <div className="overflow-hidden rounded-3xl border border-brand/20 bg-surface/70 p-8 shadow-2xl backdrop-blur sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-ink/70 leading-relaxed">
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
        <div className="overflow-hidden rounded-3xl bg-surface border border-brand/20 p-8 shadow-2xl backdrop-blur sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">Ready to upgrade your ride?</h2>
            <p className="mt-4 text-lg text-ink/70">
              Get in touch with us today for the best automotive deals.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button href="https://wa.me/254700123456" className="bg-accent hover:bg-accent-dark text-white text-lg px-8 py-4">
                Chat on WhatsApp
              </Button>
              <Button href="tel:+254700123456" variant="secondary">Call Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
