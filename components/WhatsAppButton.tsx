'use client';

import { useState } from 'react';

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your automotive services. Can you help me?");
    window.open(`https://wa.me/254700123456?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsApp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-500 px-4 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-600 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-500/30"
      aria-label="Chat with us on WhatsApp"
    >
      <svg
        className={`h-6 w-6 transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.195l-.355.182-.368-.06c-1.286-.264-2.514-.334-3.71-.111L2.7 6.713l.4 1.169c.265.767.966.966 1.9 2.454 1.158 1.288 1.193 1.635.041 2.805-.87 1.202-1.25.87-1.803-.168-.278 1.343-2.107 2.811-3.82 1.468-1.713 2.75-2.251 4.038-2.251.55 0 1.046-.079 1.522-.236 1.412-.46 2.515-1.534 2.762-2.836.168-.859.168-2.816.168-3.484v-3.284c.434.258.937.453 1.486.602 1.637.437 3.074.271 4.271-.527l.542-.366-.39-1.14c-1.217-3.555-4.15-6.162-7.747-6.162-.21 0-.42.008-.627.024z" />
      </svg>
      {isHovered && (
        <span className="hidden sm:inline text-sm font-medium">Chat with us!</span>
      )}
    </button>
  );
}