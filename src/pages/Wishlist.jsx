import { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";



function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(saved);
  }, []);
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <button
  onClick={() => navigate(-1)}
  className="text-2xl text-[#717171] py-3"
>
  ←
</button>
      <h1 className="mb-8 text-3xl font-semibold">
        Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">
          You haven't saved any properties yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {wishlist.map((property) => (
            <Link
              key={property.id}
              to={`/property/${property.id}`}
              className="overflow-hidden rounded-2xl border border-gray-200"
            >
              <img
                src={property.images[0]}
                alt={property.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-4">
                <h2 className="font-semibold">
                  {property.title}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {property.location}
                </p>

                <p className="mt-2 font-medium">
                  ${property.price} night
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;