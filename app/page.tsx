import { Button } from '../components/Button';

const cars = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2023, price: '$18,500', image: '/api/placeholder/400/300' },
  { id: 2, make: 'Honda', model: 'Accord', year: 2022, price: '$16,800', image: '/api/placeholder/400/300' },
  { id: 3, make: 'Mazda', model: 'CX-5', year: 2024, price: '$22,900', image: '/api/placeholder/400/300' },
  { id: 4, make: 'Nissan', model: 'Altima', year: 2023, price: '$17,200', image: '/api/placeholder/400/300' },
];

const services = [
  {
    id: 1,
    title: 'Car Sales',
    description: 'Browse our wide selection of quality pre-owned and new vehicles tailored to your needs.',
    icon: 'CAR',
    href: '/cars',
  },
  {
    id: 2,
    title: 'Accessories',
    description: 'Premium car accessories to enhance comfort, style, and functionality of your vehicle.',
    icon: 'TOOLS',
    href: '/accessories',
  },
  {
    id: 3,
    title: 'Servicing',
    description: 'Professional maintenance and repair services performed by certified technicians.',
    icon: 'WRENCH',
    href: '/servicing',
  },
  {
    id: 4,
    title: 'Parts',
    description: 'Genuine and aftermarket parts for all makes and models with warranty coverage.',
    icon: 'GEAR',
    href: '/parts',
  },
  {
    id: 5,
    title: 'Clearing & Forwarding',
    description: 'Complete import/export logistics and customs clearance for automotive goods.',
    icon: 'BOX',
    href: '/clearing-forwarding',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 py-12 lg:gap-24 lg:py-16">
      {/* Hero Section */}
      <section id="home" className="mx-auto w-full max-w-6xl px-4">
        <div className="overflow-hidden rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl shadow-emerald-900/20 backdrop-blur sm:p-12 lg:p-20">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-300 ring-1 ring-emerald-500/30">
              Premium Auto Solutions
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Obele Autos and Accessories is your one-stop destination for all your automotive needs.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              From affordable foreign cars to quality parts, servicing, and upgrades. We keep your ride in top shape.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Button href="/cars">Browse Cars</Button>
              <Button href="/contact" variant="secondary">
                Contact Us
              </Button>
              <Button href="/accessories" variant="secondary">
                Shop Accessories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section id="cars" className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured Vehicles</h2>
          <p className="mt-4 text-lg text-slate-400">Discover our handpicked selection of quality automobiles</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cars.map((car) => (
            <div
              key={car.id}
              className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/70 shadow-lg transition hover:border-emerald-500/50 hover:shadow-emerald-900/20 hover:shadow-lg backdrop-blur"
            >
              <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    {car.make} {car.model}
                  </h3>
                  <span className="text-xs font-medium text-slate-400">{car.year}</span>
                </div>
                <p className="mt-4 text-2xl font-bold text-emerald-400">{car.price}</p>
                <a
                  href={`/cars/${car.id}`}
                  className="mt-6 inline-block w-full rounded-lg bg-emerald-500 px-4 py-3 text-center font-semibold text-slate-950 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-slate-400">Everything you need for your automotive journey</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <div
              key={service.id}
              className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/70 shadow-lg transition hover:border-emerald-500/50 hover:shadow-emerald-900/20 hover:shadow-2xl backdrop-blur p-6 flex flex-col h-full"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
              <p className="flex-grow text-sm text-slate-400 mb-4 leading-relaxed">{service.description}</p>
              <a href={service.href} className="inline-flex items-center justify-center gap-2 mt-auto w-full rounded-lg bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="mx-auto w-full max-w-6xl px-4">
        <div className="overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-8 shadow-2xl shadow-emerald-900/20 backdrop-blur sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to upgrade your ride?</h2>
            <p className="mt-4 text-lg text-slate-300">
              Contact our team today for all your automotive needs.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button href="https://wa.me/254700123456">Chat on WhatsApp</Button>
              <Button href="tel:+254700123456" variant="secondary">Call Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
