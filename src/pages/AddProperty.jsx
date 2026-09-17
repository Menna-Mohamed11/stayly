import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import HostNavbar from "../components/HostNavbar";

function AddProperty() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    guests: "",
    bedrooms: "",
    bathrooms: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("New property:", formData);

    alert("Your property has been added!");

    navigate("/host/listings");
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7]">

      <HostNavbar />

      <main className="mx-auto max-w-3xl px-6 py-10">

        {/* Back */}
        <Link
          to="/host"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#717171] hover:text-[#222222]"
        >
          <ArrowLeft size={18} />
          Back to dashboard
        </Link>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">

          <h1 className="text-3xl font-semibold text-[#222222]">
            Add a new property
          </h1>

          <p className="mt-2 text-[#717171]">
            Tell guests about your apartment.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >

            {/* Title */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Property title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Example: Cozy 2 Bedroom Apartment"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#FF5A5F]"
              />
            </div>

            {/* Location */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Cairo, Egypt"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#FF5A5F]"
              />
            </div>

            {/* Price */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Price per night
              </label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="120"
                min="1"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#FF5A5F]"
              />
            </div>

            {/* Guests / Bedrooms / Bathrooms */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Guests
                </label>

                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  min="1"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#FF5A5F]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Bedrooms
                </label>

                <input
                  type="number"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  min="1"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#FF5A5F]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Bathrooms
                </label>

                <input
                  type="number"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                  min="1"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#FF5A5F]"
                />
              </div>

            </div>

            {/* Image */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Property image URL
              </label>

              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#FF5A5F]"
              />
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="5"
                placeholder="Describe your property..."
                required
                className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#FF5A5F]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-[#FF5A5F] py-4 font-semibold text-white transition hover:bg-[#e94d52]"
            >
              Publish property
            </button>

          </form>

        </div>

      </main>
    </div>
  );
}

export default AddProperty;