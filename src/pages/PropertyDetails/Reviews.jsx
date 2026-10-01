
import {
  Sparkles,
  Heart,
  MessageCircle,
  MapPin,
  Tag,
  Map,
  ShieldCheck,
  ThumbsUp,
  Volume2,
  Sofa,
  X,
  ShowerHead,
  KeyRound,
  Bath,
  LayoutGrid,
  DoorOpen,
} from "lucide-react";

import { useState } from "react";

function Reviews({ property }) {
  const [reviewswork, setReviewsWork] = useState(false);

  // =============================
  // BACKEND DATA
  // =============================

  const rating = Number(property?.rating ?? 4.8);

  const reviewCount = Number(
    property?.reviewsCount ??
      property?.reviewCount ??
      (Array.isArray(property?.reviews)
        ? property.reviews.length
        : property?.reviews ?? 24)
  );

  // =============================
  // RATING CATEGORIES
  // =============================
  // These are kept as fallback values for now.
  // If your backend later returns these values,
  // replace them with the corresponding fields.

  const cleanliness = Number(property?.cleanlinessRating ?? 4.8);
  const accuracy = Number(property?.accuracyRating ?? 4.9);
  const checkIn = Number(property?.checkInRating ?? 4.9);
  const communication = Number(property?.communicationRating ?? 5.0);
  const locationRating = Number(property?.locationRating ?? 4.9);
  const value = Number(property?.valueRating ?? 4.9);

  // =============================
  // REVIEW MENTION COUNTS
  // =============================
  // Still using fallback values until these
  // are available from the backend.

  const reviewMentions = {
    cleanliness: property?.cleanlinessMentions ?? 30,
    hospitality: property?.hospitalityMentions ?? 25,
    comfort: property?.comfortMentions ?? 16,
    quiet: property?.quietMentions ?? 12,
    indoorSpaces: property?.indoorSpacesMentions ?? 12,
    location: property?.locationMentions ?? 17,
    accuracy: property?.accuracyMentions ?? 7,
    checkIn: property?.checkInMentions ?? 3,
    amenities: property?.amenitiesMentions ?? 2,
    bathroom: property?.bathroomMentions ?? 1,
  };

  // =============================
  // ACTUAL REVIEWS
  // =============================

  const backendReviews = Array.isArray(property?.reviews)
    ? property.reviews
    : [];

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================================================= */}
        {/* TOP RATING / GUEST FAVORITE */}
        {/* ================================================= */}

        <div className="flex flex-col items-center justify-center text-center">

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="text-8xl font-semibold text-[#222222]">
              {rating.toFixed(1)}
            </span>
          </div>

          {/* Guest Favorite */}
          <div className="mt-5 flex items-center gap-2">
            <Heart
              size={20}
              className="fill-[#FF5A5F] text-[#FF5A5F]"
            />

            <span className="text-xl font-semibold text-[#222222]">
              Guest favourite
            </span>
          </div>

          <p className="mt-2 max-w-sm text-xl leading-6 text-[#717171]">
            This home is a guest favorite based on ratings,
            reviews, and reliability.
          </p>

          <p
            className="mt-2 cursor-pointer text-sm font-medium text-gray-500 underline"
            onClick={() => setReviewsWork(true)}
          >
            How reviews work
          </p>
        </div>

        {/* ================================================= */}
        {/* RATINGS */}
        {/* ================================================= */}

        <section className="hidden items-center justify-center border-b border-gray-200 pb-5 pt-15 md:flex">

          <div className="flex items-stretch overflow-x-auto">

            {/* Overall rating */}
            <div className="min-w-210px pr-8">
              <h3 className="text-base font-semibold text-[#222222]">
                Overall rating
              </h3>

              <div className="mt-3 space-y-0.5">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div
                    key={star}
                    className="flex items-center gap-2"
                  >
                    <span className="w-3 text-xs text-[#717171]">
                      {star}
                    </span>

                    <div className="h-1.5 w-36 overflow-hidden rounded-full bg-gray-200">
                      <div
                        className="h-full rounded-full bg-[#222222]"
                        style={{
                          width:
                            star === 5
                              ? "93%"
                              : star === 4
                                ? "2%"
                                : star === 3
                                  ? "4%"
                                  : star === 2
                                    ? "1%"
                                    : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cleanliness */}
            <div className="border-l border-gray-200 px-9">
              <h3 className="text-base font-semibold text-[#222222]">
                Cleanliness
              </h3>

              <p className="mt-1 text-base">
                {cleanliness.toFixed(1)}
              </p>

              <Sparkles
                size={20}
                strokeWidth={1.8}
                className="mt-7 text-[#222222]"
              />
            </div>

            {/* Accuracy */}
            <div className="border-l border-gray-200 px-9">
              <h3 className="text-base font-semibold text-[#222222]">
                Accuracy
              </h3>

              <p className="mt-1 text-base">
                {accuracy.toFixed(1)}
              </p>

              <ShieldCheck
                size={20}
                strokeWidth={1.8}
                className="mt-7 text-[#222222]"
              />
            </div>

            {/* Check-in */}
            <div className="border-l border-gray-200 px-9">
              <h3 className="text-base font-semibold text-[#222222]">
                Check-in
              </h3>

              <p className="mt-1 text-base">
                {checkIn.toFixed(1)}
              </p>

              <KeyRound
                size={20}
                strokeWidth={1.8}
                className="mt-7 text-[#222222]"
              />
            </div>

            {/* Communication */}
            <div className="border-l border-gray-200 px-9">
              <h3 className="text-base font-semibold text-[#222222]">
                Communication
              </h3>

              <p className="mt-1 text-base">
                {communication.toFixed(1)}
              </p>

              <MessageCircle
                size={20}
                strokeWidth={1.8}
                className="mt-7 text-[#222222]"
              />
            </div>

            {/* Location */}
            <div className="border-l border-gray-200 px-9">
              <h3 className="text-base font-semibold text-[#222222]">
                Location
              </h3>

              <p className="mt-1 text-base">
                {locationRating.toFixed(1)}
              </p>

              <Map
                size={20}
                strokeWidth={1.8}
                className="mt-7 text-[#222222]"
              />
            </div>

            {/* Value */}
            <div className="border-l border-gray-200 px-9">
              <h3 className="text-base font-semibold text-[#222222]">
                Value
              </h3>

              <p className="mt-1 text-base">
                {value.toFixed(1)}
              </p>

              <Tag
                size={20}
                strokeWidth={1.8}
                className="mt-7 text-[#222222]"
              />
            </div>

          </div>
        </section>

        {/* ================================================= */}
        {/* GUEST REVIEWS MENTION */}
        {/* ================================================= */}

        <section className="py-8">

          <h2 className="text-2xl font-semibold text-[#222222]">
            Guest reviews mention
          </h2>

          <div className="mt-6 flex gap-3 overflow-x-auto pb-2">

            {/* Cleanliness */}
            <div className="flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl border border-gray-200 px-3 py-4 shadow-lg hover:border-[#222222]">
              <ShowerHead
                size={18}
                strokeWidth={1.8}
                className="text-[#FF5A5F]"
              />

              <span className="font-semibold text-[#222222]">
                Cleanliness
              </span>

              <span className="text-[#717171]">
                {reviewMentions.cleanliness}
              </span>
            </div>

            {/* Hospitality */}
            <div className="flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl border border-gray-200 px-3 py-4 shadow-lg hover:border-[#222222]">
              <Heart
                size={18}
                strokeWidth={1.8}
                className="text-[#FF5A5F]"
              />

              <span className="font-semibold text-[#222222]">
                Hospitality
              </span>

              <span className="text-[#717171]">
                {reviewMentions.hospitality}
              </span>
            </div>

            {/* Comfort */}
            <div className="flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl border border-gray-200 px-3 py-4 shadow-lg hover:border-[#222222]">
              <Sofa
                size={18}
                strokeWidth={1.8}
                className="text-[#FF5A5F]"
              />

              <span className="font-semibold text-[#222222]">
                Comfort
              </span>

              <span className="text-[#717171]">
                {reviewMentions.comfort}
              </span>
            </div>

            {/* Quiet */}
            <div className="flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl border border-gray-200 px-3 py-4 shadow-lg hover:border-[#222222]">
              <Volume2
                size={18}
                strokeWidth={1.8}
                className="text-[#FF5A5F]"
              />

              <span className="font-semibold text-[#222222]">
                Quiet
              </span>

              <span className="text-[#717171]">
                {reviewMentions.quiet}
              </span>
            </div>

            {/* Indoor spaces */}
            <div className="flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl border border-gray-200 px-3 py-4 shadow-lg hover:border-[#222222]">
              <Sofa
                size={18}
                strokeWidth={1.8}
                className="text-[#FF5A5F]"
              />

              <span className="font-semibold text-[#222222]">
                Indoor spaces
              </span>

              <span className="text-[#717171]">
                {reviewMentions.indoorSpaces}
              </span>
            </div>

            {/* Location */}
            <div className="flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl border border-gray-200 px-3 py-4 shadow-lg hover:border-[#222222]">
              <MapPin
                size={18}
                strokeWidth={1.8}
                className="text-[#FF5A5F]"
              />

              <span className="font-semibold text-[#222222]">
                Location
              </span>

              <span className="text-[#717171]">
                {reviewMentions.location}
              </span>
            </div>

            {/* Accuracy */}
            <div className="flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl border border-gray-200 px-3 py-4 shadow-lg hover:border-[#222222]">
              <ThumbsUp
                size={18}
                strokeWidth={1.8}
                className="text-[#FF5A5F]"
              />

              <span className="font-semibold text-[#222222]">
                Accuracy
              </span>

              <span className="text-[#717171]">
                {reviewMentions.accuracy}
              </span>
            </div>

            {/* Check-in */}
            <div className="flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl border border-gray-200 px-3 py-4 shadow-lg hover:border-[#222222]">
              <DoorOpen
                size={18}
                strokeWidth={1.8}
                className="text-[#FF5A5F]"
              />

              <span className="font-semibold text-[#222222]">
                Check-in
              </span>

              <span className="text-[#717171]">
                {reviewMentions.checkIn}
              </span>
            </div>

            {/* Amenities */}
            <div className="flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl border border-gray-200 px-3 py-4 shadow-lg hover:border-[#222222]">
              <LayoutGrid
                size={18}
                strokeWidth={1.8}
                className="text-[#FF5A5F]"
              />

              <span className="font-semibold text-[#222222]">
                Amenities
              </span>

              <span className="text-[#717171]">
                {reviewMentions.amenities}
              </span>
            </div>

            {/* Bathroom */}
            <div className="flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl border border-gray-200 px-3 py-4 shadow-lg hover:border-[#222222]">
              <Bath
                size={18}
                strokeWidth={1.8}
                className="text-[#FF5A5F]"
              />

              <span className="font-semibold text-[#222222]">
                Bathroom
              </span>

              <span className="text-[#717171]">
                {reviewMentions.bathroom}
              </span>
            </div>

          </div>
        </section>

        {/* ================================================= */}
        {/* REVIEWS */}
        {/* ================================================= */}

        <div className="border-b border-gray-200 py-8">

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">

            {backendReviews.length > 0 ? (
              backendReviews.map((review, index) => {

                const firstName =
                  review?.user?.firstName ||
                  review?.guest?.firstName ||
                  review?.firstName ||
                  "Guest";

                const lastName =
                  review?.user?.lastName ||
                  review?.guest?.lastName ||
                  review?.lastName ||
                  "";

                const fullName =
                  `${firstName} ${lastName}`.trim();

                const reviewText =
                  review?.comment ||
                  review?.reviewText ||
                  review?.content ||
                  review?.description ||
                  "No review text available.";

                const reviewDate =
                  review?.createdAt
                    ? new Date(review.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          month: "long",
                          year: "numeric",
                        }
                      )
                    : "Recent review";

                return (
                  <div key={review?.reviewId || index}>

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 font-semibold">
                        {firstName.charAt(0).toUpperCase()}
                      </div>

                      <div>
                        <p className="font-semibold">
                          {fullName}
                        </p>

                        <p className="text-sm text-gray-500">
                          {reviewDate}
                        </p>
                      </div>

                    </div>

                    <p className="mt-3 text-gray-600">
                      {reviewText}
                    </p>

                  </div>
                );
              })
            ) : (
              <>
                {/* Fallback reviews */}
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 font-semibold">
                      S
                    </div>

                    <div>
                      <p className="font-semibold">
                        Sarah
                      </p>

                      <p className="text-sm text-gray-500">
                        August 2026
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-gray-600">
                    Amazing place! Everything was clean and comfortable.
                    The location was perfect.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 font-semibold">
                      M
                    </div>

                    <div>
                      <p className="font-semibold">
                        Mohamed
                      </p>

                      <p className="text-sm text-gray-500">
                        July 2026
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-gray-600">
                    Beautiful property with an amazing view. The host was
                    very helpful.
                  </p>
                </div>
              </>
            )}

          </div>

          <button className="mt-7 rounded-lg border border-gray-800 px-5 py-3 font-semibold transition hover:bg-gray-100">
            Show all {reviewCount} reviews
          </button>

        </div>
      </div>

      {/* ================================================= */}
      {/* HOW REVIEWS WORK MODAL */}
      {/* ================================================= */}

      {reviewswork && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setReviewsWork(false)}
        >

          <div
            className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2rem bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Header */}
            <div className="mb-8 flex items-center justify-between border-b pb-6">

              <div>
                <h2 className="text-2xl font-semibold">
                  How reviews work
                </h2>
              </div>

              <button
                onClick={() => setReviewsWork(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100"
                aria-label="Close"
              >
                <X size={22} />
              </button>

            </div>

            <div className="grid grid-cols-1 gap-x-12 gap-y-3">

              <p>
                Reviews from past guests help our community learn more
                about each home. By default, reviews are sorted by
                relevancy. Relevancy is based on recency, length, and
                information that you provide to us, such as your booking
                search, your country, and your language preferences.
              </p>

              <p className="py-3">
                Only the guest who booked the reservation can leave a
                review, and reviews are moderated according to the
                platform's review policies.
              </p>

              <p>
                To be eligible for a guest favorite label, listings need
                to meet the platform's applicable review criteria.
              </p>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}

export default Reviews;
