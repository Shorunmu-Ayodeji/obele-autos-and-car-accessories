'use client';

import { useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import type { Car } from '../lib/sanity';
import { Breadcrumbs } from './Breadcrumbs';

type Props = {
  car: Car;
  phone: string;
};

export default function CarDetails({ car: baseCar, phone }: Props) {
  const car = { ...baseCar, phone, seller: 'Obele Autos', gallery: baseCar.gallery ?? [] };
  const [mainImage, setMainImage] = useState(car.gallery[0] || '');
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in the ${car.name} (${car.year}) priced at ${car.price}. Could you provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${car.phone.replace(/\D/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex flex-col gap-12 py-12">
      {/* Breadcrumbs */}
      <div className="mx-auto w-full max-w-6xl px-4">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Cars', href: '/cars' },
            { label: car.name, href: `/cars/${car.id}` },
          ]}
        />
      </div>

      {/* Main Content */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Images */}
          <div className="flex min-w-0 flex-col gap-4">
            {/* Main Image */}
            <div
              className={`aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink/10 bg-surface transition ${isImageZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
              onClick={() => setIsImageZoomed(!isImageZoomed)}
            >
              <img
                src={mainImage}
                alt={car.name}
                className={`h-full w-full object-cover transition ${isImageZoomed ? 'scale-150' : 'scale-100'}`}
              />
            </div>

            {/* Gallery Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {car.gallery.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImage(image)}
                  className={`h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 overflow-hidden rounded-lg border-2 transition ${mainImage === image ? 'border-brand' : 'border-ink/10'}`}
                >
                  <img src={image} alt={`Gallery ${idx + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex min-w-0 flex-col gap-6">
            {/* Header */}
            <div>
              <div className="flex flex-wrap items-start justify-between gap-4">
                              <div className="min-w-0">
                                <h1 className="text-2xl font-bold text-ink sm:text-4xl">{car.name}</h1>
                  <p className="mt-2 text-lg text-ink/60">{car.year}</p>
                </div>
                <span className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ring-1 ${
                  car.condition === 'Like New'
                    ? 'bg-brand/20 text-brand-light ring-brand/30'
                    : 'bg-blue-500/20 text-blue-300 ring-blue-500/30'
                }`}>
                  {car.condition}
                </span>
              </div>
              <p className="mt-4 text-3xl font-bold text-brand-light sm:text-4xl">{car.price}</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 rounded-xl border border-ink/10 bg-base p-4">
              <div>
                <p className="text-xs font-semibold text-ink/60">MILEAGE</p>
                <p className="mt-1 text-lg font-semibold text-ink">{car.mileage}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-ink/60">TRANSMISSION</p>
                <p className="mt-1 text-lg font-semibold text-ink">{car.transmission}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-ink/60">FUEL</p>
                <p className="mt-1 text-lg font-semibold text-ink">{car.fuel}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-ink/60">ENGINE</p>
                <p className="mt-1 text-lg font-semibold text-ink">{car.engine}</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold text-ink">About this vehicle</h2>
              <p className="mt-3 text-ink/80">{car.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 font-semibold text-white transition hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent/50"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp Inquiry
              </button>
              <button className="rounded-lg border border-accent/50 bg-accent/10 px-6 py-4 font-semibold text-accent-light transition hover:bg-accent/20">
                Call Seller
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div>
          <h2 className="text-2xl font-bold text-ink">Vehicle Features</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {car.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 rounded-lg border border-ink/10 bg-base p-4">
                <span className="text-lg text-brand-light">✓</span>
                <span className="text-ink/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seller Information */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="overflow-hidden rounded-2xl border border-ink/10 bg-gradient-to-r from-brand/10 to-brand-light/10         p-5 sm:p-8">
          <h2 className="text-2xl font-bold text-ink">Seller Information</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-ink/60">SELLER</p>
              <p className="mt-2 text-lg font-semibold text-ink">{car.seller}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-ink/60">PHONE</p>
              <p className="mt-2 text-lg font-semibold text-ink">{car.phone}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
