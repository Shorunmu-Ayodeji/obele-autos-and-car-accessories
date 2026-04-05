'use client';

import { useState } from 'react';
import { carDatabase } from '../../../lib/cars';
import { Breadcrumbs } from '../../../components/Breadcrumbs';

type Props = {
  params: {
    id: string;
  };
};

export default function CarDetailsPage({ params }: Props) {
  const car = carDatabase.find((c) => c.id === parseInt(params.id));
  const [mainImage, setMainImage] = useState(car?.gallery[0] || '');
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  if (!car) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Car Not Found</h1>
          <p className="mt-4 text-slate-400">The vehicle you're looking for doesn't exist in our inventory.</p>
          <a
            href="/cars"
            className="mt-6 inline-flex rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Back to Inventory
          </a>
        </div>
      </div>
    );
  }

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
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Images */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div
              className={`overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 transition ${isImageZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
              onClick={() => setIsImageZoomed(!isImageZoomed)}
            >
              <img
                src={mainImage}
                alt={car.name}
                className={`h-auto w-full object-cover transition ${isImageZoomed ? 'scale-150' : 'scale-100'}`}
              />
            </div>

            {/* Gallery Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {car.gallery.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImage(image)}
                  className={`h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition ${mainImage === image ? 'border-emerald-500' : 'border-slate-700'}`}
                >
                  <img src={image} alt={`Gallery ${idx + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-4xl font-bold text-white">{car.name}</h1>
                  <p className="mt-2 text-lg text-slate-400">{car.year}</p>
                </div>
                <span className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ring-1 ${
                  car.condition === 'Like New'
                    ? 'bg-emerald-500/20 text-emerald-300 ring-emerald-500/30'
                    : 'bg-blue-500/20 text-blue-300 ring-blue-500/30'
                }`}>
                  {car.condition}
                </span>
              </div>
              <p className="mt-4 text-4xl font-bold text-emerald-400">{car.price}</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 rounded-xl border border-slate-700 bg-slate-950/50 p-4">
              <div>
                <p className="text-xs font-semibold text-slate-400">MILEAGE</p>
                <p className="mt-1 text-lg font-semibold text-white">{car.mileage}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400">TRANSMISSION</p>
                <p className="mt-1 text-lg font-semibold text-white">{car.transmission}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400">FUEL</p>
                <p className="mt-1 text-lg font-semibold text-white">{car.fuel}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400">ENGINE</p>
                <p className="mt-1 text-lg font-semibold text-white">{car.engine}</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold text-white">About this vehicle</h2>
              <p className="mt-3 text-slate-300">{car.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-4 font-semibold text-slate-950 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.195l-.355.182-.368-.06c-1.286-.264-2.514-.334-3.71-.111L2.7 6.713l.4 1.169c.265.767.Norge.966 1.900 2.454 1.158 1.288 1.193 1.635.041 2.805-1.044 1.084-1.202 1.25-.87 1.803.168.278 1.343 2.107 2.811 3.820 1.468 1.713 2.75 2.251 4.038 2.251.55 0 1.046-.079 1.522-.236 1.412-.46 2.515-1.534 2.762-2.836.168-.859.168-2.816.168-3.484v-3.284c.434.258.937.453 1.486.602 1.637.437 3.074.271 4.271-.527l.542-.366-.39-1.14c-1.217-3.555-4.15-6.162-7.747-6.162-.21 0-.42.008-.627.024z" />
                </svg>
                WhatsApp Inquiry
              </button>
              <button className="rounded-lg border border-emerald-500/50 bg-emerald-500/10 px-6 py-4 font-semibold text-emerald-300 transition hover:bg-emerald-500/20">
                Call Seller
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Vehicle Features</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {car.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-950/50 p-4">
                <span className="text-lg text-emerald-400">✓</span>
                <span className="text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seller Information */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-8">
          <h2 className="text-2xl font-bold text-white">Seller Information</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-slate-400">SELLER</p>
              <p className="mt-2 text-lg font-semibold text-white">{car.seller}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400">PHONE</p>
              <p className="mt-2 text-lg font-semibold text-white">{car.phone}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
