import { useState } from "react";
import Icon from "./Icon";

function SearchBar({
    searchValue,
    setSearchValue,
    guests,
    setGuests,
}) {
    const [activePanel, setActivePanel] = useState(null);

    const closePanel = () => setActivePanel(null);

    const changeGuests = (type) => {
        setGuests((current) => {
            if (type === "increase") {
                return Math.min(current + 1, 16);
            }

            return Math.max(current - 1, 0);
        });
    };

    return (
        <section className="border-b border-gray-200 bg-white px-4 py-4 lg:px-8">
            <div className="relative mx-auto max-w-4xl">

                {/* Main Search Bar */}

                <div className="flex flex-col rounded-3xl border border-gray-300 bg-white shadow-sm md:flex-row md:items-center md:rounded-full">

                    {/* WHERE */}

                    <button
                        onClick={() =>
                            setActivePanel(
                                activePanel === "where"
                                    ? null
                                    : "where"
                            )
                        }
                        className="flex min-h-16 flex-1 items-center gap-3 px-6 text-left transition hover:bg-[#F7F7F7] md:rounded-full"
                    >
                        <Icon
                            name="search"
                            size={20}
                            className="text-[#222222]"
                        />

                        <div className="min-w-0">
                            <p className="text-xs font-bold text-[#222222]">
                                Where
                            </p>

                            <p className="truncate text-sm text-[#717171]">
                                {searchValue || "Search destinations"}
                            </p>
                        </div>
                    </button>

                    <div className="hidden h-8 w-px bg-gray-200 md:block" />

                    {/* WHEN */}

                    <button
                        onClick={() =>
                            setActivePanel(
                                activePanel === "when"
                                    ? null
                                    : "when"
                            )
                        }
                        className="flex min-h-16 flex-1 items-center gap-3 px-6 text-left transition hover:bg-[#F7F7F7]"
                    >
                        <Icon
                            name="calendar"
                            size={19}
                            className="text-[#222222]"
                        />

                        <div>
                            <p className="text-xs font-bold text-[#222222]">
                                When
                            </p>

                            <p className="text-sm text-[#717171]">
                                Any week
                            </p>
                        </div>
                    </button>

                    <div className="hidden h-8 w-px bg-gray-200 md:block" />

                    {/* WHO */}

                    <button
                        onClick={() =>
                            setActivePanel(
                                activePanel === "who"
                                    ? null
                                    : "who"
                            )
                        }
                        className="flex min-h-16 flex-1 items-center gap-3 px-6 text-left transition hover:bg-[#F7F7F7] md:rounded-full"
                    >
                        <Icon
                            name="users"
                            size={20}
                            className="text-[#222222]"
                        />

                        <div className="min-w-0">
                            <p className="text-xs font-bold text-[#222222]">
                                Who
                            </p>

                            <p className="truncate text-sm text-[#717171]">
                                {guests === 0
                                    ? "Add guests"
                                    : `${guests} guest${
                                          guests > 1
                                              ? "s"
                                              : ""
                                      }`}
                            </p>
                        </div>
                    </button>

                    {/* Search Button */}

                    <button
                        onClick={closePanel}
                        className="m-2 flex h-12 items-center justify-center gap-2 rounded-full bg-[#FF5A5F] px-6 text-sm font-bold text-white transition hover:bg-[#FC8A8F] hover:scale-[1.02] md:w-auto"
                    >
                        <Icon
                            name="search"
                            size={18}
                            className="text-white"
                        />

                        <span>Search</span>
                    </button>
                </div>

                {/* WHERE PANEL */}

                {activePanel === "where" && (
                    <div className="absolute left-0 top-[76px] z-40 w-full max-w-xl rounded-3xl border border-gray-200 bg-white p-5 shadow-2xl">

                        <p className="mb-3 text-sm font-semibold text-[#222222]">
                            Search by destination
                        </p>

                        <div className="flex items-center gap-3 rounded-2xl border border-gray-300 px-4 py-3 transition focus-within:border-[#FF5A5F]">
                            <Icon
                                name="search"
                                size={20}
                                className="text-[#717171]"
                            />

                            <input
                                autoFocus
                                value={searchValue}
                                onChange={(event) =>
                                    setSearchValue(
                                        event.target.value
                                    )
                                }
                                placeholder="Try San Stefano, Gleem, Stanley..."
                                className="w-full bg-transparent text-sm text-[#222222] outline-none placeholder:text-[#717171]"
                            />
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {[
                                "San Stefano",
                                "Gleem",
                                "Stanley",
                                "Montaza",
                                "Miami",
                            ].map((place) => (
                                <button
                                    key={place}
                                    onClick={() => {
                                        setSearchValue(place);
                                        closePanel();
                                    }}
                                    className="rounded-full border border-gray-300 px-4 py-2 text-sm text-[#222222] transition hover:border-[#FF5A5F] hover:bg-[#F7F7F7] hover:text-[#FF5A5F]"
                                >
                                    {place}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* WHEN PANEL */}

                {activePanel === "when" && (
                    <div className="absolute right-0 top-[76px] z-40 w-full max-w-md rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl">

                        <p className="mb-5 text-lg font-semibold text-[#222222]">
                            When do you want to stay?
                        </p>

                        <div className="grid grid-cols-2 gap-3">
                            {[
                                "Any week",
                                "This weekend",
                                "Next week",
                                "Next month",
                            ].map((date) => (
                                <button
                                    key={date}
                                    onClick={closePanel}
                                    className="rounded-2xl border border-gray-300 p-4 text-left text-sm font-medium text-[#222222] transition hover:border-[#FF5A5F] hover:bg-[#F7F7F7] hover:text-[#FF5A5F]"
                                >
                                    {date}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* WHO PANEL */}

                {activePanel === "who" && (
                    <div className="absolute right-0 top-[76px] z-40 w-full max-w-md rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="font-semibold text-[#222222]">
                                    Guests
                                </p>

                                <p className="text-sm text-[#717171]">
                                    Ages 13 or above
                                </p>
                            </div>

                            <div className="flex items-center gap-3">

                                {/* Decrease */}

                                <button
                                    onClick={() =>
                                        changeGuests(
                                            "decrease"
                                        )
                                    }
                                    disabled={guests === 0}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-[#222222] transition hover:border-[#FC8A8F] hover:text-[#FF5A5F] disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    <Icon
                                        name="minus"
                                        size={16}
                                    />
                                </button>

                                <span className="w-5 text-center font-semibold text-[#222222]">
                                    {guests}
                                </span>

                                {/* Increase */}

                                <button
                                    onClick={() =>
                                        changeGuests(
                                            "increase"
                                        )
                                    }
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-[#222222] transition hover:border-[#FC8A8F] hover:text-[#FF5A5F]"
                                >
                                    <Icon
                                        name="plus"
                                        size={16}
                                    />
                                </button>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default SearchBar;