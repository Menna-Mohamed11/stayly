import {
    Star,
    Sparkles,
    Heart,
    MessageCircle,
    MapPin,
    Tag,
    Map,
    ShieldCheck,
    ThumbsUp,
    Home,
    Volume2,
    Sofa,
    X,
    ShowerHead,
    KeyRound,
    Bubbles,
    Bath,
    LayoutGrid,
    DoorOpen
} from "lucide-react";


import { useState } from "react";

function Reviews({ property }) {
    // -----------------------------
    // REVIEW DATA
    // -----------------------------

    const rating = property.rating || 4.8;
    const reviews = property.reviews || 24;




    const [reviewswork, setreviewswork] = useState(false)

    // -----------------------------
    // STAR COMPONENT
    // -----------------------------



    return (
        <section className=" py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* ================================================= */}
                {/* TOP RATING / GUEST FAVORITE */}
                {/* ================================================= */}

                <div className="flex flex-col items-center justify-center text-center">

                    {/* Rating */}
                    <div className="flex items-center gap-2">


                        <span className="text-8xl font-semibold text-[#222222]">
                            {rating}
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

                    <p className="mt-2 text-sm font-medium text-gray-500 hover:cursor-pointer underline"
                        onClick={() => setreviewswork(true)}>
                        How reviews work
                    </p>
                </div>

                {/* Ratings */}
                <section className="hidden md:flex items-center justify-center border-b border-gray-200 pb-5 pt-15">

                    {/* Rating categories */}
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
                        <div className=" border-l border-gray-200 px-9">
                            <h3 className="text-base font-semibold text-[#222222]">
                                Cleanliness
                            </h3>

                            <p className="mt-1 text-base">
                                4.8
                            </p>

                            <Sparkles
                                size={20}
                                strokeWidth={1.8}
                                className="mt-7 text-[#222222]"
                            />
                        </div>


                        {/* Accuracy */}
                        <div className=" border-l border-gray-200 px-9">
                            <h3 className="text-base font-semibold text-[#222222]">
                                Accuracy
                            </h3>

                            <p className="mt-1 text-base">
                                4.9
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
                                4.9
                            </p>

                            <KeyRound
                                size={20}
                                strokeWidth={1.8}
                                className="mt-7 text-[#222222]"
                            />
                        </div>


                        {/* Communication */}
                        <div className=" border-l border-gray-200 px-9">
                            <h3 className="text-base font-semibold text-[#222222]">
                                Communication
                            </h3>

                            <p className="mt-1 text-base">
                                5.0
                            </p>

                            <MessageCircle
                                size={20}
                                strokeWidth={1.8}
                                className="mt-7 text-[#222222]"
                            />
                        </div>


                        {/* Location */}
                        <div className=" border-l border-gray-200 px-9">
                            <h3 className="text-base font-semibold text-[#222222]">
                                Location
                            </h3>

                            <p className="mt-1 text-base">
                                4.9
                            </p>

                            <Map
                                size={20}
                                strokeWidth={1.8}
                                className="mt-7 text-[#222222]"
                            />
                        </div>


                        {/* Value */}
                        <div className=" border-l border-gray-200 px-9">
                            <h3 className="text-base font-semibold text-[#222222]">
                                Value
                            </h3>

                            <p className="mt-1 text-base">
                                4.9
                            </p>

                            <Tag
                                size={20}
                                strokeWidth={1.8}
                                className="mt-7 text-[#222222]"
                            />
                        </div>

                    </div>
                </section>


                {/* Guest reviews mention */}
                <section className="py-8">

                    <h2 className="text-2xl font-semibold text-[#222222]">
                        Guest reviews mention
                    </h2>

                    <div className="mt-6 flex gap-3 overflow-x-auto pb-2">

                        {/* Cleanliness */}
                        <div className="flex shrink-0 items-center gap-2 rounded-2xl border shadow-lg border-gray-200 hover:border-[#222222] hover:cursor-pointer px-3 py-4">
                            <ShowerHead
                                size={18}
                                strokeWidth={1.8}
                                className="text-[#FF5A5F]"
                            />

                            <span className="font-semibold text-[#222222]">
                                Cleanliness
                            </span>

                            <span className="text-[#717171]">
                                30
                            </span>
                        </div>


                        {/* Hospitality */}
                        <div className="flex shrink-0 items-center gap-2 rounded-2xl border shadow-lg border-gray-200 hover:border-[#222222] hover:cursor-pointer px-3 py-4">
                            <Heart
                                size={18}
                                strokeWidth={1.8}
                                className="text-[#FF5A5F]"
                            />

                            <span className="font-semibold text-[#222222]">
                                Hospitality
                            </span>

                            <span className="text-[#717171]">
                                25
                            </span>
                        </div>


                        {/* Comfort */}
                        <div className="flex shrink-0 items-center gap-2 rounded-2xl border shadow-lg border-gray-200 hover:border-[#222222] hover:cursor-pointer px-3 py-4">
                            <Sofa
                                size={18}
                                strokeWidth={1.8}
                                className="text-[#FF5A5F]"
                            />

                            <span className="font-semibold text-[#222222]">
                                Comfort
                            </span>

                            <span className="text-[#717171]">
                                16
                            </span>
                        </div>


                        {/* Quiet */}
                        <div className="flex shrink-0 items-center gap-2 rounded-2xl border shadow-lg border-gray-200 hover:border-[#222222] hover:cursor-pointer px-3 py-4">
                            <Volume2
                                size={18}
                                strokeWidth={1.8}
                                className="text-[#FF5A5F]"
                            />

                            <span className="font-semibold text-[#222222]">
                                Quiet
                            </span>

                            <span className="text-[#717171]">
                                12
                            </span>
                        </div>


                        {/* Indoor spaces */}
                        <div className="flex shrink-0 items-center gap-2 rounded-2xl border shadow-lg border-gray-200 hover:border-[#222222] hover:cursor-pointer px-3 py-4">
                            <Sofa
                                size={18}
                                strokeWidth={1.8}
                                className="text-[#FF5A5F]"
                            />

                            <span className="font-semibold text-[#222222]">
                                Indoor spaces
                            </span>

                            <span className="text-[#717171]">
                                12
                            </span>
                        </div>


                        {/* Location */}
                        <div className="flex shrink-0 items-center gap-2 rounded-2xl border shadow-lg border-gray-200 hover:border-[#222222] hover:cursor-pointer px-3 py-4">
                            <MapPin
                                size={18}
                                strokeWidth={1.8}
                                className="text-[#FF5A5F]"
                            />

                            <span className="font-semibold text-[#222222]">
                                Location
                            </span>

                            <span className="text-[#717171]">
                                17
                            </span>
                        </div>


                        {/* Accuracy */}
                        <div className="flex shrink-0 items-center gap-2 rounded-2xl border shadow-lg border-gray-200 hover:border-[#222222] hover:cursor-pointer px-3 py-4">
                            <ThumbsUp
                                size={18}
                                strokeWidth={1.8}
                                className="text-[#FF5A5F]"
                            />

                            <span className="font-semibold text-[#222222]">
                                Accuracy
                            </span>

                            <span className="text-[#717171]">
                                7
                            </span>
                        </div>

                        {/* checkin */}
                        <div className="flex shrink-0 items-center gap-2 rounded-2xl border shadow-lg border-gray-200 hover:border-[#222222] hover:cursor-pointer px-3 py-4">
                            <DoorOpen
                                size={18}
                                strokeWidth={1.8}
                                className="text-[#FF5A5F]"
                            />

                            <span className="font-semibold text-[#222222]">
                                Check-in
                            </span>

                            <span className="text-[#717171]">
                                3
                            </span>
                        </div>

                        {/* amenities*/}
                        <div className="flex shrink-0 items-center gap-2 rounded-2xl border shadow-lg border-gray-200 hover:border-[#222222] hover:cursor-pointer px-3 py-4">
                            <LayoutGrid
                                size={18}
                                strokeWidth={1.8}
                                className="text-[#FF5A5F]"
                            />

                            <span className="font-semibold text-[#222222]">
                                Amenities
                            </span>

                            <span className="text-[#717171]">
                                2
                            </span>
                        </div>


                        {/* bathroom*/}
                        <div className="flex shrink-0 items-center gap-2 rounded-2xl border shadow-lg border-gray-200 hover:border-[#222222] hover:cursor-pointer px-3 py-4">
                            <Bath
                                size={18}
                                strokeWidth={1.8}
                                className="text-[#FF5A5F]"
                            />

                            <span className="font-semibold text-[#222222]">
                                Bathroom
                            </span>

                            <span className="text-[#717171]">
                                1
                            </span>
                        </div>

                    </div>

                </section>
                {/* Reviews */}
                <div className="border-b border-gray-200 py-8">


                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">

                        {/* Review 1 */}
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

                        {/* Review 2 */}
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
                        {/* Review 3*/}
                        <div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 font-semibold">
                                    G
                                </div>

                                <div>
                                    <p className="font-semibold">
                                        Gehad
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        August 2024
                                    </p>
                                </div>
                            </div>

                            <p className="mt-3 text-gray-600">
                                It is very cosy place , safe and private
                                Mohamed is really helpfull and nice
                                Highly recommend
                            </p>
                        </div>
                        {/* Review 4 */}
                        <div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 font-semibold">
                                    S
                                </div>

                                <div>
                                    <p className="font-semibold">
                                        Sami Nasser
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        April 2026
                                    </p>
                                </div>
                            </div>

                            <p className="mt-3 text-gray-600">
                                A quiet area and beautiful furniture.
                            </p>
                        </div>
                    </div>


                    <button className="mt-7 rounded-lg border border-gray-800 px-5 py-3 font-semibold transition hover:bg-gray-100">
                        Show all {property.reviews} reviews
                    </button>
                </div>

            </div>

            {reviewswork && (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 px-4"
                    onClick={() => setreviewswork(false)}
                >

                    <div
                        className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-4xl bg-white p-8 shadow-2xl"
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
                                onClick={() => setreviewswork(false)}
                                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100"
                            >
                                <X size={22} />
                            </button>

                        </div>


                        {/* Amenities */}
                        <div className="grid grid-cols-1 gap-x-12 gap-y-3 ">

                            <p >Reviews from past guests help our community learn more about each home.
                                 By default, reviews are sorted by relevancy. Relevancy is based on
                                  recency, length, and information that you provide to us, such as
                                   your booking search, your country, and your language preferences.</p>
                            <p className="py-3">
                               Only the guest who booked the reservation can leave a review,
                                and Airbnb only moderates reviews flagged for not following our policies.
                            </p>
                            <p>
                                To be eligible for a percentile ranking or guest favorite label,
                                 listings need at least 5 reviews in the last 4 years. Criteria 
                                 is subject to change.
                            </p>
                        </div>

                    </div>

                </div>
            )}
        </section>

    );
}

export default Reviews;