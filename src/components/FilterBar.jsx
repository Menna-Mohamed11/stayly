import Icon from "./Icon";

const filters = [
    {
        id: "TV",
        label: "TV",
        icon: "tv",
    },
    {
        id: "Wi-Fi",
        label: "Wi-Fi",
        icon: "wifi",
    },
    {
        id: "Instant Book",
        label: "Instant Book",
        icon: "bolt",
    },
    {
        id: "Self check in",
        label: "Self check in",
        icon: "key",
    },
    {
        id: "Free parking",
        label: "Free parking",
        icon: "car",
    },
    {
        id: "Washer",
        label: "Washer",
        icon: "washer",
    },
    {
        id: "Air conditioning",
        label: "Air conditioning",
        icon: "snow",
    },
    {
        id: "Allows pets",
        label: "Allows pets",
        icon: "paw",
    },
];

function FilterBar({
    activeFilters,
    setActiveFilters,
    includeFees,
    setIncludeFees,
}) {
    const toggleFilter = (filterId) => {
        setActiveFilters((current) => {
            if (current.includes(filterId)) {
                return current.filter((item) => item !== filterId);
            }

            return [...current, filterId];
        });
    };

    const clearFilters = () => {
        setActiveFilters([]);
        setIncludeFees(false);
    };

    return (
        <section className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-[1600px] items-center gap-3 overflow-x-auto px-5 py-3 lg:px-8">

                {/* Overall */}

                <button
                    onClick={() => {
                        setActiveFilters([]);
                    }}
                    className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                        activeFilters.length === 0
                            ? "border-[#FF5A5F] bg-[#FF5A5F] text-white"
                            : "border-gray-300 bg-white text-[#222222] hover:border-[#FC8A8F] hover:bg-[#F7F7F7]"
                    }`}
                >
                    <span>Overall</span>
                </button>

                {/* Filters */}

                {filters.map((filter) => {
                    const active = activeFilters.includes(filter.id);

                    return (
                        <button
                            key={filter.id}
                            onClick={() => toggleFilter(filter.id)}
                            className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                                active
                                    ? "border-[#FF5A5F] bg-[#FF5A5F] text-white"
                                    : "border-gray-300 bg-white text-[#222222] hover:border-[#FC8A8F] hover:bg-[#F7F7F7]"
                            }`}
                        >
                            <Icon
                                name={filter.icon}
                                size={17}
                            />

                            {filter.label}
                        </button>
                    );
                })}

                {/* Prices include all fees */}

                <button
                    onClick={() =>
                        setIncludeFees((value) => !value)
                    }
                    className={`flex shrink-0 items-center gap-3 rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                        includeFees
                            ? "border-[#FF5A5F] bg-[#FF5A5F] text-white"
                            : "border-gray-300 bg-white text-[#222222] hover:border-[#FC8A8F] hover:bg-[#F7F7F7]"
                    }`}
                >
                    <span
                        className={`relative h-5 w-9 rounded-full transition ${
                            includeFees
                                ? "bg-white"
                                : "bg-gray-300"
                        }`}
                    >
                        <span
                            className={`absolute top-0.5 h-4 w-4 rounded-full transition ${
                                includeFees
                                    ? "right-0.5 bg-[#FF5A5F]"
                                    : "left-0.5 bg-white"
                            }`}
                        />
                    </span>

                    Prices include all fees
                </button>

                {/* Clear all */}

                {(activeFilters.length > 0 || includeFees) && (
                    <button
                        onClick={clearFilters}
                        className="ml-auto shrink-0 rounded-full px-3 py-2 text-sm font-semibold text-[#222222] underline decoration-[#FC8A8F] underline-offset-4 transition hover:text-[#FF5A5F]"
                    >
                        Clear all
                    </button>
                )}
            </div>
        </section>
    );
}

export default FilterBar;