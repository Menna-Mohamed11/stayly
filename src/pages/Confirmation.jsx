import { Link, useLocation } from "react-router-dom";

function Confirmation() {
  const location = useLocation();

  const { booking } = location.state || {};

  if (!booking) {
    return (
      <div className="min-h-screen bg-[#F7F7F7] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">
            No booking found
          </h1>

          <p className="text-[#717171] mt-2 mb-6">
            Please complete a booking first.
          </p>

          <Link
            to="/checkout"
            className="inline-block bg-[#FF5A5F] text-white px-6 py-3 rounded-xl"
          >
            Go to Checkout
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#222222]">

      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link
            to="/"
            className="text-2xl font-bold text-[#FF5A5F]"
          >
            Stayly
          </Link>

          <div className="flex items-center gap-6 text-sm">

            <Link
              to="/"
              className="hover:text-[#FF5A5F]"
            >
              Home
            </Link>

            <Link
              to="/trips"
              className="hover:text-[#FF5A5F]"
            >
              Trips
            </Link>

            <Link
              to="/wishlist"
              className="hover:text-[#FF5A5F]"
            >
              Wishlist
            </Link>

            <Link
              to="/profile"
              className="border border-gray-300 rounded-full px-5 py-2 hover:border-[#FF5A5F]"
            >
              Profile
            </Link>

          </div>

        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">

        <div className="text-center">

          <div className="mx-auto w-20 h-20 rounded-full bg-[#FF5A5F] flex items-center justify-center text-white text-4xl">
            ✓
          </div>

          <h1 className="text-3xl font-semibold mt-6">
            Booking confirmed!
          </h1>

          <p className="text-[#717171] mt-3">
            Your trip has been successfully booked.
          </p>

        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm mt-10 overflow-hidden">

          <img
            src={booking.trip.image}
            alt={booking.trip.name}
            className="w-full h-64 object-cover"
          />

          <div className="p-6">

            <h2 className="text-2xl font-semibold">
              {booking.trip.name}
            </h2>

            <p className="text-[#717171] mt-2">
              {booking.trip.location}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">

              <div>
                <p className="text-sm text-[#717171]">
                  Check-in
                </p>

                <p className="font-medium mt-1">
                  {booking.checkIn}
                </p>
              </div>

              <div>
                <p className="text-sm text-[#717171]">
                  Check-out
                </p>

                <p className="font-medium mt-1">
                  {booking.checkOut}
                </p>
              </div>

              <div>
                <p className="text-sm text-[#717171]">
                  Guests
                </p>

                <p className="font-medium mt-1">
                  {booking.guests} guests
                </p>
              </div>

              <div>
                <p className="text-sm text-[#717171]">
                  Total
                </p>

                <p className="font-medium mt-1">
                  ${booking.total}
                </p>
              </div>

            </div>

            <div className="border-t mt-8 pt-6">

              <p className="text-sm text-[#717171]">
                Reservation number
              </p>

              <p className="font-semibold mt-1">
                STY-{Date.now()}
              </p>

            </div>

          </div>

        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">

          <Link
            to="/trips"
            className="flex-1 text-center bg-[#FF5A5F] hover:bg-[#FC8A8F] text-white font-semibold py-4 rounded-xl transition"
          >
            View my trips
          </Link>

          <Link
            to="/"
            className="flex-1 text-center bg-white border border-gray-300 hover:border-[#FF5A5F] font-semibold py-4 rounded-xl transition"
          >
            Back to home
          </Link>

        </div>

      </main>

    </div>
  );
}

export default Confirmation;