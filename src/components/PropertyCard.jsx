import { Link } from "react-router-dom";

export function PropertyCard({ property }) {
  const image = property.images?.[0]?.imageUrl;

  return (
    <Link to={`/property/${property.propertyId}`}>
      <div className="cursor-pointer overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={property.title}
          className="aspect-square h-50 w-full rounded-2xl object-cover transition-transform duration-300 ease-out hover:scale-105"
        />

        <div className="mt-3">
          <h2 className="font-medium">
            {property.title}
          </h2>

          <p className="text-sm text-gray-500">
            {property.location?.address || "Location unavailable"}
          </p>

          <p className="text-sm text-gray-500">
            ${Number(property.pricePerNight)} per night
          </p>
        </div>
      </div>
    </Link>
  );
}