import {
    CircleMarker,
    MapContainer,
    TileLayer,
    Tooltip,
    ZoomControl,
    useMap,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import Icon from "./Icon";

const ALEXANDRIA_CENTER = [31.2156, 29.9553];

// Lookup table: location string -> [lat, lng]
const LOCATION_COORDS = {
    "Cairo, Egypt": [30.0444, 31.2357],
    "Zamalek, Cairo, Egypt": [30.0571, 31.2243],
    "Maadi, Cairo, Egypt": [29.9603, 31.2569],
    "Downtown Cairo, Egypt": [30.0511, 31.2461],
    "Giza, Egypt": [29.9765, 31.1313],
    "Miami, Alexandria, Egypt": [31.3300, 30.0250],
    "Sidi Gaber, Alexandria, Egypt": [31.2201, 29.9553],
    "El Gouna, Red Sea, Egypt": [27.3950, 33.6800],
    "Hurghada, Red Sea, Egypt": [27.2579, 33.8116],
    "Dahab, South Sinai, Egypt": [28.5091, 34.5136],
    "Ain Sokhna, Suez, Egypt": [29.6000, 32.3500],
    "Sidi Abdel Rahman, North Coast, Egypt": [30.8500, 28.8500],
    "Luxor, Egypt": [25.6872, 32.6396],
    "Aswan, Egypt": [24.0889, 32.8998],
    "Fayoum, Egypt": [29.3084, 30.8428],
    "Sheikh Zayed City, Giza, Egypt": [30.0131, 30.9761],
    "New Cairo, Egypt": [30.0300, 31.4700],
    "New York City, New York, USA": [40.7128, -74.0060],
    "Dubai, United Arab Emirates": [25.2048, 55.2708],
    "Paris, France": [48.8566, 2.3522],
    "Ubud, Bali, Indonesia": [-8.5069, 115.2625],
    "Yorkshire, England, United Kingdom": [54.0000, -1.5000],
    "Barcelona, Spain": [41.3851, 2.1734],
    "Swiss Alps, Switzerland": [46.5581, 7.8180],
    "Rome, Italy": [41.9028, 12.4964],
    "Maldives": [3.2028, 73.2207],
    "Lake District, United Kingdom": [54.4609, -3.0886],
};

// Fallback so an unmatched location never crashes the map
const DEFAULT_COORDS = [30.0444, 31.2357]; // Cairo

// Resolves a hotel's coordinates, falling back to its location lookup
// if hotel.coordinates isn't already set.
function getHotelCoordinates(hotel) {
    if (
        Array.isArray(hotel.coordinates) &&
        hotel.coordinates.length === 2 &&
        typeof hotel.coordinates[0] === "number" &&
        typeof hotel.coordinates[1] === "number"
    ) {
        return hotel.coordinates;
    }

    return LOCATION_COORDS[hotel.location] ?? DEFAULT_COORDS;
}

function MapControls() {
    const map = useMap();

    const resetMap = () => {
        map.setView(ALEXANDRIA_CENTER, 12);
    };

    return (
        <div className="absolute bottom-5 right-5 z-1000">

            <button
                onClick={resetMap}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-[#222222] shadow-lg transition hover:scale-105 hover:border-[#FC8A8F] hover:bg-[#F7F7F7] hover:text-[#FF5A5F]"
                title="Reset map"
                aria-label="Reset map"
            >
                <Icon
                    name="map"
                    size={19}
                />
            </button>

        </div>
    );
}

function Map({
    hotels,
    activeHotel,
    setActiveHotel,
}) {
    return (
        <div className="relative h-full min-h-600px overflow-hidden rounded-3xl border border-gray-200 bg-[#F7F7F7]">

            <MapContainer
                center={ALEXANDRIA_CENTER}
                zoom={12}
                scrollWheelZoom={true}
                zoomControl={false}
                className="h-full w-full"
            >

                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <ZoomControl position="bottomright" />

                {hotels.map((hotel) => {
                    const active = hotel.id === activeHotel;
                    const coordinates = getHotelCoordinates(hotel);

                    return (
                        <CircleMarker
                            key={hotel.id}
                            center={coordinates}
                            radius={active ? 11 : 8}
                            pathOptions={{
                                color: "#FF5A5F",
                                fillColor: active
                                    ? "#FF5A5F"
                                    : "#FFFFFF",
                                fillOpacity: 1,
                                weight: 2,
                            }}
                            eventHandlers={{
                                mouseover: () =>
                                    setActiveHotel(hotel.id),

                                mouseout: () =>
                                    setActiveHotel(null),

                                click: () =>
                                    setActiveHotel(hotel.id),
                            }}
                        >

                            <Tooltip
                                permanent
                                direction="top"
                                offset={[0, -8]}
                                className="rounded-full border-0 bg-white px-3 py-1.5 text-xs font-bold text-[#222222] shadow-lg"
                            >
                                {(hotel.displayPrice ?? hotel.price).toLocaleString()} ج.م
                            </Tooltip>

                        </CircleMarker>
                    );
                })}

                <MapControls />

            </MapContainer>

            {/* MAP LABEL */}

            <div className="pointer-events-none absolute left-5 top-5 z-1000 rounded-full border border-gray-100 bg-white px-4 py-2.5 text-sm font-semibold text-[#222222] shadow-lg">
                Homes in map area
            </div>

        </div>
    );
}

export default Map;