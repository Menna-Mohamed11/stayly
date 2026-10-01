import { CardProperties } from "../data/CardProperties";
import { PropertyCard } from "./PropertyCard";
import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import { findAll } from "../api/property";
import properties from "../pages/Data/properties";

export function PropertyGrid() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchProperties() {
            try {
                const data = await findAll();

                setProperties(data);
            } catch (error) {
                console.error(error);
                setError("Failed to load properties.");
            } finally {
                setLoading(false);
            }
        }

        fetchProperties();
    }, []);

    if (loading) {
        return (
            <p className="text-center">
                Loading properties...
            </p>
        );
    }

    if (error) {
        return (
            <p className="text-center text-red-500">
                {error}
            </p>
        );
    }

    return (
        <div className="px-10 mt-20">

            
                        <div className="grid gap-x-5 gap-y-10 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                            {properties.map((property) => (
                                <PropertyCard
                                    key={property.propertyId}
                                    property={property}
                                />
                            ))}
                        </div>

              

        </div>
    );
}