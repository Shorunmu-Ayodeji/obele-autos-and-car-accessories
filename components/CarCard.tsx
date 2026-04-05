type CarCardProps = {
  id: number;
  image: string;
  name: string;
  price: string;
  description: string;
  year: number;
  mileage: string;
};

export function CarCard({ id, image, name, price, description, year, mileage }: CarCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/70 shadow-lg transition hover:border-emerald-500/50 hover:shadow-emerald-900/20 hover:shadow-2xl backdrop-blur">
      {/* Image */}
      <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
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
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <p className="text-sm text-slate-400">{year}</p>
          </div>
          <span className="inline-flex rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-semibold text-emerald-300 ring-1 ring-emerald-500/30">
            {mileage}
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm text-slate-300">{description}</p>

        {/* Price */}
        <p className="mt-4 text-2xl font-bold text-emerald-400">{price}</p>

        {/* Button */}
        <a
          href={`/cars/${id}`}
          className="mt-6 inline-block w-full rounded-lg bg-emerald-500 px-4 py-3 text-center font-semibold text-slate-950 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
        >
          View Details
        </a>
      </div>
    </div>
  );
}
