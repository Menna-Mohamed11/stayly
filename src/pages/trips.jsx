import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser, getTrips } from "../localstorage";

function Trips() {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();
  const allTrips = getTrips();

  const trips = currentUser
    ? allTrips.filter(
        (trip) => trip.userId === currentUser.id
      )
    : [];

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-[#F7F7F7] flex items-center justify-center px-6">
        <div className="bg-white rounded-3xl p-10 text-center border border-gray-200 shadow-sm max-w-md w-full">
          <h1 className="text-3xl font-semibold text-[#222222]">
            Log in to see your trips
          </h1>

          <p className="text-[#717171] mt-3 mb-7">
            Your confirmed bookings will appear here.
          </p>

          <button
            onClick={() => navigate("/login")}
            className="bg-[#FF5A5F] hover:bg-[#FC8A8F] text-white font-semibold px-8 py-3 rounded-xl transition"
          >
            Log in
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#222222]">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/home">
            <img
              src="src/assets/logo.png"
              alt="Stayly"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/home"
              className="text-sm font-medium hover:text-[#FF5A5F]"
            >
              Home
            </Link>

            <Link
              to="/wishlist"
              className="text-sm font-medium hover:text-[#FF5A5F]"
            >
              Wishlist
            </Link>

            <Link
              to="/profile"
              className="border border-gray-300 rounded-full px-5 py-2 text-sm font-medium hover:border-[#FF5A5F]"
            >
              Profile
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-semibold">
          Your trips
        </h1>

        <p className="text-[#717171] mt-2 mb-8">
          Your confirmed stays with Stayly.
        </p>

        {trips.length === 0 ? (
          <div className="bg-white rounded-3xl border border-gray-200 p-10 text-center">
            <h2 className="text-2xl font-semibold">
              No trips yet
            </h2>

            <p className="text-[#717171] mt-3 mb-6">
              When you confirm a booking, it will appear here.
            </p>

            <Link
              to="/home"
              className="inline-block bg-[#FF5A5F] hover:bg-[#FC8A8F] text-white font-semibold px-7 py-3 rounded-xl transition"
            >
              Explore stays
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {trips.map((trip) => (
              <div
                key={trip.id}
                className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <img
                    src={trip.trip.image}
                    alt={trip.trip.name}
                    className="w-full h-64 md:h-full object-cover"
                  />

                  <div className="md:col-span-2 p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-[#FF5A5F] font-semibold">
                          Confirmed
                        </p>

                        <h2 className="text-2xl font-semibold mt-1">
                          {trip.trip.name}
                        </h2>

                        <p className="text-[#717171] mt-2">
                          {trip.trip.location}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-8">
                      <div>
                        <p className="text-sm text-[#717171]">
                          Check-in
                        </p>

                        <p className="font-medium mt-1">
                          {new Date(
                            trip.checkIn
                          ).toLocaleDateString()}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-[#717171]">
                          Check-out
                        </p>

                        <p className="font-medium mt-1">
                          {new Date(
                            trip.checkOut
                          ).toLocaleDateString()}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-[#717171]">
                          Guests
                        </p>

                        <p className="font-medium mt-1">
                          {trip.guests}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-[#717171]">
                          Total
                        </p>

                        <p className="font-medium mt-1">
                          ${trip.total}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 mt-8 pt-5 flex items-center justify-between">
                      <p className="text-sm text-[#717171]">
                        Reservation #{trip.id}
                      </p>

                      <Link
                        to={`/property/${trip.trip.id}`}
                        className="font-semibold hover:text-[#FF5A5F]"
                      >
                        View property
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Trips;