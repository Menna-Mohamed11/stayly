import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
//import CardProperties from "../data/CardProperties";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { Navbar } from "../components/Navbar";
//import Reviews from "./Reviews";
//import Location from "./Location";
import { Footer } from "../components/Footer";

import { CardProperties } from "../data/CardProperties";
import {
  Wifi,
  Wind,
  Tv,
  Zap,
  Car,
  Waves,
  Utensils,
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
  ParkingCircle,
  X,
  Heart
} from "lucide-react";

function PropertyDetails() {
  const { id } = useParams();
  const [showAmenities, setShowAmenities] = useState(false);
  const [guests, setGuests] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedDates, setSelectedDates] = useState({
    from: undefined,
    to: undefined,
  });

  const [openCalendar, setOpenCalendar] = useState(false);

  const amenityIcons = {
    "WiFi": Wifi,
    "Air conditioning": Wind,
    "TV": Tv,
    "Free parking on premises": Car,
    "Hair dryer": Wind,
    "Exterior security cameras on property": Cctv,
    "Swimming pool": Waves,
    "Private pool": Waves,
    "Kitchen": CookingPot,
    "BBQ area": Flame,
    "Mountain view": Mountain,
    "Heating": Wind,
    "Fireplace": Flame,
    "Workspace": BriefcaseBusiness,
    "Washing machine": WashingMachine,
    "Coffee maker": Coffee,
    "Gym": Dumbbell,
    "Essentials": Sparkles,
    "Security": ShieldCheck,
    "Family friendly": Baby,
    "Accessible": Accessibility,
    "Bathroom": Bath,
  };

  const property = CardProperties.find(
    (property) => property.id === Number(id)
  );

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.some(
      (item) => item.id === property?.id
    );

    setIsWishlisted(exists);
  }, [property?.id]);

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.some(
      (item) => item.id === property.id
    );

    let updatedWishlist;

    if (exists) {
      // Remove property
      updatedWishlist = wishlist.filter(
        (item) => item.id !== property.id
      );

      setIsWishlisted(false);
    } else {
      // Add property
      updatedWishlist = [...wishlist, property];

      setIsWishlisted(true);
    }

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
  };

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


  const increaseGuests = () => {
    if (guests < property.guests) {
      setGuests(guests + 1);
    }
  };

  const decreaseGuests = () => {
    if (guests > 1) {
      setGuests(guests - 1);
    }
  };

  const nights =
    selectedDates.from && selectedDates.to
      ? Math.ceil(
        (selectedDates.to - selectedDates.from) /
        (1000 * 60 * 60 * 24)
      )
      : 0;



  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar></Navbar>
      {/* =========================
          PROPERTY HEADER
      ========================== */}
      <section id="photos" className="scroll mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {property.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="font-medium">
              ★ {property.rating}
            </span>

            <span className="text-gray-500">
              ·
            </span>

            <button className="font-medium underline">
              {property.reviews} reviews
            </button>

            <span className="text-gray-500">
              ·
            </span>

            <span className="font-medium underline">
              {property.location}
            </span>
            <button
              onClick={toggleWishlist}
              className="hover:cursor-pointer"
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

      {/* =========================
           PHOTO GALLERY
      ========================== */}
      <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <div className="grid h-450px grid-cols-1 gap-2 overflow-hidden rounded-2xl md:grid-cols-2">

          {/* Main Image */}
          <div className="h-auto overflow-hidden">
            <Link to={`/property/${property.id}/photos`}>
              <img
                src={property.images[0]}
                alt={property.title}

                className="h-102 w-200 object-cover "
              />
            </Link>
          </div>

          {/* Right Images */}
          <div className="hidden grid-cols-2 grid-rows-2 gap-2 md:grid">
            {property.images.slice(1, 5).map((image, index) => (
              <div
                key={index}
                className="overflow-hidden"
              >
                <Link to={`/property/${property.id}/photos`}>
                  <img
                    src={image}
                    alt={`${property.title} ${index + 2}`}
                    className="h-50 w-100 object-cover "
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Show all photos */}
        <div className="relative">
          <Link
            to={`/property/${property.id}/photos`}
            className="absolute bottom-4 right-4 rounded-lg border border-gray-800 bg-white px-4 py-2 text-sm font-semibold shadow-md transition hover:bg-gray-100"
          >
            Show all photos
          </Link>
        </div>
      </section>

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">

          {/* =====================
              LEFT SIDE
          ====================== */}
          <div className="lg:col-span-2">

            {/* Property Information */}
            <div className="border-b border-gray-200 pb-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    Entire place hosted by {property.host}
                  </h2>

                  <p className="mt-2 text-gray-600">
                    {property.guests} guests · {property.bedrooms} bedrooms ·{" "}
                    {property.beds} beds · {property.bathrooms} bathrooms
                  </p>
                </div>

                {/* Host Avatar */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xl font-semibold">
                  {property.host.charAt(0)}
                </div>
              </div>
            </div>

            {/* Host Information */}
            <div className="border-b border-gray-200 py-8">
              <h2 className="text-xl font-semibold">
                Meet your host
              </h2>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-2xl font-semibold">
                  {property.host.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold">
                    {property.host}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Host for {property.hostYears} years
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="border-b border-gray-200 py-8">
              <h2 className="text-xl font-semibold">
                About this place
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <section className="border-b border-gray-200 py-8">

              <h2 className="mb-6 text-2xl font-semibold">
                What this place offers
              </h2>

              {/* First 6 amenities */}
              <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2">

                {property.amenities.slice(0, 6).map((amenity) => {

                  const Icon = amenityIcons[amenity] || Sparkles;

                  return (
                    <div
                      key={amenity}
                      className="flex items-center gap-4"
                    >
                      <Icon
                        size={24}
                        strokeWidth={1.5}
                        className="text-gray-700"
                      />

                      <span className="text-base">
                        {amenity}
                      </span>
                    </div>
                  );
                })}

              </div>


              {/* Show all amenities */}
              {property.amenities.length > 6 && (
                <button
                  onClick={() => setShowAmenities(true)}
                  className="mt-8 rounded-lg border border-gray-900 px-6 py-3 font-medium transition hover:bg-gray-100"
                >
                  Show all {property.amenities.length} amenities
                </button>
              )}

            </section>
            {/* SELECT DATES */}
            <section className="border-b border-gray-200 py-8">
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <CalendarDays size={24} />

                  <h2 className="text-2xl font-semibold">
                    Select your dates
                  </h2>
                </div>

                <p className="mt-2 text-gray-600">
                  Choose your check-in and check-out dates
                </p>
              </div>

              <div className="hidden md:flex justify-center overflow-x-auto rounded-2xl  p-6 ">
                <DayPicker
                  mode="range"
                  selected={selectedDates}
                  onSelect={setSelectedDates}
                  numberOfMonths={2}
                  disabled={{ before: new Date() }}
                  showOutsideDays
                />
              </div>
              <div className="md:hidden flex justify-center overflow-x-auto rounded-2xl  p-6 ">
                <DayPicker
                  mode="range"
                  selected={selectedDates}
                  onSelect={setSelectedDates}
                  numberOfMonths={1}
                  disabled={{ before: new Date() }}
                  showOutsideDays
                />
              </div>



            </section>



          </div>

          {/* =====================
              RIGHT SIDE
              RESERVATION CARD
          ====================== */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-semibold">
                  {nights > 0
                    ? `$${property.price * nights}`
                    : `$${property.price}`}
                </span>

                <span className="text-gray-600">
                  {nights > 0
                    ? `for ${nights} ${nights === 1 ? "night" : "nights"}`
                    : "night"}
                </span>
              </div>

              {/* Date Inputs */}


              <div className="relative mt-6">
                <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-gray-400">

                  {/* CHECK-IN */}
                  <button
                    type="button"
                    onClick={() => setOpenCalendar(true)}
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

                  {/* CHECK-OUT */}
                  <button
                    type="button"
                    onClick={() => setOpenCalendar(true)}
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
                        setSelectedDates(range || {
                          from: undefined,
                          to: undefined,
                        });
                      }}
                      numberOfMonths={1}
                      disabled={{ before: new Date() }}


                    />
                    <button
                      className="flex justify-end mr-5 py-1 px-2 rounded-lg hover:cursor-pointer transition text-sm text-white bg-black"
                      onClick={() => setOpenCalendar(false)}>
                      Close
                    </button>

                  </div>
                )}
              </div>
              {/* Guests */}
              <div className="mt-3 rounded-xl border border-gray-400 p-3">
                <label className="block text-[10px] font-bold uppercase">
                  Guests
                </label>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm">
                    {guests} {guests === 1 ? "guest" : "guests"}
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
                      disabled={guests === property.guests}
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

              {/* Reserve Button */}
              <Link
                 to={`/checkout/${property.id}`}>
              <button className="mt-5 w-full rounded-xl bg-[black] py-3.5 font-semibold text-white transition hover:bg-gray-800">
                Reserve
              </button>
              </Link>

              <p className="mt-4 text-center text-sm text-gray-500">
                You won't be charged yet
              </p>


            </div>
          </div>
        </div>
      </section>
      {showAmenities && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setShowAmenities(false)}
        >

          <div
            className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Header */}
            <div className="mb-8 flex items-center justify-between border-b pb-6">

              <div>
                <h2 className="text-2xl font-semibold">
                  What this place offers
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Everything available during your stay
                </p>
              </div>

              <button
                onClick={() => setShowAmenities(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100"
              >
                <X size={22} />
              </button>

            </div>


            {/* Amenities */}
            <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">

              {property.amenities.map((amenity) => {

                const Icon =
                  amenityIcons[amenity] || Sparkles;

                return (
                  <div
                    key={amenity}
                    className="flex items-center gap-4"
                  >

                    <Icon
                      size={26}
                      strokeWidth={1.5}
                      className="text-gray-700"
                    />

                    <span className="text-base">
                      {amenity}
                    </span>

                  </div>
                );
              })}

            </div>

          </div>

        </div>
      )}
      {/* =========================
    STICKY PROPERTY NAVBAR
========================== */}
      <div className="sticky top-0 z-40 border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Navigation */}
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

          {/* Reserve */}
          <Link
           to={`/checkout/${property.id}`}>
          <button
            className="rounded-full bg-[#E50046] px-8 py-3 font-semibold text-white transition hover:bg-[#c9003e]"
          >
            Reserve
          </button>
          </Link>
        </div>
      </div>

      {/* Reviews */}
      {/*
      <div id="reviews" className="scroll-mt-20">
        <Reviews property={property} />
      </div>

      
      <div id="location" className="scroll-mt-20">
        <Location property={property} />
      </div> */}
      
      <Footer></Footer>

    </div> 
      
  );
}

export default PropertyDetails;