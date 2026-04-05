import { Button } from '../../components/Button';

const accessoryCategories = [
  {
    id: 1,
    title: 'Interior Accessories',
    description: 'Enhance your driving comfort with premium interior upgrades',
    items: ['Floor Mats', 'Seat Covers', 'Dashboard Covers', 'Steering Wheel Covers'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Exterior Accessories',
    description: 'Protect and style your vehicle with exterior enhancements',
    items: ['Car Covers', 'Mud Guards', 'Roof Racks', 'Window Tinting'],
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Electronics & Audio',
    description: 'Upgrade your entertainment and safety systems',
    items: ['Car Stereos', 'Speakers', 'GPS Navigation', 'Dash Cameras'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Performance Parts',
    description: 'Boost your vehicle\'s performance and handling',
    items: ['Air Filters', 'Exhaust Systems', 'Suspension Kits', 'Brake Pads'],
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
  },
];

const featuredAccessories = [
  {
    id: 1,
    name: 'Premium Leather Seat Covers',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    category: 'Interior',
  },
  {
    id: 2,
    name: 'LED Headlight Kit',
    price: '$189',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    category: 'Exterior',
  },
  {
    id: 3,
    name: 'Bluetooth Car Stereo',
    price: '$249',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    category: 'Electronics',
  },
  {
    id: 4,
    name: 'Performance Air Filter',
    price: '$89',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    category: 'Performance',
  },
];

export const metadata = {
  title: 'Car Accessories | Obele Autos and Car Accessories',
  description: 'Premium car accessories for interior, exterior, electronics, and performance upgrades.',
};

export default function AccessoriesPage() {
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Car Accessories</h1>
          <p className="mt-4 text-lg text-slate-400">
            Enhance your vehicle with premium accessories for comfort, style, and performance
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-white">Accessory Categories</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {accessoryCategories.map((category) => (
            <div
              key={category.id}
              className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/70 shadow-lg transition hover:border-emerald-500/50 hover:shadow-emerald-900/20 backdrop-blur"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-white">{category.title}</h3>
                <p className="mb-4 text-slate-300">{category.description}</p>
                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-semibold text-slate-400">Popular Items:</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-slate-300">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-emerald-400">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button href="#contact">Inquire Now</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Accessories */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-white">Featured Accessories</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredAccessories.map((accessory) => (
            <div
              key={accessory.id}
              className="group overflow-hidden rounded-xl border border-slate-700 bg-slate-950/70 shadow-lg transition hover:border-emerald-500/50 hover:shadow-emerald-900/20 backdrop-blur"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={accessory.image}
                  alt={accessory.name}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <span className="inline-flex rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-400">
                    {accessory.category}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{accessory.name}</h3>
                <p className="mb-4 text-xl font-bold text-emerald-400">{accessory.price}</p>
                <Button href="#contact">Get Quote</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-950/70 p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Professional Installation</h2>
            <p className="mt-4 text-lg text-slate-300">
              Our certified technicians provide professional installation services for all accessories
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                  <span className="text-2xl font-bold text-emerald-400">TOOLS</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Expert Installation</h3>
                <p className="text-sm text-slate-400">Certified technicians with years of experience</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                  <span className="text-2xl font-bold text-emerald-400">SHIELD</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Warranty Coverage</h3>
                <p className="text-sm text-slate-400">Comprehensive warranty on parts and labor</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                  <span className="text-2xl font-bold text-emerald-400">FAST</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Quick Service</h3>
                <p className="text-sm text-slate-400">Fast turnaround times for all installations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-8 text-center sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Need Help Choosing Accessories?</h2>
          <p className="mt-4 text-lg text-slate-300">
            Our experts can help you find the perfect accessories for your vehicle and budget.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="#contact">Get Free Consultation</Button>
            <Button href="tel:+254700123456" variant="secondary">Call Now</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
