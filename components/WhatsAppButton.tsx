import { WhatsAppIcon } from './WhatsAppIcon';

const message = encodeURIComponent("Hi! I'm interested in your automotive services. Can you help me?");

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/254700123456?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 animate-float focus:outline-none"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-green-500/40" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_12px_30px_-8px_rgba(34,197,94,0.8)] transition group-hover:scale-110 group-hover:bg-green-600 group-focus-visible:ring-4 group-focus-visible:ring-green-500/40">
        <WhatsAppIcon className="h-8 w-8" />
      </span>
      <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-ink/10 bg-surface px-3 py-1.5 text-sm font-medium text-ink opacity-0 transition group-hover:opacity-100 sm:block">
        Chat with us!
      </span>
    </a>
  );
}
