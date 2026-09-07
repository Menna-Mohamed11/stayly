import { CardProperties } from "../data/CardProperties";
import { PropertyCard } from "./PropertyCard";
import { MoveRight } from "lucide-react";

export function PropertyGrid({ category, destination, searchSubmitted }) {

    const filteredCards = CardProperties.filter((property) => {

        const matchesCategory =
            category === "All" ||
            property.category === category;

        const matchesDestination =
            !searchSubmitted ||
            property.location
                .toLowerCase()
                .includes(destination.toLowerCase());

        return matchesCategory && matchesDestination;
    });

    const sections = [
        "Popular homes",
        "Beach getaways",
        "Mountain getaways",
        "Nature getaways",

        "Popular experiences",
        "Art & culture",
        "Outdoor adventures",
        "Food & drink",

        "Travel services",
        "Home services",
        "Wellness"
    ];

    return (
        <div className="px-10 mt-20">

            {sections.map((section) => {

                const sectionCards = filteredCards.filter(
                    (property) => property.section === section
                );

                if (sectionCards.length === 0) return null;

                return (
                    <section key={section} className="mb-12">

                        <div className="flex items-center gap-x-2 mb-5">
                            <h2 className="text-2xl font-bold">
                                {section}
                            </h2>

                            <button className="bg-lightgray rounded-full h-9 w-9 flex items-center justify-center transition-all duration-200 hover:scale-95 cursor-pointer hover:brightness-90">
                                <MoveRight size={20} />
                            </button>
                        </div>

                        <div className="grid gap-x-5 gap-y-10 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                            {sectionCards.map((property) => (
                                <PropertyCard
                                    key={property.id}
                                    property={property}
                                />
                            ))}
                        </div>

                    </section>
                );
            })}

        </div>
    );
}