export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-base/90 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <span className="mb-4 inline-block rounded-xl bg-white px-3 py-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Obele Autos and Car Accessories" className="h-10 w-auto" />
            </span>
            <p className="mb-4 text-sm text-ink/60">
              Your trusted partner for quality vehicles, accessories, and automotive services.
            </p>
            <div className="space-y-2 text-sm text-ink/60">
              <p>123 Business Street, Nairobi</p>
              <p>+254 700 123 456</p>
              <p>info@obeleautos.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-ink">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-ink/60 transition hover:text-brand-light">Home</a></li>
              <li><a href="/about" className="text-ink/60 transition hover:text-brand-light">About</a></li>
              <li><a href="/cars" className="text-ink/60 transition hover:text-brand-light">Cars</a></li>
              <li><a href="/services" className="text-ink/60 transition hover:text-brand-light">Services</a></li>
              <li><a href="/accessories" className="text-ink/60 transition hover:text-brand-light">Shop</a></li>
              <li><a href="/contact" className="text-ink/60 transition hover:text-brand-light">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-ink">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/servicing" className="text-ink/60 transition hover:text-brand-light">Maintenance</a></li>
              <li><a href="/servicing" className="text-ink/60 transition hover:text-brand-light">Repairs</a></li>
              <li><a href="/accessories" className="text-ink/60 transition hover:text-brand-light">Installation</a></li>
              <li><a href="/clearing-forwarding" className="text-ink/60 transition hover:text-brand-light">Import/Export</a></li>
              <li><a href="/parts" className="text-ink/60 transition hover:text-brand-light">Parts Supply</a></li>
              <li><a href="#contact" className="text-ink/60 transition hover:text-brand-light">Contact Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-ink">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#contact" className="text-ink/60 transition hover:text-brand-light">Support</a></li>
              <li><a href="#contact" className="text-ink/60 transition hover:text-brand-light">FAQ</a></li>
              <li><a href="#contact" className="text-ink/60 transition hover:text-brand-light">Warranty</a></li>
              <li><a href="#contact" className="text-ink/60 transition hover:text-brand-light">Returns</a></li>
              <li><a href="#contact" className="text-ink/60 transition hover:text-brand-light">Shipping Info</a></li>
              <li><a href="#contact" className="text-ink/60 transition hover:text-brand-light">Track Order</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-ink/10 pt-6">
          <div className="flex flex-col gap-3 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Obele Autos and Car Accessories. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#contact" className="transition hover:text-brand-light">Privacy Policy</a>
              <a href="#contact" className="transition hover:text-brand-light">Terms of Service</a>
              <a href="#contact" className="transition hover:text-brand-light">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
