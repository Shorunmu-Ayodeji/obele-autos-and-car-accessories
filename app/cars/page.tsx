import { CarCard } from '../../components/CarCard';
import { carDatabase } from '../../lib/cars';

const carInventory = carDatabase.map(car => ({
  id: car.id,
  image: car.image,
  name: car.name,
  price: car.price,
  description: car.description,
  year: car.year,
  mileage: car.mileage,
}));

export const metadata = {
  title: 'Cars for Sale | Obele Autos and Car Accessories',
  description: 'Browse our available vehicles for sale.',
};

export default function CarsPage() {
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
