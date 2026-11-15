import { Button } from '../../components/Button';
import { getContact } from '../../lib/sanity';

export const revalidate = 60;

const partsCategories = [
  {
    id: 1,
    title: 'Engine Parts',
    description: 'High-quality engine components and accessories',
    items: ['Oil Filters', 'Air Filters', 'Spark Plugs', 'Belts & Hoses'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Brake System',
    description: 'Complete brake components for safety and performance',
    items: ['Brake Pads', 'Brake Rotors', 'Brake Calipers', 'Brake Lines'],
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Suspension & Steering',
    description: 'Parts for smooth ride and precise handling',
    items: ['Shock Absorbers', 'Struts', 'Control Arms', 'Tie Rods'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Electrical Components',
    description: 'Electrical parts and accessories for your vehicle',
    items: ['Batteries', 'Alternators', 'Starters', 'Sensors'],
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
  },
];

const featuredParts = [
  {
    id: 1,
    name: 'Premium Brake Pad Set',
    price: '$89',
    brand: 'Bosch',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    category: 'Brakes',
    warranty: '2 Years',
  },
  {
    id: 2,
    name: 'Engine Oil Filter',
    price: '$12',
    brand: 'Fram',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    category: 'Engine',
    warranty: '1 Year',
  },
  {
    id: 3,
    name: 'Car Battery 12V',
    price: '$149',
    brand: 'ACDelco',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    category: 'Electrical',
    warranty: '3 Years',
  },
  {
    id: 4,
    name: 'Shock Absorber',
    price: '$79',
    brand: 'Monroe',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    category: 'Suspension',
    warranty: '5 Years',
  },
];

const brands = [
  'Bosch', 'ACDelco', 'Monroe', 'Fram', 'NGK', 'Denso', 'Gates', 'Michelin', 'Bridgestone', 'Continental'
];

export const metadata = {
  title: 'Car Parts | Obele Autos and Car Accessories',
  description: 'Genuine and aftermarket car parts with warranty coverage for all makes and models.',
};

export default async function PartsPage() {
  const contact = await getContact();
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-ink sm:text-5xl">Car Parts</h1>
          <p className="mt-4 text-lg text-ink/60">
            Genuine and aftermarket parts for all makes and models with warranty coverage
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-ink">Parts Categories</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {partsCategories.map((category) => (
            <div
              key={category.id}
              className="group overflow-hidden rounded-2xl border border-ink/10 bg-surface/80 shadow-lg transition hover:border-brand/50 hover:shadow-brand-dark/30 backdrop-blur"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-ink">{category.title}</h3>
                <p className="mb-4 text-ink/80">{category.description}</p>
                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-semibold text-ink/60">Popular Items:</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-ink/80">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-brand-light">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button href="#contact">Browse Parts</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Parts */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-ink">Featured Parts</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredParts.map((part) => (
            <div
              key={part.id}
              className="group overflow-hidden rounded-2xl border border-ink/10 bg-surface/80 shadow-lg transition hover:border-brand/50 hover:shadow-brand-dark/30 hover:shadow-2xl backdrop-blur p-6"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={part.image}
                  alt={part.name}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="inline-flex rounded-full bg-ink/10 px-2 py-1 text-xs text-ink/60">
                    {part.category}
                  </span>
                  <span className="text-xs text-ink/50">{part.warranty}</span>
                </div>
                <h3 className="mb-1 text-lg font-semibold text-ink">{part.name}</h3>
                <p className="mb-2 text-sm text-ink/60">by {part.brand}</p>
                <p className="mb-4 text-xl font-bold text-brand-light">{part.price}</p>
                <Button href="#contact">Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-ink text-center">Trusted Brands</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center rounded-xl border border-ink/10 bg-base py-6 text-center transition hover:border-brand/50 hover:bg-brand/10"
            >
              <span className="text-lg font-semibold text-ink/80">{brand}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="overflow-hidden rounded-[26px] border border-ink/10 bg-surface/80 p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">Parts Installation Service</h2>
            <p className="mt-4 text-lg text-ink/80">
              Professional installation services for all parts and components
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/20">
                  <span className="text-2xl font-bold text-brand-light">TOOLS</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-ink">Expert Installation</h3>
                <p className="text-sm text-ink/60">Certified technicians ensure proper fitment</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/20">
                  <span className="text-2xl font-bold text-brand-light">WARRANTY</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-ink">Warranty Protection</h3>
                <p className="text-sm text-ink/60">Extended warranty on parts and labor</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/20">
                  <span className="text-2xl font-bold text-brand-light">DELIVERY</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-ink">Fast Delivery</h3>
                <p className="text-sm text-ink/60">Quick delivery for in-stock items</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="overflow-hidden rounded-[26px] border border-brand/30 bg-gradient-to-r from-brand/10 to-brand-light/10 p-8 text-center sm:p-12">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Need Help Finding Parts?</h2>
          <p className="mt-4 text-lg text-ink/80">
            Our experts can help you find the right parts for your specific vehicle make and model.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="#contact">Get Parts Quote</Button>
            <Button href={contact.tel} variant="secondary">Call Parts Department</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
