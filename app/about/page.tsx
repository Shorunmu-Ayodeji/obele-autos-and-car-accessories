import { Button } from '../../components/Button';

export const metadata = {
  title: 'About Us | Obele Autos and Car Accessories',
  description: 'Learn about Obele Autos and Car Accessories - your trusted partner for quality vehicles, parts, and automotive services in Kenya.',
};

const whyChooseUs = [
  'Quality you can trust',
  'Affordable pricing',
  'Expert servicing',
  'Wide range of vehicles and parts',
  'Customer-first approach',
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">About Obele Autos and Car Accessories</h1>
          <p className="mt-6 max-w-4xl mx-auto text-lg text-slate-300 leading-relaxed">
            At Obele Autos and Car Accessories, we are committed to delivering quality, reliability, and convenience to every car owner. As a trusted name in the automotive space, we provide a complete range of services and products designed to keep your vehicle running smoothly and looking its best.
          </p>
          <p className="mt-4 max-w-4xl mx-auto text-lg text-slate-300 leading-relaxed">
            We specialize in affordable foreign car sales, offering carefully selected vehicles that meet high standards of performance and value. Beyond car sales, we provide top-quality auto parts, stylish accessories, durable tires, and high-performance batteries with everything you need, all in one place.
          </p>
          <p className="mt-4 max-w-4xl mx-auto text-lg text-slate-300 leading-relaxed">
            Our team also delivers reliable engine servicing and maintenance, ensuring your vehicle stays in peak condition. With our clearing and forwarding services, we make importing vehicles and automotive goods simple and stress-free for our customers.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Mission */}
          <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-8">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
              <span className="text-2xl font-bold text-emerald-400">TARGET</span>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-slate-300 leading-relaxed">
              To provide a seamless automotive experience by offering high-quality vehicles, genuine parts, and dependable services all at affordable prices.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-8">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
              <span className="text-2xl font-bold text-emerald-400">VISION</span>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">Our Vision</h3>
            <p className="text-slate-300 leading-relaxed">
              To become a leading automotive hub known for trust, excellence, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Why Choose Obele Autos?</h2>
          <p className="mt-4 text-lg text-slate-400">
            We're committed to providing exceptional automotive solutions with a customer-first approach.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((reason, idx) => (
            <div key={idx} className="flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-950/50 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                <span className="text-lg text-emerald-400">✓</span>
              </div>
              <span className="text-slate-300 font-medium">{reason}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-8 text-center sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Experience the Difference?</h2>
          <p className="mt-4 text-lg text-slate-300">
            Join thousands of satisfied customers who trust Obele Autos for their automotive needs.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/cars">Browse Our Cars</Button>
            <Button href="/contact" variant="secondary">Get In Touch</Button>
          </div>
        </div>
      </section>
    </div>
  );
}