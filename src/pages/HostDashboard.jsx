import {
  CalendarCheck,
  DollarSign,
  Home,
  Users,
  Star,
  MapPin,
} from "lucide-react";

import { Link, Navigate } from "react-router-dom";

import HostNavbar from "../components/HostNavbar";
import hostData from "../data/Hostdata";
import properties from "./data/properties";

function HostDashboard() {
  const isLoggedIn =
    localStorage.getItem("staylyHostLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/host/login" replace />;
  }

  const { profile, statistics, listings, bookings } = hostData;

  const hostProperties = listings
    .map((id) =>
      properties.find((property) => property.id === id)
    )
    .filter(Boolean);

  const totalRevenue = bookings.reduce(
    (total, booking) => total + booking.amount,
    0
  );

  return (
    <div className="min-h-screen bg-[#f7f7f7]">

      <HostNavbar />

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-12">

        {/* Welcome */}
        <div className="mb-10">

          <h1 className="text-3xl font-semibold text-[#222222]">
            Welcome back, {profile.name}
          </h1>

          <p className="mt-2 text-[#717171]">
            Here's what's happening with your hosting.
          </p>

        </div>

        {/* Profile + Stats */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

          {/* Profile */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">

            <div className="flex items-center gap-4">

              <img
                src={profile.avatar}
                alt={profile.name}
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>

                <h2 className="font-semibold text-[#222222]">
                  {profile.name}
                </h2>

                <p className="text-sm text-[#717171]">
                  Host since {profile.joined}
                </p>

              </div>

            </div>

            <div className="mt-5 flex items-center gap-2 text-sm">

              <Star
                size={16}
                fill=''
              />

              <span className="font-semibold">
                {profile.rating}
              </span>

              <span className="text-[#717171]">
                ({profile.reviews} reviews)
              </span>

            </div>

          </div>

          {/* Revenue */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100">
              <DollarSign size={22} />
            </div>

            <p className="mt-5 text-sm text-[#717171]">
              Total revenue
            </p>

            <p className="mt-1 text-3xl font-semibold">
              ${totalRevenue.toLocaleString()}
            </p>

          </div>

          {/* Bookings */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100">
              <CalendarCheck size={22} />
            </div>

            <p className="mt-5 text-sm text-[#717171]">
              Total bookings
            </p>

            <p className="mt-1 text-3xl font-semibold">
              {bookings.length}
            </p>

          </div>

          {/* Properties */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100">
              <Home size={22} />
            </div>

            <p className="mt-5 text-sm text-[#717171]">
              Your properties
            </p>

            <p className="mt-1 text-3xl font-semibold">
              {hostProperties.length}
            </p>

          </div>

        </div>

        {/* Your properties */}
        <section className="mt-12">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-semibold">
                Your properties
              </h2>

              <p className="mt-1 text-sm text-[#717171]">
                Properties currently listed on Stayly.
              </p>

            </div>

            

          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {hostProperties.map((property) => (

              <Link
                key={property.id}
                to={`/property/${property.id}`}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:shadow-lg"
              >

                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="h-60 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />

                <div className="p-5">

                  <div className="flex items-start justify-between gap-3">

                    <div>

                      <h3 className="font-semibold text-[#222222]">
                        {property.title}
                      </h3>

                      <p className="mt-1 flex items-center gap-1 text-sm text-[#717171]">
                        <MapPin size={14} />
                        {property.location}
                      </p>

                    </div>

                    <span className="flex items-center gap-1 text-sm">
                      <Star
                        size={14}
                        fill="currentColor"
                      />
                      {property.rating}
                    </span>

                  </div>

                  <p className="mt-4 font-semibold">
                    ${property.price}
                    <span className="font-normal text-[#717171]">
                      {" "}night
                    </span>
                  </p>

                  <p className="mt-2 text-sm text-[#717171]">
                    {property.guests} guests · {property.bedrooms} bedrooms ·{" "}
                    {property.bathrooms} bathrooms
                  </p>

                  <p className="mt-4 text-sm font-semibold underline">
                    View property
                  </p>

                </div>

              </Link>

            ))}

          </div>

        </section>

        {/* Recent bookings */}
        <section className="mt-12">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-2xl font-semibold">
              Recent bookings
            </h2>

            <Link
              to="/host/bookings"
              className="text-sm font-semibold underline"
            >
              View all
            </Link>

          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">

            {bookings.map((booking) => {

              const property = properties.find(
                (item) => item.id === booking.propertyId
              );

              return (
                <div
                  key={booking.id}
                  className="flex flex-col gap-4 border-b border-gray-200 p-5 last:border-b-0 md:flex-row md:items-center md:justify-between"
                >

                  <div>

                    <h3 className="font-semibold">
                      {booking.guest}
                    </h3>

                    <Link
                      to={`/property/${booking.propertyId}`}
                      className="mt-1 block text-sm text-[#717171] underline"
                    >
                      {property?.title}
                    </Link>

                    <p className="mt-1 text-sm text-[#717171]">
                      {booking.checkIn} → {booking.checkOut}
                    </p>

                  </div>

                  <div className="flex items-center gap-5">

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
                      {booking.status}
                    </span>

                    <span className="font-semibold">
                      ${booking.amount}
                    </span>

                  </div>

                </div>
              );
            })}

          </div>

        </section>

      </main>

    </div>
  );
}

export default HostDashboard;