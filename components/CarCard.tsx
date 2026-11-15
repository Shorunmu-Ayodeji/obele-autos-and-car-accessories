type CarCardProps = {
  id: string | number;
  image: string;
  name: string;
  price: string;
  description: string;
  year: number;
  mileage: string;
};

export function CarCard({ id, image, name, price, description, year, mileage }: CarCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-ink/10 bg-surface/80 shadow-lg transition hover:border-brand/50 hover:shadow-brand-dark/30 hover:shadow-2xl backdrop-blur">
      {/* Image */}
      <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-tile1 to-tile2">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col p-6">
        {/* Header with year */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-ink">{name}</h3>
            <p className="text-sm text-ink/60">{year}</p>
          </div>
          <span className="inline-flex rounded-full bg-brand/20 px-3 py-1 text-sm font-semibold text-brand-light ring-1 ring-brand/30">
            {mileage}
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm text-ink/80">{description}</p>

        {/* Price */}
        <p className="mt-4 text-2xl font-bold text-brand-light">{price}</p>

        {/* Button */}
        <a
          href={`/cars/${id}`}
          className="mt-6 inline-block w-full rounded-lg bg-brand px-4 py-3 text-center font-semibold text-white transition hover:bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand/50"
        >
          View Details
        </a>
      </div>
    </div>
  );
}
