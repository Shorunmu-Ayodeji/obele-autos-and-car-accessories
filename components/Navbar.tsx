'use client';

import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/cars', label: 'Cars' },
  { href: '/services', label: 'Services' },
  { href: '/accessories', label: 'Shop' },
  { href: '/contact', label: 'Contact' },
];

const whatsappNumber = '+254700123456'; // Replace with your WhatsApp number

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`, '_blank');
  };

  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <p className="text-lg font-semibold text-white">Obele Autos and Car Accessories</p>
            <p className="text-xs text-slate-400">Quality vehicles and automotive services</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-emerald-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side - WhatsApp + Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleWhatsApp}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.195l-.355.182-.368-.06c-1.286-.264-2.514-.334-3.71-.111L2.7 6.713l.4 1.169c.265.767.Norge.966 1.900 2.454 1.158 1.288 1.193 1.635.041 2.805-1.044 1.084-1.202 1.25-.87 1.803.168.278 1.343 2.107 2.811 3.820 1.468 1.713 2.75 2.251 4.038 2.251.55 0 1.046-.079 1.522-.236 1.412-.46 2.515-1.534 2.762-2.836.168-.859.168-2.816.168-3.484v-3.284c.434.258.937.453 1.486.602 1.637.437 3.074.271 4.271-.527l.542-.366-.39-1.14c-1.217-3.555-4.15-6.162-7.747-6.162-.21 0-.42.008-.627.024z" />
              </svg>
              WhatsApp
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-300 transition hover:bg-slate-800"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="mt-4 flex flex-col gap-3 border-t border-slate-800 pt-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-emerald-400 rounded-md"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                handleWhatsApp();
                setIsOpen(false);
              }}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.195l-.355.182-.368-.06c-1.286-.264-2.514-.334-3.71-.111L2.7 6.713l.4 1.169c.265.767.Norge.966 1.900 2.454 1.158 1.288 1.193 1.635.041 2.805-1.044 1.084-1.202 1.25-.87 1.803.168.278 1.343 2.107 2.811 3.820 1.468 1.713 2.75 2.251 4.038 2.251.55 0 1.046-.079 1.522-.236 1.412-.46 2.515-1.534 2.762-2.836.168-.859.168-2.816.168-3.484v-3.284c.434.258.937.453 1.486.602 1.637.437 3.074.271 4.271-.527l.542-.366-.39-1.14c-1.217-3.555-4.15-6.162-7.747-6.162-.21 0-.42.008-.627.024z" />
              </svg>
              WhatsApp
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
