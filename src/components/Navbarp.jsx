import {
    Globe,
    Menu,
    Search,
} from "lucide-react";

import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { DayPicker } from "react-day-picker";

export function Navbar({
    destination,
    setDestination,
    date,
    setDate,
    guests,
    setGuests,
}) {
    const [showWhere, setShowWhere] = useState(false);
    const [showWhen, setShowWhen] = useState(false);
    const [showWho, setShowWho] = useState(false);

    useEffect(() => {
        const handleClickOutside = () => {
            setShowWhere(false);
            setShowWhen(false);
            setShowWho(false);
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <nav className="relative z-50 w-full border-b border-gray-200 bg-white">
            
            {/* Main Navbar */}
            <div className="mx-auto flex h-24 items-center justify-between px-6 lg:px-12">

                {/* LOGO */}
                <div className="flex items-center">
                    <Link
                    to={`/Home`} >
                    
                    <img
                        src={logo}
                        alt="Stayly"
                        className="h-22 w-auto"
                    />
                    </Link>
                </div>


                {/* CENTER SEARCH BAR */}
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="hidden md:flex items-center rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                >

                    {/* WHERE */}
                    <div className="relative">
                        <button
                            onClick={() => {
                                setShowWhere(!showWhere);
                                setShowWhen(false);
                                setShowWho(false);
                            }}
                            className="rounded-full px-6 py-3 text-left hover:bg-gray-100 transition-colors"
                        >
                            <div className="text-xs font-semibold">
                                Where
                            </div>

                            <div className="text-sm text-gray-500 whitespace-nowrap">
                                {destination || "Anywhere"}
                            </div>
                        </button>

                        {showWhere && (
                            <div className="absolute left-0 top-full mt-3 w-64 rounded-2xl border bg-white p-3 shadow-xl">

                                <button
                                    onClick={() => {
                                        setDestination("Cairo");
                                        setShowWhere(false);
                                    }}
                                    className="w-full rounded-xl p-3 text-left hover:bg-gray-100"
                                >
                                    Cairo
                                </button>

                                <button
                                    onClick={() => {
                                        setDestination("Alexandria");
                                        setShowWhere(false);
                                    }}
                                    className="w-full rounded-xl p-3 text-left hover:bg-gray-100"
                                >
                                    Alexandria
                                </button>

                                <button
                                    onClick={() => {
                                        setDestination("New Cairo");
                                        setShowWhere(false);
                                    }}
                                    className="w-full rounded-xl p-3 text-left hover:bg-gray-100"
                                >
                                    New Cairo
                                </button>

                            </div>
                        )}
                    </div>


                    {/* DIVIDER */}
                    <div className="h-8 border-l border-gray-200" />


                    {/* WHEN */}
                    <div className="relative">
                        <button
                            onClick={() => {
                                setShowWhen(!showWhen);
                                setShowWhere(false);
                                setShowWho(false);
                            }}
                            className="rounded-full px-6 py-3 text-left hover:bg-gray-100 transition-colors"
                        >
                            <div className="text-xs font-semibold">
                                When
                            </div>

                            <div className="text-sm text-gray-500 whitespace-nowrap">
                                {date || "Anytime"}
                            </div>
                        </button>

                        {showWhen && (
                            <div className="absolute left-0 top-full mt-3 rounded-2xl border bg-white p-4 shadow-xl">
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => {
                                        setDate(e.target.value);
                                        setShowWhen(false);
                                    }}
                                    className="outline-none"
                                />
                            </div>
                        )}
                    </div>


                    {/* DIVIDER */}
                    <div className="h-8 border-l border-gray-200" />


                    {/* WHO */}
                    <div className="relative">
                        <button
                            onClick={() => {
                                setShowWho(!showWho);
                                setShowWhere(false);
                                setShowWhen(false);
                            }}
                            className="rounded-full px-6 py-3 text-left hover:bg-gray-100 transition-colors"
                        >
                            <div className="text-xs font-semibold">
                                Who
                            </div>

                            <div className="text-sm text-gray-500 whitespace-nowrap">
                                {guests === 0
                                    ? "Add guests"
                                    : `${guests} guests`}
                            </div>
                        </button>

                        {showWho && (
                            <div className="absolute right-0 top-full mt-3 w-64 rounded-2xl border bg-white p-5 shadow-xl">

                                <div className="flex items-center justify-between">

                                    <span className="font-medium">
                                        Guests
                                    </span>

                                    <div className="flex items-center gap-4">

                                        <button
                                            onClick={() =>
                                                setGuests(
                                                    Math.max(0, guests - 1)
                                                )
                                            }
                                            className="flex h-8 w-8 items-center justify-center rounded-full border hover:bg-gray-100"
                                        >
                                            −
                                        </button>

                                        <span>
                                            {guests}
                                        </span>

                                        <button
                                            onClick={() =>
                                                setGuests(guests + 1)
                                            }
                                            className="flex h-8 w-8 items-center justify-center rounded-full border hover:bg-gray-100"
                                        >
                                            +
                                        </button>

                                    </div>

                                </div>

                            </div>
                        )}
                    </div>


                    {/* SEARCH BUTTON */}
                    <Link 
                    to={`/search`}>
                    <button
                        className="m-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF5A5F] text-white transition-all duration-200 hover:scale-105"
                    >
                        <Search size={19} />
                    </button>
                    </Link>
                </div>


                {/* RIGHT SIDE */}
                <div className="flex items-center gap-3">

                    <button className="hidden lg:block whitespace-nowrap rounded-full px-4 py-3 text-sm font-medium hover:bg-gray-100 transition-colors">
                        Become a host
                    </button>

                    {/* Globe */}
                    <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                        <Globe size={20} />
                    </button>

                    {/* Menu */}
                    <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                        <Menu size={22} />
                    </button>

                </div>

            </div>
        </nav>
    );
}