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

function MapControls() {
    const map = useMap();

    const resetMap = () => {
        map.setView(ALEXANDRIA_CENTER, 12);
    };

    return (
        <div className="absolute bottom-5 right-5 z-[1000]">

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
        <div className="relative h-full min-h-[600px] overflow-hidden rounded-3xl border border-gray-200 bg-[#F7F7F7]">

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

                    return (
                        <CircleMarker
                            key={hotel.id}
                            center={hotel.coordinates}
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
                                className="!rounded-full !border-0 !bg-white !px-3 !py-1.5 !text-xs !font-bold !text-[#222222] !shadow-lg"
                            >
                                {(hotel.displayPrice ?? hotel.price).toLocaleString()} ج.م                            </Tooltip>

                        </CircleMarker>
                    );
                })}

                <MapControls />

            </MapContainer>

            {/* MAP LABEL */}

            <div className="pointer-events-none absolute left-5 top-5 z-[1000] rounded-full border border-gray-100 bg-white px-4 py-2.5 text-sm font-semibold text-[#222222] shadow-lg">
                Homes in map area
            </div>

        </div>
    );
}

export default Map;