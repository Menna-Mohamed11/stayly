import { CardProperties } from "../data/CardProperties";

import { PropertyCard } from "./PropertyCard";
import { MoveRight } from 'lucide-react';       //lucide uses PascalCase


export function PropertyGrid({ category, destination, searchSubmitted }) {
    const filteredCards = CardProperties.filter((property) => {
        const matchesCategory =
            category === "All" ||
            category === "Home" ||
            property.category === category;

        const matchesDestination =
            !searchSubmitted ||
            property.title.toLowerCase().includes(destination.toLowerCase());

        return matchesCategory && matchesDestination;
    });

    return(
        <>
        <div className="mt-20 flex mx-auto mb-3 text-2xl gap-x-2 px-10 ">
            <h1 className="font-bold"> 
                {category === "All"
                    ? "Popular Homes in New Cairo"
                    : `${category} in ${destination || "Cairo"}`
                }
                </h1>
            <button className="bg-lightgray rounded-full h-9 w-9 flex items-center justify-center transition-all duration-200 hover:scale-95 cursor-pointer hover:brightness-90">
                <MoveRight />
            </button>
           
        </div>
        <div className="px-10 grid gap-y-10 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {filteredCards.map((property) => (
                <PropertyCard 
                    key= {property.id}
                    property= {property}
                />
            ))}
        </div>
        </>
    );
}