
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

import { Navbar } from "../../components/Navbarp";
import Reviews from "./Reviews";
import Location from "./Location";
import { Footer } from "../../components/Footer";

import { getPropertyById } from "../../api/property";

import {
  Wifi,
  Wind,
  Tv,
  Car,
  Waves,
  CookingPot,
  Flame,
  Mountain,
  Dumbbell,
  WashingMachine,
  BriefcaseBusiness,
  Coffee,
  CalendarDays,
  Cctv,
  ShieldCheck,
  Sparkles,
  Baby,
  Accessibility,
  Bath,
  X,
  Heart,
} from "lucide-react";

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // ============================================================
  // PROPERTY STATE
  // ============================================================

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ============================================================
  // UI STATE
  // ============================================================

  const [showAmenities, setShowAmenities] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);

  // ============================================================
  // BOOKING STATE
  // ============================================================

  const [guests, setGuests] = useState(1);

  const [selectedDates, setSelectedDates] = useState({
    from: undefined,
    to: undefined,
  });

  // ============================================================
  // NAVBAR STATE
  // ============================================================

  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  // ============================================================
  // WISHLIST STATE
  // ============================================================

  const [isWishlisted, setIsWishlisted] = useState(false);

  // ============================================================
  // AMENITY ICONS
  // ============================================================

  const amenityIcons = {
    WiFi: Wifi,
    "Air conditioning": Wind,
    TV: Tv,
    "Free parking on premises": Car,
    "Hair dryer": Wind,
    "Exterior security cameras on property": Cctv,
    "Swimming pool": Waves,
    "Private pool": Waves,
    Kitchen: CookingPot,
    "BBQ area": Flame,
    "Mountain view": Mountain,
    Heating: Wind,
    Fireplace: Flame,
    Workspace: BriefcaseBusiness,
    "Washing machine": WashingMachine,
    "Coffee maker": Coffee,
    Gym: Dumbbell,
    Essentials: Sparkles,
    Security: ShieldCheck,
    "Family friendly": Baby,
    Accessible: Accessibility,
    Bathroom: Bath,
  };

  // ============================================================
  // GET PROPERTY FROM BACKEND
  // ============================================================

  useEffect(() => {
    async function fetchProperty() {
      try {
        setLoading(true);
        setError("");

        const data = await getPropertyById(id);

        console.log("Property received from backend:", data);

        setProperty(data);

        /*
         * Start the guest selector with one guest.
         * The backend property.guests represents the maximum.
         */
        setGuests(1);
      } catch (err) {
        console.error("Failed to load property:", err);

        setError(
          err?.response?.data?.message ||
          err?.message ||
          "Failed to load property."
        );
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchProperty();
    }
  }, [id]);

  // ============================================================
  // CHECK WISHLIST
  // ============================================================

  useEffect(() => {
    if (!property?.propertyId) {
      return;
    }

    try {
      const wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

      const exists = wishlist.some(
        (item) =>
          item.propertyId === property.propertyId
      );

      setIsWishlisted(exists);
    } catch (err) {
      console.error("Failed to read wishlist:", err);
      setIsWishlisted(false);
    }
  }, [property?.propertyId]);

  // ============================================================
  // TOGGLE WISHLIST
  // ============================================================

  const toggleWishlist = () => {
    if (!property?.propertyId) {
      return;
    }

    try {
      const wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

      const exists = wishlist.some(
        (item) =>
          item.propertyId === property.propertyId
      );

      let updatedWishlist;

      if (exists) {
        // Remove property
        updatedWishlist = wishlist.filter(
          (item) =>
            item.propertyId !== property.propertyId
        );

        setIsWishlisted(false);
      } else {
        // Add property
        updatedWishlist = [
          ...wishlist,
          property,
        ];

        setIsWishlisted(true);
      }

      localStorage.setItem(
        "wishlist",
        JSON.stringify(updatedWishlist)
      );
    } catch (err) {
      console.error("Failed to update wishlist:", err);
    }
  };

  // ============================================================
  // GUEST CONTROLS
  // ============================================================

  const increaseGuests = () => {
    if (!property) {
      return;
    }

    if (guests < property.guests) {
      setGuests((previous) => previous + 1);
    }
  };

  const decreaseGuests = () => {
    if (guests > 1) {
      setGuests((previous) => previous - 1);
    }
  };

  // ============================================================
  // CALCULATE NUMBER OF NIGHTS
  // ============================================================

  const nights =
    selectedDates.from && selectedDates.to
      ? Math.ceil(
        (selectedDates.to - selectedDates.from) /
        (1000 * 60 * 60 * 24)
      )
      : 0;

  // ============================================================
  // CALCULATE TOTAL PRICE
  // ============================================================

  const totalPrice =
    property && nights > 0
      ? Number(property.price) * nights
      : property
        ? Number(property.price)
        : 0;

  // ============================================================
  // GO TO CHECKOUT
  // ============================================================

  const goToCheckout = () => {
    if (!property) {
      return;
    }

    if (!selectedDates.from || !selectedDates.to) {
      alert(
        "Please select check-in and check-out dates"
      );
      return;
    }

    if (!guests || guests < 1) {
      alert("Please select at least one guest");
      return;
    }

    /*
     * Send the selected booking information
     * to the checkout page.
     *
     * The checkout page can then use this data
     * to create the actual booking through
     * the backend.
     */

    navigate(
      `/checkout/${property.propertyId}`,
      {
        state: {
          property,

          checkIn:
            selectedDates.from.toISOString(),

          checkOut:
            selectedDates.to.toISOString(),

          guests,

          nights,

          totalPrice,
        },
      }
    );
  };

  // ============================================================
  // LOADING
  // ============================================================

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-medium">
            Loading property...
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Please wait while we get the property
            information.
          </p>
        </div>
      </div>
    );
  }

  // ============================================================
  // ERROR
  // ============================================================

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold mb-4">
          Something went wrong
        </h1>

        <p className="text-red-500 mb-6 text-center">
          {error}
        </p>

        <Link
          to="/Home"
          className="bg-[#FF5A5F] text-white px-6 py-3 rounded-lg"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  // ============================================================
  // PROPERTY NOT FOUND
  // ============================================================

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">
          Property Not Found
        </h1>

        <p className="text-gray-600 mb-6">
          Sorry, we couldn't find this property.
        </p>

        <Link
          to="/Home"
          className="bg-[#FF5A5F] text-white px-6 py-3 rounded-lg"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  // ============================================================
  // SAFE BACKEND DATA
  // ============================================================

  const images = Array.isArray(property.images)
    ? property.images
    : [];

  const amenities = Array.isArray(
    property.amenities
  )
    ? property.amenities
    : [];

  const hostFirstName =
    property.host?.user?.firstName ||
    "Host";

  const hostLastName =
    property.host?.user?.lastName ||
    "";

  const hostName =
    `${hostFirstName} ${hostLastName}`.trim();

  const hostInitial =
    hostFirstName?.charAt(0)?.toUpperCase() ||
    "H";

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* ======================================================
          NAVBAR
      ======================================================= */}

      <Navbar
        destination={destination}
        setDestination={setDestination}
        date={date}
        setDate={setDate}
        guests={guests}
        setGuests={setGuests}
      />

      {/* ======================================================
          PROPERTY HEADER
      ======================================================= */}

      <section
        id="photos"
        className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col gap-4">

          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {property.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm">

            <span className="font-medium">
              ★ {property.rating ?? "New"}
            </span>

            <span className="text-gray-500">
              ·
            </span>

            <button className="font-medium underline">
              {property.reviews ?? 0} reviews
            </button>

            <span className="text-gray-500">
              ·
            </span>

            <span className="font-medium underline">
              {property.location?.city ||
                property.location?.address ||
                "Location unavailable"}
            </span>

            {/* WISHLIST */}

            <button
              onClick={toggleWishlist}
              className="ml-auto hover:cursor-pointer"
              aria-label={
                isWishlisted
                  ? "Remove from wishlist"
                  : "Add to wishlist"
              }
            >
              <Heart
                className={
                  isWishlisted
                    ? "fill-red-500 text-red-500"
                    : "text-gray-800"
                }
              />
            </button>

          </div>
        </div>
      </section>

      {/* ======================================================
          PROPERTY IMAGES
      ======================================================= */}

      <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">

        <div className="grid min-h-450px grid-cols-1 gap-2 overflow-hidden rounded-2xl md:grid-cols-2">

          {/* MAIN IMAGE */}

          <div className="h-450px overflow-hidden">

            <Link
              to={`/property/${property.propertyId}/photos`}
            >
              {images.length > 0 ? (
                <img
                  src={images[0]?.imageUrl}
                  alt={property.title}
                  className="h-full w-full object-cover transition hover:scale-[1.01]"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-200">
                  <span className="text-gray-500">
                    No image available
                  </span>
                </div>
              )}
            </Link>

          </div>

          {/* OTHER IMAGES */}

          <div className="hidden grid-cols-2 grid-rows-2 gap-2 md:grid">

            {images
              .slice(1, 5)
              .map((image, index) => (
                <div
                  key={
                    image.imgId ||
                    image.imageId ||
                    index
                  }
                  className="overflow-hidden"
                >
                  <Link
                    to={`/property/${property.propertyId}/photos`}
                  >
                    <img
                      src={image.imageUrl}
                      alt={`${property.title} ${index + 2
                        }`}
                      className="h-full w-full object-cover transition hover:scale-[1.02]"
                    />
                  </Link>
                </div>
              ))}

          </div>
        </div>

        {/* SHOW ALL PHOTOS */}

        <div className="relative">

          <Link
            to={`/property/${property.propertyId}/photos`}
            className="absolute bottom-4 right-4 rounded-lg border border-gray-800 bg-white px-4 py-2 text-sm font-semibold shadow-md transition hover:bg-gray-100"
          >
            Show all photos
          </Link>

        </div>

      </section>

      {/* ======================================================
          MAIN CONTENT
      ======================================================= */}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">

          {/* ==================================================
              LEFT SIDE
          =================================================== */}

          <div className="lg:col-span-2">

            {/* HOST SUMMARY */}

            <div className="border-b border-gray-200 pb-8">

              <div className="flex items-start justify-between gap-4">

                <div>

                  <h2 className="text-xl font-semibold sm:text-2xl">
                    Entire place hosted by{" "}
                    {hostName}
                  </h2>

                  <p className="mt-2 text-gray-600">

                    {property.guests ?? 0} guests
                    {" · "}
                    {property.bedrooms ?? 0} bedrooms
                    {" · "}
                    {property.beds ?? 0} beds
                    {" · "}
                    {property.bathrooms ?? 0} bathrooms

                  </p>

                </div>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xl font-semibold">

                  {hostInitial}

                </div>

              </div>

            </div>

            {/* MEET HOST */}

            <div className="border-b border-gray-200 py-8">

              <h2 className="text-xl font-semibold">
                Meet your host
              </h2>

              <div className="mt-5 flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-2xl font-semibold">
                  {hostInitial}
                </div>

                <div>

                  <h3 className="font-semibold">
                    {hostName}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Host for{" "}
                    {property.hostYears ?? 0} years
                  </p>

                </div>

              </div>

            </div>

            {/* ABOUT */}

            <div className="border-b border-gray-200 py-8">

              <h2 className="text-xl font-semibold">
                About this place
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                {property.description ||
                  "No description available for this property."}
              </p>

            </div>

            {/* ==================================================
                AMENITIES
            =================================================== */}

            <section className="border-b border-gray-200 py-8">

              <h2 className="mb-6 text-2xl font-semibold">
                What this place offers
              </h2>

              {amenities.length > 0 ? (
                <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2">

                  {amenities
                    .slice(0, 6)
                    .map((amenity, index) => {

                      const amenityName =
                        typeof amenity === "string"
                          ? amenity
                          : amenity.name ||
                          amenity.amenityName ||
                          "Amenity";

                      const Icon =
                        amenityIcons[
                        amenityName
                        ] || Sparkles;

                      return (
                        <div
                          key={
                            amenity.id ||
                            amenity.amenityId ||
                            index
                          }
                          className="flex items-center gap-4"
                        >

                          <Icon
                            size={24}
                            strokeWidth={1.5}
                            className="text-gray-700"
                          />

                          <span className="text-base">
                            {amenityName}
                          </span>

                        </div>
                      );
                    })}

                </div>
              ) : (
                <p className="text-gray-500">
                  No amenities available.
                </p>
              )}

              {amenities.length > 6 && (
                <button
                  onClick={() =>
                    setShowAmenities(true)
                  }
                  className="mt-8 rounded-lg border border-gray-900 px-6 py-3 font-medium transition hover:bg-gray-100"
                >
                  Show all {amenities.length} amenities
                </button>
              )}

            </section>

            {/* ==================================================
                DATE SELECTION
            =================================================== */}

            <section className="border-b border-gray-200 py-8">

              <div className="mb-6">

                <div className="flex items-center gap-3">

                  <CalendarDays size={24} />

                  <h2 className="text-2xl font-semibold">
                    Select your dates
                  </h2>

                </div>

                <p className="mt-2 text-gray-600">
                  Choose your check-in and
                  check-out dates
                </p>

              </div>

              {/* DESKTOP */}

              <div className="hidden justify-center overflow-x-auto rounded-2xl p-6 md:flex">

                <DayPicker
                  mode="range"
                  selected={selectedDates}
                  onSelect={(range) => {
                    setSelectedDates(
                      range || {
                        from: undefined,
                        to: undefined,
                      }
                    );
                  }}
                  numberOfMonths={2}
                  disabled={{
                    before: new Date(),
                  }}
                />

              </div>

              {/* MOBILE */}

              <div className="flex justify-center overflow-x-auto rounded-2xl p-6 md:hidden">

                <DayPicker
                  mode="range"
                  selected={selectedDates}
                  onSelect={(range) => {
                    setSelectedDates(
                      range || {
                        from: undefined,
                        to: undefined,
                      }
                    );
                  }}
                  numberOfMonths={1}
                  disabled={{
                    before: new Date(),
                  }}
                  showOutsideDays
                />

              </div>

            </section>

          </div>

          {/* ==================================================
              RIGHT SIDE / RESERVATION CARD
          =================================================== */}

          <div className="lg:col-span-1">

            <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">

              {/* PRICE */}

              <div className="flex items-baseline gap-2">

                <span className="text-2xl font-semibold">
                  $
                  {totalPrice}
                </span>

                <span className="text-gray-600">

                  {nights > 0
                    ? `for ${nights} ${nights === 1
                      ? "night"
                      : "nights"
                    }`
                    : "night"}

                </span>

              </div>

              {/* DATES */}

              <div className="relative mt-6">

                <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-gray-400">

                  {/* CHECK IN */}

                  <button
                    type="button"
                    onClick={() =>
                      setOpenCalendar(true)
                    }
                    className="border-r border-gray-400 p-3 text-left hover:bg-gray-50"
                  >

                    <p className="text-[10px] font-bold uppercase">
                      Check-in
                    </p>

                    <p className="mt-1 text-sm">
                      {selectedDates.from
                        ? selectedDates.from.toLocaleDateString()
                        : "Add date"}
                    </p>

                  </button>

                  {/* CHECK OUT */}

                  <button
                    type="button"
                    onClick={() =>
                      setOpenCalendar(true)
                    }
                    className="p-3 text-left hover:bg-gray-50"
                  >

                    <p className="text-[10px] font-bold uppercase">
                      Check-out
                    </p>

                    <p className="mt-1 text-sm">
                      {selectedDates.to
                        ? selectedDates.to.toLocaleDateString()
                        : "Add date"}
                    </p>

                  </button>

                </div>

                {/* CALENDAR POPUP */}

                {openCalendar && (
                  <div className="absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2 rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl">

                    <DayPicker
                      mode="range"
                      selected={selectedDates}
                      onSelect={(range) => {
                        setSelectedDates(
                          range || {
                            from: undefined,
                            to: undefined,
                          }
                        );
                      }}
                      numberOfMonths={1}
                      disabled={{
                        before: new Date(),
                      }}
                    />

                    <button
                      className="mr-5 rounded-lg bg-black px-3 py-1 text-sm text-white transition hover:bg-gray-800"
                      onClick={() =>
                        setOpenCalendar(false)
                      }
                    >
                      Close
                    </button>

                  </div>
                )}

              </div>

              {/* GUESTS */}

              <div className="mt-3 rounded-xl border border-gray-400 p-3">

                <label className="block text-[10px] font-bold uppercase">
                  Guests
                </label>

                <div className="mt-2 flex items-center justify-between">

                  <span className="text-sm">
                    {guests}{" "}
                    {guests === 1
                      ? "guest"
                      : "guests"}
                  </span>

                  <div className="flex items-center gap-3">

                    <button
                      onClick={decreaseGuests}
                      disabled={guests === 1}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 text-lg transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      −
                    </button>

                    <span className="w-4 text-center">
                      {guests}
                    </span>

                    <button
                      onClick={increaseGuests}
                      disabled={
                        guests >= property.guests
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 text-lg transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      +
                    </button>

                  </div>

                </div>

                <p className="mt-1 text-xs text-gray-500">
                  Maximum {property.guests} guests
                </p>

              </div>

              {/* RESERVE */}

              <button
                onClick={goToCheckout}
                className="mt-5 w-full rounded-xl bg-black py-3.5 font-semibold text-white transition hover:bg-gray-800"
              >
                Reserve
              </button>

              <p className="mt-4 text-center text-sm text-gray-500">
                You won't be charged yet
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          ALL AMENITIES MODAL
      ======================================================= */}

      {showAmenities && (

        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 px-4"
          onClick={() =>
            setShowAmenities(false)
          }
        >

          <div
            className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="mb-8 flex items-center justify-between border-b pb-6">

              <div>

                <h2 className="text-2xl font-semibold">
                  What this place offers
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Everything available during
                  your stay
                </p>

              </div>

              <button
                onClick={() =>
                  setShowAmenities(false)
                }
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100"
              >
                <X size={22} />
              </button>

            </div>

            <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">

              {amenities.map(
                (amenity, index) => {

                  const amenityName =
                    typeof amenity === "string"
                      ? amenity
                      : amenity.name ||
                      amenity.amenityName ||
                      "Amenity";

                  const Icon =
                    amenityIcons[
                    amenityName
                    ] || Sparkles;

                  return (
                    <div
                      key={
                        amenity.id ||
                        amenity.amenityId ||
                        index
                      }
                      className="flex items-center gap-4"
                    >

                      <Icon
                        size={26}
                        strokeWidth={1.5}
                        className="text-gray-700"
                      />

                      <span className="text-base">
                        {amenityName}
                      </span>

                    </div>
                  );
                }
              )}

            </div>

          </div>

        </div>

      )}

      {/* ======================================================
          STICKY NAVIGATION
      ======================================================= */}

      <div className="sticky top-0 z-40 border-b border-gray-200 bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          <div className="flex h-16 items-center gap-8">

            <a
              href="#photos"
              className="flex h-full items-center border-b-2 border-transparent text-sm font-medium transition hover:border-gray-900"
            >
              Photos
            </a>

            <a
              href="#reviews"
              className="flex h-full items-center border-b-2 border-transparent text-sm font-medium transition hover:border-gray-900"
            >
              Reviews
            </a>

            <a
              href="#location"
              className="flex h-full items-center border-b-2 border-transparent text-sm font-medium transition hover:border-gray-900"
            >
              Location
            </a>

          </div>

          <button
            onClick={goToCheckout}
            className="rounded-full bg-[#E50046] px-8 py-3 font-semibold text-white transition hover:bg-[#c9003e]"
          >
            Reserve
          </button>

        </div>

      </div>

      {/* ======================================================
          REVIEWS
      ======================================================= */}

      <div
        id="reviews"
        className="scroll-mt-20"
      >
        <Reviews property={property} />
      </div>

      {/* ======================================================
          LOCATION
      ======================================================= */}

      <div
        id="location"
        className="scroll-mt-20"
      >
        <Location property={property} />
      </div>

      {/* ======================================================
          FOOTER
      ======================================================= */}

      <Footer />

    </div>
  );
}

export default PropertyDetails;



