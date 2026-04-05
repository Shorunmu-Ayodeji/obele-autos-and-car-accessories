import { Button } from '../components/Button';

const trustItems = [
  { title: 'Quality you can trust', icon: '✓' },
  { title: 'Affordable pricing', icon: '₦' },
  { title: 'Expert servicing', icon: '🔧' },
  { title: 'Wide range of vehicles and parts', icon: '🚗' },
  { title: 'Customer-first approach', icon: '👥' },
];

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

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 py-12 lg:gap-24 lg:py-16">
      {/* Hero Section */}
      <section className="relative mx-auto w-full max-w-6xl px-4">
        <div
          className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl shadow-emerald-900/20 backdrop-blur sm:p-12 lg:p-20"
          style={{
            backgroundImage: 'url(/api/placeholder/1200/600)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>
          <div className="relative mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Obele Autos and Accessories — Your Trusted Auto Plug
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 mx-auto">
              Affordable foreign cars, quality auto parts, and expert servicing — all in one place.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button href="/cars">Browse Cars</Button>
              <Button href="/accessories" variant="secondary">
                Shop Accessories
              </Button>
              <Button href="https://wa.me/254700123456" className="bg-green-500 hover:bg-green-600 text-white">
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Why Choose Us */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Why Choose Obele Autos?</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-slate-700 bg-slate-950/70 shadow-lg backdrop-blur"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Available Cars</h2>
          <p className="mt-4 text-lg text-slate-400">Explore our premium selection of quality vehicles</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cars.map((car) => (
            <div
              key={car.id}
              className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/70 shadow-lg transition hover:border-emerald-500/50 hover:shadow-emerald-900/20 hover:shadow-lg backdrop-blur"
            >
              <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">{car.name}</h3>
                <p className="text-sm text-slate-400 mt-1">{car.specs}</p>
                <p className="mt-4 text-2xl font-bold text-emerald-400">{car.price}</p>
                <div className="mt-6 flex gap-2">
                  <a
                    href={`/cars/${car.id}`}
                    className="flex-1 rounded-lg bg-slate-700 px-4 py-3 text-center font-semibold text-white transition hover:bg-slate-600"
                  >
                    View Details
                  </a>
                  <a
                    href={`https://wa.me/254700123456?text=Hi, I'm interested in the ${car.name}`}
                    className="flex-1 rounded-lg bg-green-500 px-4 py-3 text-center font-semibold text-white transition hover:bg-green-600"
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
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-slate-400">Comprehensive automotive solutions for all your needs</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/70 shadow-lg transition hover:border-emerald-500/50 hover:shadow-emerald-900/20 hover:shadow-2xl backdrop-blur p-6 flex flex-col h-full"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
              <p className="flex-grow text-sm text-slate-400 mb-4 leading-relaxed">{service.description}</p>
              <a
                href={`https://wa.me/254700123456?text=Hi, I'm interested in ${service.title}`}
                className="inline-flex items-center justify-center gap-2 mt-auto w-full rounded-lg bg-green-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
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
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Auto Accessories</h2>
          <p className="mt-4 text-lg text-slate-400">Enhance your vehicle with our premium accessories</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {accessories.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/70 shadow-lg transition hover:border-emerald-500/50 hover:shadow-emerald-900/20 hover:shadow-lg backdrop-blur"
            >
              <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                <p className="mt-4 text-2xl font-bold text-emerald-400">{item.price}</p>
                <a
                  href={`https://wa.me/254700123456?text=Hi, I'm interested in ordering ${item.name}`}
                  className="mt-6 inline-block w-full rounded-lg bg-green-500 px-4 py-3 text-center font-semibold text-white transition hover:bg-green-600"
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
        <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-950/70 p-8 shadow-2xl backdrop-blur sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-slate-300 leading-relaxed">
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
        <div className="overflow-hidden rounded-3xl bg-slate-900 border border-slate-700 p-8 shadow-2xl backdrop-blur sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to upgrade your ride?</h2>
            <p className="mt-4 text-lg text-slate-300">
              Get in touch with us today for the best automotive deals.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button href="https://wa.me/254700123456" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4">
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
