import { CalendarDays, Users, DollarSign } from "lucide-react";
import { Link, Navigate } from "react-router-dom";

import HostNavbar from "../components/HostNavbar";
import hostData from "../data/Hostdata";
import properties from "./data/properties";

function HostBookings() {
  const isLoggedIn =
    localStorage.getItem("staylyHostLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/host/login" replace />;
  }

  return (
    <div className="min-h-screen bg-[#f7f7f7]">

      <HostNavbar />

      <main className="mx-auto max-w-6xl px-6 py-10 lg:px-12">

        <h1 className="text-3xl font-semibold">
          Your bookings
        </h1>

        <p className="mt-2 text-[#717171]">
          See the guests who have stayed at your properties.
        </p>

        <div className="mt-8 space-y-5">

          {hostData.bookings.map((booking) => {

            const property = properties.find(
              (item) => item.id === booking.propertyId
            );

            return (
              <div
                key={booking.id}
                className="rounded-2xl border border-gray-200 bg-white p-5"
              >

                <div className="flex flex-col gap-5 md:flex-row">

                  {/* Property image */}
                  <Link
                    to={`/property/${booking.propertyId}`}
                    className="shrink-0"
                  >
                    <img
                      src={property?.images?.[0]}
                      alt={property?.title}
                      className="h-40 w-full rounded-xl object-cover md:w-52"
                    />
                  </Link>

                  {/* Information */}
                  <div className="flex-1">

                    <Link
                      to={`/property/${booking.propertyId}`}
                      className="text-lg font-semibold underline"
                    >
                      {property?.title}
                    </Link>

                    <p className="mt-1 text-sm text-[#717171]">
                      {property?.location}
                    </p>

                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">

                      <div className="flex items-center gap-2 text-sm">
                        <Users size={17} />
                        {booking.guest}
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <CalendarDays size={17} />
                        {booking.checkIn} → {booking.checkOut}
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign size={17} />
                        ${booking.amount}
                      </div>

                    </div>

                    <div className="mt-5">

                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                        {booking.status}
                      </span>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </main>

    </div>
  );
}

export default HostBookings;