import { useMemo, useState } from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import HotelList from "../components/HotelList";
import Map from "../components/Map";

import hotelsData from "../data/hotelsData";

function SearchResults() {
    const [searchValue, setSearchValue] = useState("");

    const [guests, setGuests] = useState(0);

    const [activeFilters, setActiveFilters] = useState([]);

    const [includeFees, setIncludeFees] = useState(false);

    const [sort, setSort] = useState("recommended");

    const [activeHotel, setActiveHotel] = useState(null);

    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (hotelId) => {
        setFavorites((current) => {
            if (current.includes(hotelId)) {
                return current.filter((id) => id !== hotelId);
            }

            return [...current, hotelId];
        });
    };

    const filteredHotels = useMemo(() => {
        let result = [...hotelsData];

        // SEARCH

        const query = searchValue.trim().toLowerCase();

        if (query) {
            result = result.filter((hotel) => {
                return (
                    hotel.type.toLowerCase().includes(query) ||
                    hotel.title.toLowerCase().includes(query) ||
                    hotel.location.toLowerCase().includes(query)
                );
            });
        }

        // FILTERS

        if (activeFilters.length > 0) {
            result = result.filter((hotel) => {
                return activeFilters.every((filter) => {
                    return hotel.amenities.includes(filter);
                });
            });
        }

        // ADD 10% FEES

        result = result.map((hotel) => ({
            ...hotel,
            displayPrice: includeFees
                ? Math.round(hotel.price * 1.1)
                : hotel.price,
        }));

        // SORT

        if (sort === "price-low") {
            result.sort((a, b) => a.displayPrice - b.displayPrice);
        }

        if (sort === "price-high") {
            result.sort((a, b) => b.displayPrice - a.displayPrice);
        }

        if (sort === "rating") {
            result.sort((a, b) => b.rating - a.rating);
        }

        if (sort === "recommended") {
            result.sort((a, b) => {
                if (a.guestFavorite !== b.guestFavorite) {
                    return (
                        Number(b.guestFavorite) -
                        Number(a.guestFavorite)
                    );
                }

                return b.rating - a.rating;
            });
        }

        return result;
    }, [
        searchValue,
        activeFilters,
        sort,
        includeFees,
    ]);

    return (
        <div className="min-h-screen bg-white text-[#222222]">

            <Navbar favoritesCount={favorites.length} />

            <SearchBar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                guests={guests}
                setGuests={setGuests}
            />

            <FilterBar
                activeFilters={activeFilters}
                setActiveFilters={setActiveFilters}
                includeFees={includeFees}
                setIncludeFees={setIncludeFees}
            />

            <main className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(420px,48%)]">

                {/* LEFT */}

                <div className="min-w-0 px-5 py-6 lg:max-h-[calc(100vh-180px)] lg:overflow-y-auto lg:px-8">

                    <HotelList
                        hotels={filteredHotels}
                        activeHotel={activeHotel}
                        setActiveHotel={setActiveHotel}
                        favorites={favorites}
                        onFavorite={toggleFavorite}
                        sort={sort}
                        setSort={setSort}
                        totalHomes={63}
                    />

                </div>

                {/* RIGHT */}

                <aside className="hidden border-l border-gray-200 lg:sticky lg:top-[180px] lg:block lg:h-[calc(100vh-180px)]">

                    <Map
                        hotels={filteredHotels}
                        activeHotel={activeHotel}
                        setActiveHotel={setActiveHotel}
                    />

                </aside>

            </main>
        </div>
    );
}

export default SearchResults;