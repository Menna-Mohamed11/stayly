

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { getPropertyById } from "../../api/property";

function Photos() {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getPropertyById(id);

        console.log("Photos property:", data);

        setProperty(data);
      } catch (err) {
        console.error("Error fetching property:", err);
        setError("Failed to load property photos.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProperty();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Loading photos...</p>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <p className="text-red-500">
          {error || "Property not found."}
        </p>

        <Link
          to="/"
          className="rounded-lg bg-[#222222] px-5 py-2 text-white"
        >
          Go Home
        </Link>
      </div>
    );
  }

  /*
    Backend structure:

    property.images = [
      {
        imageId,
        propertyId,
        imageUrl,
        ...
      }
    ]

    So we convert the backend image objects
    into simple image URLs.
  */
  const images = Array.isArray(property.images)
    ? property.images
        .map((image) => {
          if (typeof image === "string") {
            return image;
          }

          return image?.imageUrl;
        })
        .filter(Boolean)
    : [];

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HEADER ================= */}
      <div className="px-2 md:px-7 flex h-16 max-w-7xl items-center">
        <Link
          to={`/property/${property.propertyId}`}
          className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-[#222222] transition hover:bg-gray-100"
        >
          <ArrowLeft size={20} />
        </Link>
      </div>

      {/* ================= MAIN ================= */}
      <main className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">

        {/* Page title */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-[#222222] sm:text-4xl">
            Photo tour
          </h1>

          <p className="mt-2 text-[#717171]">
            {property.title}
          </p>
        </div>

        {/* ================= ALL PHOTOS ================= */}
        {images.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage(image)}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={image}
                  alt={`${property.title} ${index + 1}`}
                  className="h-62 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        ) : (
          <div className="flex min-h-80 items-center justify-center rounded-2xl border border-gray-200">
            <p className="text-[#717171]">
              No photos available for this property.
            </p>
          </div>
        )}

      </main>

      {/* ================= FULLSCREEN IMAGE ================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >

          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#222222] shadow-lg transition hover:bg-gray-100"
            aria-label="Close image"
          >
            <X size={22} />
          </button>

          {/* Selected image */}
          <img
            src={selectedImage}
            alt={property.title}
            className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

        </div>
      )}
    </div>
  );
}

export default Photos;
