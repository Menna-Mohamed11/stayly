import { useState } from "react";
import Icon from "./Icon";

function HotelCard({
    hotel,
    isFavorite,
    onFavorite,
    onHover,
}) {
    const [imageIndex, setImageIndex] = useState(0);

    const nextImage = (event) => {
        event.stopPropagation();

        setImageIndex((current) =>
            current === hotel.images.length - 1
                ? 0
                : current + 1
        );
    };

    const previousImage = (event) => {
        event.stopPropagation();

        setImageIndex((current) =>
            current === 0
                ? hotel.images.length - 1
                : current - 1
        );
    };

    const displayPrice =
        hotel.displayPrice ?? hotel.price;

    return (
        <article
            onMouseEnter={() => onHover(hotel.id)}
            onMouseLeave={() => onHover(null)}
            className="group min-w-0"
        >

            {/* IMAGE */}

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#F7F7F7]">

                <img
                    src={hotel.images[imageIndex]}
                    alt={hotel.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />

                {/* GUEST FAVORITE */}

                {hotel.guestFavorite && (
                    <div className="absolute left-3 top-3 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#222222] shadow-md">
                        Guest favorite
                    </div>
                )}

                {/* HEART */}

                <button
                    type="button"
                    onClick={(event) => {
                        event.stopPropagation();
                        onFavorite(hotel.id);
                    }}
                    aria-label={
                        isFavorite
                            ? "Remove from favorites"
                            : "Add to favorites"
                    }
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#222222] shadow-md transition hover:scale-105 hover:text-[#FF5A5F]"
                >
                    <Icon
                        name="heart"
                        size={20}
                        filled={isFavorite}
                        className={
                            isFavorite
                                ? "text-[#FF5A5F]"
                                : "text-[#222222]"
                        }
                    />
                </button>

                {/* PREVIOUS */}

                {hotel.images.length > 1 && (
                    <button
                        type="button"
                        onClick={previousImage}
                        aria-label="Previous image"
                        className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#222222] opacity-0 shadow-md transition group-hover:opacity-100 hover:bg-white hover:text-[#FF5A5F]"
                    >
                        <Icon
                            name="chevronLeft"
                            size={18}
                        />
                    </button>
                )}

                {/* NEXT */}

                {hotel.images.length > 1 && (
                    <button
                        type="button"
                        onClick={nextImage}
                        aria-label="Next image"
                        className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#222222] opacity-0 shadow-md transition group-hover:opacity-100 hover:bg-white hover:text-[#FF5A5F]"
                    >
                        <Icon
                            name="chevronRight"
                            size={18}
                        />
                    </button>
                )}

                {/* DOTS */}

                {hotel.images.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                        {hotel.images.map((_, index) => (
                            <span
                                key={index}
                                className={`h-1.5 w-1.5 rounded-full ${
                                    index === imageIndex
                                        ? "bg-white"
                                        : "bg-white/60"
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* DETAILS */}

            <div className="pt-3">

                <div className="flex items-start justify-between gap-3">

                    <div className="min-w-0">

                        <p className="text-sm text-[#717171]">
                            {hotel.type}
                        </p>

                        <h2 className="mt-1 truncate text-[15px] font-semibold text-[#222222]">
                            {hotel.title}
                        </h2>

                        <p className="mt-1 text-sm text-[#717171]">
                            {hotel.location}
                        </p>

                    </div>

                    <div className="flex shrink-0 items-center gap-1 text-sm text-[#222222]">
                        <Icon
                            name="star"
                            size={14}
                            filled
                            className="text-[#222222]"
                        />

                        <span>
                            {hotel.rating}
                        </span>
                    </div>

                </div>

                {/* PRICE */}

                <div className="mt-3">

                    <span className="text-[15px] font-semibold text-[#222222]">
                        {displayPrice.toLocaleString()} ج.م
                    </span>

                    <span className="ml-1 text-sm text-[#717171]">
                        night
                    </span>

                </div>

                <p className="mt-1 text-sm text-[#717171]">
                    Free cancellation
                </p>

                {/* AMENITIES */}

                <div className="mt-3 flex flex-wrap gap-1.5">

                    {hotel.amenities
                        .slice(0, 3)
                        .map((amenity) => (
                            <span
                                key={amenity}
                                className="rounded-full bg-[#F7F7F7] px-2.5 py-1 text-xs text-[#717171]"
                            >
                                {amenity}
                            </span>
                        ))}

                </div>

            </div>
        </article>
    );
}

export default HotelCard;