export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Obele Autos and Car Accessories</h3>
            <p className="mb-4 text-sm text-slate-400">
              Your trusted partner for quality vehicles, accessories, and automotive services.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <p>123 Business Street, Nairobi</p>
              <p>+254 700 123 456</p>
              <p>info@obeleautos.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-slate-400 transition hover:text-emerald-400">Home</a></li>
              <li><a href="/about" className="text-slate-400 transition hover:text-emerald-400">About</a></li>
              <li><a href="/cars" className="text-slate-400 transition hover:text-emerald-400">Cars</a></li>
              <li><a href="/services" className="text-slate-400 transition hover:text-emerald-400">Services</a></li>
              <li><a href="/accessories" className="text-slate-400 transition hover:text-emerald-400">Shop</a></li>
              <li><a href="/contact" className="text-slate-400 transition hover:text-emerald-400">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/servicing" className="text-slate-400 transition hover:text-emerald-400">Maintenance</a></li>
              <li><a href="/servicing" className="text-slate-400 transition hover:text-emerald-400">Repairs</a></li>
              <li><a href="/accessories" className="text-slate-400 transition hover:text-emerald-400">Installation</a></li>
              <li><a href="/clearing-forwarding" className="text-slate-400 transition hover:text-emerald-400">Import/Export</a></li>
              <li><a href="/parts" className="text-slate-400 transition hover:text-emerald-400">Parts Supply</a></li>
              <li><a href="#contact" className="text-slate-400 transition hover:text-emerald-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#contact" className="text-slate-400 transition hover:text-emerald-400">Support</a></li>
              <li><a href="#contact" className="text-slate-400 transition hover:text-emerald-400">FAQ</a></li>
              <li><a href="#contact" className="text-slate-400 transition hover:text-emerald-400">Warranty</a></li>
              <li><a href="#contact" className="text-slate-400 transition hover:text-emerald-400">Returns</a></li>
              <li><a href="#contact" className="text-slate-400 transition hover:text-emerald-400">Shipping Info</a></li>
              <li><a href="#contact" className="text-slate-400 transition hover:text-emerald-400">Track Order</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6">
          <div className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Obele Autos and Car Accessories. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#contact" className="transition hover:text-emerald-400">Privacy Policy</a>
              <a href="#contact" className="transition hover:text-emerald-400">Terms of Service</a>
              <a href="#contact" className="transition hover:text-emerald-400">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
