import { useMemo, useState } from "react";

import { Navbar } from "../components/Navbarp";

import FilterBar from "../components/FilterBar";
import HotelList from "../components/HotelList";
import Map from "../components/Map";

import properties from "./data/properties";
function SearchResults() {
    const [searchValue, setSearchValue] = useState("");

    const [guests, setGuests] = useState(0);

    const [activeFilters, setActiveFilters] = useState([]);

    const [includeFees, setIncludeFees] = useState(false);

    const [sort, setSort] = useState("recommended");

    const [activeHotel, setActiveHotel] = useState(null);

    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (propertyId) => {
        setFavorites((current) => {
            if (current.includes(propertyId)) {
                return current.filter((id) => id !== propertyId);
            }

            return [...current, propertyId];
        });
    };

    const filteredHotels = useMemo(() => {
        // Use your REAL properties data
        let result = properties.map((property) => ({
            ...property,

            // Keep compatibility with your existing HotelList
            type: property.type || "Home",

            // If amenities don't exist, use an empty array
            amenities: property.amenities || [],

            // Keep guestFavorite working
            guestFavorite: property.guestFavorite || false,

            // Price displayed in the cards
            displayPrice: includeFees
                ? Math.round(property.price * 1.1)
                : property.price,
        }));

        // =========================
        // SEARCH
        // =========================

        const query = searchValue.trim().toLowerCase();

        if (query) {
            result = result.filter((property) => {
                return (
                    property.title?.toLowerCase().includes(query) ||
                    property.location?.toLowerCase().includes(query) ||
                    property.type?.toLowerCase().includes(query)
                );
            });
        }

        // =========================
        // GUESTS
        // =========================

        if (guests > 0) {
            result = result.filter((property) => {
                return Number(property.guests || 0) >= guests;
            });
        }

        // =========================
        // FILTERS
        // =========================

        if (activeFilters.length > 0) {
            result = result.filter((property) => {
                return activeFilters.every((filter) => {
                    return property.amenities.includes(filter);
                });
            });
        }

        // =========================
        // SORT
        // =========================

        if (sort === "price-low") {
            result.sort(
                (a, b) => a.displayPrice - b.displayPrice
            );
        }

        if (sort === "price-high") {
            result.sort(
                (a, b) => b.displayPrice - a.displayPrice
            );
        }

        if (sort === "rating") {
            result.sort(
                (a, b) => b.rating - a.rating
            );
        }

        if (sort === "recommended") {
            result.sort((a, b) => {
                if (a.guestFavorite !== b.guestFavorite) {
                    return (
                        Number(b.guestFavorite) -
                        Number(a.guestFavorite)
                    );
                }

                return (
                    Number(b.rating || 0) -
                    Number(a.rating || 0)
                );
            });
        }

        return result;
    }, [
        searchValue,
        guests,
        activeFilters,
        sort,
        includeFees,
    ]);

    return (
        <div className="min-h-screen bg-white text-[#222222]">

            <Navbar favoritesCount={favorites.length} />

           

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
                        totalHomes={properties.length}
                    />

                </div>

                {/* RIGHT */}

                <aside className="hidden border-l border-gray-200 lg:sticky lg:top-180px lg:block lg:h-[calc(100vh-180px)]">

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