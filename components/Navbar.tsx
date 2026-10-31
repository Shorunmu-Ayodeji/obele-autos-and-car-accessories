'use client';

import { useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ThemeToggle } from './ThemeToggle';

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
    <header className="border-b border-ink/10 bg-base/90 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <span className="rounded-xl bg-white px-3 py-1.5 shadow-[0_8px_22px_-8px_rgba(43,59,255,0.5)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Obele Autos and Car Accessories" className="h-10 w-auto" />
            </span>
            <span className="hidden lg:block">
              <span className="block text-[11px] uppercase tracking-[0.12em] text-ink/60">Quality vehicles and</span>
              <span className="block text-[11px] uppercase tracking-[0.12em] text-ink/60">automotive services</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink/80 transition hover:text-brand-light"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side - WhatsApp + Menu Button */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={handleWhatsApp}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand/50"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-ink/80 transition hover:bg-ink/10"
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
          <nav className="mt-4 flex flex-col gap-3 border-t border-ink/10 pt-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-sm font-medium text-ink/80 transition hover:bg-ink/10 hover:text-brand-light rounded-md"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                handleWhatsApp();
                setIsOpen(false);
              }}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-light"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
