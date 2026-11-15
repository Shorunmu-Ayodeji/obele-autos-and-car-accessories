import CarDetails from '../../../components/CarDetails';
import { getCar, getContact } from '../../../lib/sanity';

export const revalidate = 60;

export default async function CarDetailsPage({ params }: { params: { id: string } }) {
  const [car, contact] = await Promise.all([getCar(params.id), getContact()]);

  if (!car) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-ink">Car Not Found</h1>
          <p className="mt-4 text-ink/60">The vehicle you&apos;re looking for doesn&apos;t exist in our inventory.</p>
          <a
            href="/cars"
            className="mt-6 inline-flex rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-light"
          >
            Back to Inventory
          </a>
        </div>
      </div>
    );
  }

  return <CarDetails car={car} phone={contact.whatsapp} />;
}
