import { Link, useLocation, useNavigate } from "react-router-dom";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  // البيانات اللي جاية من صفحة الـ Property Details
  const {
    property,
    checkIn,
    checkOut,
    guests,
  } = location.state || {};

  // لو المستخدم دخل checkout من غير ما يختار Property
  if (!property) {
    return (
      <div className="min-h-screen bg-[#F7F7F7]">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              to="/"
              className="text-2xl font-bold text-[#FF5A5F]"
            >
              Stayly
            </Link>

            <Link
              to="/"
              className="text-sm font-medium hover:text-[#FF5A5F]"
            >
              Back to Home
            </Link>
          </div>
        </nav>

        <div className="flex flex-col items-center justify-center min-h-[70vh]">
          <h1 className="text-2xl font-semibold mb-3">
            No booking selected
          </h1>

          <p className="text-[#717171] mb-6">
            Please choose a property first.
          </p>

          <Link
            to="/"
            className="bg-[#FF5A5F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#FC8A8F] transition"
          >
            Browse stays
          </Link>
        </div>
      </div>
    );
  }

  // عدد الليالي
  const startDate = new Date(checkIn);
  const endDate = new Date(checkOut);

  const nights = Math.max(
    1,
    Math.ceil(
      (endDate - startDate) / (1000 * 60 * 60 * 24)
    )
  );

  // الأسعار
  const pricePerNight = property.price || 0;

  const subtotal = pricePerNight * nights;

  const cleaningFee = property.cleaningFee || 50;

  const serviceFee = property.serviceFee || Math.round(subtotal * 0.12);

  const total = subtotal + cleaningFee + serviceFee;

  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#222222]">

      {/* ================= Navbar ================= */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-[#FF5A5F]"
          >
            Stayly
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium hover:text-[#FF5A5F] transition"
            >
              Home
            </Link>

            <Link
              to="/trips"
              className="text-sm font-medium hover:text-[#FF5A5F] transition"
            >
              Trips
            </Link>

            <Link
              to="/wishlist"
              className="text-sm font-medium hover:text-[#FF5A5F] transition"
            >
              Wishlist
            </Link>
          </div>

          {/* Profile */}
          <Link
            to="/profile"
            className="border border-gray-300 rounded-full px-5 py-2 text-sm font-medium hover:border-[#FF5A5F] transition"
          >
            Profile
          </Link>

        </div>
      </nav>


      {/* ================= Main ================= */}
      <main className="max-w-6xl mx-auto px-6 py-10">

        <button
          onClick={() => navigate(-1)}
          className="text-[#717171] hover:text-[#FF5A5F] mb-6"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-semibold mb-8">
          Confirm and pay
        </h1>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


          {/* ================= LEFT ================= */}
          <div className="lg:col-span-2 space-y-6">

            {/* Your Trip */}
            <section className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">

              <h2 className="text-xl font-semibold mb-6">
                Your trip
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Dates */}
                <div>
                  <p className="font-medium">
                    Dates
                  </p>

                  <p className="text-[#717171] mt-1">
                    {checkIn} – {checkOut}
                  </p>
                </div>

                {/* Guests */}
                <div>
                  <p className="font-medium">
                    Guests
                  </p>

                  <p className="text-[#717171] mt-1">
                    {guests} {guests === 1 ? "guest" : "guests"}
                  </p>
                </div>

              </div>

            </section>


            {/* Payment */}
            <section className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">

              <h2 className="text-xl font-semibold mb-6">
                Pay with
              </h2>

              <div className="space-y-5">

                {/* Card Number */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Card number
                  </label>

                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#FF5A5F]"
                  />
                </div>


                {/* Expiry + CVV */}
                <div className="grid grid-cols-2 gap-4">

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Expiry date
                    </label>

                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#FF5A5F]"
                    />
                  </div>


                  <div>
                    <label className="block text-sm font-medium mb-2">
                      CVV
                    </label>

                    <input
                      type="text"
                      placeholder="123"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#FF5A5F]"
                    />
                  </div>

                </div>

              </div>

            </section>


            {/* Cancellation */}
            <section className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">

              <h2 className="text-xl font-semibold mb-3">
                Cancellation policy
              </h2>

              <p className="text-[#717171] leading-6">
                Free cancellation before your check-in date.
                Cancellation fees may apply after that.
              </p>

            </section>

          </div>


          {/* ================= RIGHT ================= */}
          <aside className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm h-fit lg:sticky lg:top-24">

            {/* Property Image */}
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-52 object-cover rounded-xl mb-5"
            />


            {/* Property Info */}
            <div className="pb-5 border-b">

              <h2 className="text-xl font-semibold">
                {property.name}
              </h2>

              <p className="text-[#717171] mt-2">
                {property.location}
              </p>

              {property.rating && (
                <p className="text-sm mt-2">
                  ★ {property.rating}
                </p>
              )}

              {property.description && (
                <p className="text-sm text-[#717171] mt-3 leading-6">
                  {property.description}
                </p>
              )}

            </div>


            {/* Price Details */}
            <div className="py-6 border-b">

              <h2 className="text-xl font-semibold mb-5">
                Price details
              </h2>

              <div className="space-y-4 text-sm">

                <div className="flex justify-between">
                  <span className="text-[#717171]">
                    ${pricePerNight} × {nights} nights
                  </span>

                  <span>
                    ${subtotal}
                  </span>
                </div>


                <div className="flex justify-between">
                  <span className="text-[#717171]">
                    Cleaning fee
                  </span>

                  <span>
                    ${cleaningFee}
                  </span>
                </div>


                <div className="flex justify-between">
                  <span className="text-[#717171]">
                    Service fee
                  </span>

                  <span>
                    ${serviceFee}
                  </span>
                </div>

              </div>

            </div>


            {/* Total */}
            <div className="flex justify-between text-lg font-semibold py-6">

              <span>
                Total
              </span>

              <span>
                ${total}
              </span>

            </div>


            {/* Confirm */}
            <button
              onClick={() =>
                navigate("/confirmation", {
                  state: {
                    property,
                    checkIn,
                    checkOut,
                    guests,
                    nights,
                    total,
                  },
                })
              }
              className="w-full bg-[#FF5A5F] hover:bg-[#FC8A8F] text-white font-semibold py-4 rounded-xl transition"
            >
              Confirm & Pay
            </button>


            <p className="text-center text-xs text-[#717171] mt-4">
              You won't be charged until you confirm your booking.
            </p>

          </aside>

        </div>

      </main>

    </div>
  );
}

export default Checkout;