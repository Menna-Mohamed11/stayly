import { PropertyCard } from "./PropertyCard";
import { MoveRight } from 'lucide-react';       //lucide uses PascalCase

export function PropertyGrid() {
    return(
        <>
        <div className="mt-20 flex mx-auto mb-3 text-2xl gap-x-2 px-10 ">
            <h1 className="font-bold"> 
                Popular Homes in New Cairo </h1>
            <button className="bg-lightgray rounded-full h-10 w-10 flex items-center justify-center">
                <MoveRight />
            </button>
           
        </div>
        <div className="px-10 grid gap-y-10 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
        </div>
        </>
    );
}