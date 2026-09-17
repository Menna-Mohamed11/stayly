import { useState } from "react";
import Icon from "./Icon";
import HotelCard from "./HotelCard";

function HotelList({
    hotels,
    activeHotel,
    setActiveHotel,
    favorites,
    onFavorite,
    sort,
    setSort,
    totalHomes,
}) {
    const [showSort, setShowSort] = useState(false);

    const displayCount =
        hotels.length === totalHomes && !sort
            ? totalHomes
            : hotels.length;

    return (
        <section className="min-w-0">

            {/* HEADER */}

            <div className="mb-5 flex items-center justify-between gap-4">

                <div>
                    <h1 className="text-xl font-semibold text-[#222222]">
                        {displayCount} homes
                    </h1>

                    <p className="mt-1 text-sm text-[#717171]">
                        Homes in map area
                    </p>
                </div>

                {/* SORT */}

                <div className="relative">

                    <button
                        onClick={() =>
                            setShowSort((value) => !value)
                        }
                        className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-[#222222] transition hover:border-[#FC8A8F] hover:bg-[#F7F7F7]"
                    >
                        <span>Overall</span>

                        <Icon
                            name="chevronDown"
                            size={16}
                        />
                    </button>

                    {showSort && (
                        <div className="absolute right-0 top-12 z-30 w-56 rounded-2xl border border-gray-200 bg-white p-2 shadow-xl">

                            <button
                                onClick={() => {
                                    setSort("recommended");
                                    setShowSort(false);
                                }}
                                className="w-full rounded-xl px-4 py-3 text-left text-sm text-[#222222] transition hover:bg-[#F7F7F7] hover:text-[#FF5A5F]"
                            >
                                Recommended
                            </button>

                            <button
                                onClick={() => {
                                    setSort("price-low");
                                    setShowSort(false);
                                }}
                                className="w-full rounded-xl px-4 py-3 text-left text-sm text-[#222222] transition hover:bg-[#F7F7F7] hover:text-[#FF5A5F]"
                            >
                                Price: low to high
                            </button>

                            <button
                                onClick={() => {
                                    setSort("price-high");
                                    setShowSort(false);
                                }}
                                className="w-full rounded-xl px-4 py-3 text-left text-sm text-[#222222] transition hover:bg-[#F7F7F7] hover:text-[#FF5A5F]"
                            >
                                Price: high to low
                            </button>

                            <button
                                onClick={() => {
                                    setSort("rating");
                                    setShowSort(false);
                                }}
                                className="w-full rounded-xl px-4 py-3 text-left text-sm text-[#222222] transition hover:bg-[#F7F7F7] hover:text-[#FF5A5F]"
                            >
                                Highest rated
                            </button>

                        </div>
                    )}
                </div>
            </div>

            {/* CARDS */}

            {hotels.length > 0 ? (
                <div className="grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2">
                    {hotels.map((hotel) => (
                        <HotelCard
                            key={hotel.id}
                            hotel={hotel}
                            isFavorite={favorites.includes(hotel.id)}
                            onFavorite={onFavorite}
                            onHover={setActiveHotel}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex min-h-400px flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 px-6 text-center">

                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F7F7F7] text-[#FF5A5F]">
                        <Icon
                            name="search"
                            size={25}
                        />
                    </div>

                    <h2 className="text-lg font-semibold text-[#222222]">
                        No homes found
                    </h2>

                    <p className="mt-2 max-w-sm text-sm text-[#717171]">
                        Try removing some filters or searching for another destination.
                    </p>
                </div>
            )}

            {/* ACTIVE HOTEL */}

            {activeHotel && (
                <div className="pointer-events-none fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[#222222] px-5 py-3 text-sm font-medium text-white shadow-xl">
                    Showing:{" "}
                    {hotels.find(
                        (hotel) => hotel.id === activeHotel
                    )?.title}
                </div>
            )}

        </section>
    );
}

export default HotelList;