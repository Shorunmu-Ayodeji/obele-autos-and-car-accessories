import { Button } from '../../components/Button';

export const metadata = {
  title: 'Contact Us | Obele Autos and Car Accessories',
  description: 'Get in touch with Obele Autos and Car Accessories for all your automotive needs. Find our location, phone numbers, and contact information.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg text-slate-400">
            Get in touch with our team for all your automotive needs
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-white">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20">
                    <span className="text-xl font-bold text-emerald-400">LOCATION</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Visit Our Showroom</h3>
                    <p className="text-slate-400">123 Business Street<br />Nairobi, Kenya</p>
                    <p className="mt-1 text-sm text-slate-500">Mon-Fri: 8AM-6PM | Sat: 9AM-4PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20">
                    <span className="text-xl font-bold text-emerald-400">CALL</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Call Us</h3>
                    <p className="text-slate-400">+254 700 123 456</p>
                    <p className="text-slate-400">+254 711 987 654</p>
                    <p className="mt-1 text-sm text-slate-500">24/7 Emergency Support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20">
                    <span className="text-xl font-bold text-emerald-400">EMAIL</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email Us</h3>
                    <p className="text-slate-400">info@obeleautos.com</p>
                    <p className="text-slate-400">sales@obeleautos.com</p>
                    <p className="text-slate-400">service@obeleautos.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20">
                    <span className="text-xl font-bold text-emerald-400">WHATSAPP</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">WhatsApp</h3>
                    <p className="text-slate-400">+254 700 123 456</p>
                    <p className="mt-1 text-sm text-slate-500">Quick inquiries and support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Quick Actions</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <Button href="tel:+254700123456">Call Now</Button>
                <Button href="https://wa.me/254700123456" variant="secondary">WhatsApp</Button>
                <Button href="mailto:info@obeleautos.com" variant="secondary">Email Us</Button>
                <Button href="/cars" variant="secondary">Browse Cars</Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-6">
            <h2 className="mb-6 text-2xl font-bold text-white">Send us a Message</h2>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-300">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="mt-1 block w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-300">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="mt-1 block w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  placeholder="+254 700 123 456"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="mt-1 block w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                >
                  <option value="">Select a subject</option>
                  <option value="sales">Car Sales Inquiry</option>
                  <option value="service">Service Appointment</option>
                  <option value="parts">Parts Inquiry</option>
                  <option value="accessories">Accessories</option>
                  <option value="clearing">Clearing & Forwarding</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/70 p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">Find Us</h2>
          <div className="aspect-video rounded-lg bg-slate-800 flex items-center justify-center">
            <div className="text-center text-slate-400">
              <div className="mb-2 text-4xl">LOCATION</div>
              <p>Interactive map would be embedded here</p>
              <p className="text-sm">123 Business Street, Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
