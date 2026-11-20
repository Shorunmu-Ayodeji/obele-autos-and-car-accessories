'use client';

import { useState } from 'react';

export function HeroVideo({ src = '/hero-car.mp4' }: { src?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onError={() => setFailed(true)}
      >
        <source src={src} type="video/mp4" onError={() => setFailed(true)} />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-base/85 via-base/80 to-base" />
    </div>
  );
}
