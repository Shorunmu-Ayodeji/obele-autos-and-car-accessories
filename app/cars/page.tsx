import { CarCard } from '../../components/CarCard';
import { getCars } from '../../lib/sanity';

export const revalidate = 60;

export const metadata = {
  title: 'Cars for Sale | Obele Autos and Car Accessories',
  description: 'Browse our available vehicles for sale.',
};

export default async function CarsPage() {
  const carInventory = await getCars();
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Cars Grid */}
      <section className="mx-auto w-full max-w-6xl px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {carInventory.map((car) => (
            <CarCard
              key={car.id}
              id={car.id}
              image={car.image}
              name={car.name}
              price={car.price}
              description={car.description}
              year={car.year}
              mileage={car.mileage}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
