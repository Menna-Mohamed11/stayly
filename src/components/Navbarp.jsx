import {
    Globe,
    Menu,
    Search,
    CircleHelp,
} from "lucide-react";

import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

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
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleClickOutside = () => {
            setShowWhere(false);
            setShowWhen(false);
            setShowWho(false);
            setShowMenu(false);
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <nav className="relative z-50 w-full border-b border-gray-200 bg-[#f7f7f7]">

            {/* Main Navbar */}
            <div className="mx-auto flex h-24 items-center justify-between px-6 lg:px-12">

                {/* LOGO */}
                <div className="flex items-center">
                    <Link to="/Home">
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
                                setShowMenu(false);
                            }}
                            className="rounded-full px-6 py-3 text-left hover:bg-gray-100 transition-colors"
                        >
                            <div className="text-md whitespace-nowrap">
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
                                setShowMenu(false);
                            }}
                            className="rounded-full px-6 py-3 text-left hover:bg-gray-100 transition-colors"
                        >
                            <div className="text-md whitespace-nowrap">
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
                                setShowMenu(false);
                            }}
                            className="rounded-full px-6 py-3 text-left hover:bg-gray-100 transition-colors"
                        >
                            <div className="text-md whitespace-nowrap">
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

                                        {/* Minus */}
                                        <button
                                            onClick={() =>
                                                setGuests(
                                                    Math.max(0, guests - 1)
                                                )
                                            }
                                            className="flex h-8 w-8 items-center justify-center rounded-full border hover:bg-gray-100"
                                        >
                                            -
                                        </button>

                                        <span>
                                            {guests}
                                        </span>

                                        {/* Plus */}
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
                    <Link to="/search">
                        <button
                            className="m-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF5A5F] text-white transition-all duration-200 hover:scale-105"
                        >
                            <Search size={19} />
                        </button>
                    </Link>

                </div>


                {/* RIGHT SIDE */}
                <div className="relative flex items-center gap-3">

                    {/* Become a host */}
                    <button
                        className="hidden lg:block whitespace-nowrap rounded-full px-4 py-3 text-sm font-medium hover:bg-gray-100 transition-colors"
                    >
                        Become a host
                    </button>


                    {/* Globe */}
                    <button
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f7f7] hover:bg-gray-200 transition-colors"
                    >
                        <Globe size={20} />
                    </button>


                    {/* Hamburger Menu Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();

                            setShowMenu(!showMenu);

                            // Close the other dropdowns
                            setShowWhere(false);
                            setShowWhen(false);
                            setShowWho(false);
                        }}
                        className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                            showMenu
                                ? "bg-gray-200"
                                : "bg-[#f7f7f7] hover:bg-gray-200"
                        }`}
                    >
                        <Menu size={22} />
                    </button>


                    {/* HAMBURGER DROPDOWN MENU */}
                    {showMenu && (
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="absolute right-0 top-14 w-325px overflow-hidden rounded-2xl border border-gray-200 bg-white ]"
                        >

                            {/* Help Center */}
                            <button
                                onClick={() => setShowMenu(false)}
                                className="flex w-full items-center gap-3 px-5 py-5 text-left  hover:bg-gray-50"
                            >
                                <CircleHelp
                                    size={22}
                                    strokeWidth={2}
                                />

                                <span className="text-[15px] font-medium">
                                    Help Center
                                </span>
                            </button>


                            {/* Divider */}
                            <div className="mx-5 border-t border-gray-200" />


                            {/* Become a host */}
                            <button
                                onClick={() => setShowMenu(false)}
                                className="flex w-full items-center justify-between px-5 py-3 text-left hover:bg-gray-50"
                            >
                                <div>
                                    <div className="text-[15px] font-semibold">
                                        Become a host
                                    </div>

                                    <div className="max-w-210px text-[13px] leading-5 text-gray-500">
                                        It's easy to start hosting and earn
                                        extra income.
                                    </div>
                                </div>

                                {/* Small illustration */}
                                <div className="ml-3 text-3xl">
                                    🧑‍💼
                                </div>
                            </button>


                            {/* Divider */}
                            <div className="mx-5 border-t border-gray-300" />


                            {/* Find a co-host */}
                            <button
                                onClick={() => setShowMenu(false)}
                                className="w-full px-5 py-2 text-left text-[15px] transition-colors hover:bg-gray-50"
                            >
                                Find a co-host
                            </button>


                            {/* Gift cards */}
                            <button
                                onClick={() => setShowMenu(false)}
                                className="w-full px-5 py-2 text-left text-[15px] transition-colors hover:bg-gray-50"
                            >
                                Gift cards
                            </button>


                            {/* Divider */}
                            <div className="mx-5 border-t border-gray-200" />


                            {/* Log in or sign up */}
                            <Link
                            to={`/login`}>
                            <button
                                onClick={() => setShowMenu(false)}
                                className="w-full px-5 py-3 text-left text-[15px] transition-colors hover:bg-gray-50"
                            >
                                Log in or sign up
                            </button>
                            </Link>
                        </div>
                    )}

                </div>

            </div>

        </nav>
    );
}