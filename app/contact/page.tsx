import { Button } from '../../components/Button';
import { getContact } from '../../lib/sanity';

export const revalidate = 60;

export const metadata = {
  title: 'Contact Us | Obele Autos and Car Accessories',
  description: 'Get in touch with Obele Autos and Car Accessories for all your automotive needs. Find our location, phone numbers, and contact information.',
};

export default async function ContactPage() {
  const contact = await getContact();
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-ink sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg text-ink/60">
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
              <h2 className="mb-6 text-2xl font-bold text-ink">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/20">
                    <span className="text-xl font-bold text-brand-light">LOCATION</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">Visit Our Showroom</h3>
                    <p className="text-ink/60">123 Business Street<br />Nairobi, Kenya</p>
                    <p className="mt-1 text-sm text-ink/50">Mon-Fri: 8AM-6PM | Sat: 9AM-4PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/20">
                    <span className="text-xl font-bold text-brand-light">CALL</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">Call Us</h3>
                    <p className="text-ink/60">+254 700 123 456</p>
                    <p className="text-ink/60">+254 711 987 654</p>
                    <p className="mt-1 text-sm text-ink/50">24/7 Emergency Support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/20">
                    <span className="text-xl font-bold text-brand-light">EMAIL</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">Email Us</h3>
                    <p className="text-ink/60">info@obeleautos.com</p>
                    <p className="text-ink/60">sales@obeleautos.com</p>
                    <p className="text-ink/60">service@obeleautos.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/20">
                    <span className="text-xl font-bold text-brand-light">WHATSAPP</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">WhatsApp</h3>
                    <p className="text-ink/60">+254 700 123 456</p>
                    <p className="mt-1 text-sm text-ink/50">Quick inquiries and support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-2xl border border-ink/10 bg-surface/80 p-6">
              <h3 className="mb-4 text-lg font-semibold text-ink">Quick Actions</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <Button href={contact.tel}>Call Now</Button>
                <Button href={contact.wa} variant="secondary">WhatsApp</Button>
                <Button href="mailto:info@obeleautos.com" variant="secondary">Email Us</Button>
                <Button href="/cars" variant="secondary">Browse Cars</Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-ink/10 bg-surface/80 p-6">
            <h2 className="mb-6 text-2xl font-bold text-ink">Send us a Message</h2>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-ink/80">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="mt-1 block w-full rounded-lg border border-ink/15 bg-surface px-3 py-2 text-ink placeholder-slate-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-ink/80">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="mt-1 block w-full rounded-lg border border-ink/15 bg-surface px-3 py-2 text-ink placeholder-slate-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink/80">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-lg border border-ink/15 bg-surface px-3 py-2 text-ink placeholder-slate-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-ink/80">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-lg border border-ink/15 bg-surface px-3 py-2 text-ink placeholder-slate-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  placeholder="+254 700 123 456"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-ink/80">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="mt-1 block w-full rounded-lg border border-ink/15 bg-surface px-3 py-2 text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
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
                <label htmlFor="message" className="block text-sm font-medium text-ink/80">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-lg border border-ink/15 bg-surface px-3 py-2 text-ink placeholder-slate-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold bg-brand text-white hover:bg-brand-light transition focus:outline-none focus:ring-2 focus:ring-brand/50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="overflow-hidden rounded-2xl border border-ink/10 bg-surface/80 p-6">
          <h2 className="mb-4 text-2xl font-bold text-ink">Find Us</h2>
          <div className="aspect-video rounded-lg bg-ink/10 flex items-center justify-center">
            <div className="text-center text-ink/60">
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
