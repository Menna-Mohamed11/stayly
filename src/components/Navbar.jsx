import { Globe, Menu, Sofa, Landmark, Volleyball, Toolbox, Search ,CircleHelp} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo1.jpeg';

export function Navbar({ onCategoryChange, category, destination, setDestination, date, setDate, guests, setGuests}) {
    const [scrolled, setScrolled] = useState(false);

    const [showWhere, setShowWhere] = useState(false);
    const [showWhen, setShowWhen] = useState(false);
    const [showWho, setShowWho] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handlescroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handlescroll);

        return () => {
            window.removeEventListener('scroll', handlescroll);
        };
    }, []);                     //[] -> dependency array, only runs once

    return(
        <nav className="border-b border-[#c8c5c5] bg-[#F7F7F7] pt-32">
            <div 
                className={`fixed left-0 right-0 top-0 z-50 mx-auto flex items-center justify-between px-6
                    bg-[#F7F7F7] transition-all duration-500 ease-out
                ${
                    scrolled 
                        ? "py-3 shadow-sm"
                        : "py-5"
                }
            `}>

                <img src={logo} className="h-22 w-auto" />
                <div
                 className={`flex items-center mx-auto gap-8 transition-all duration-300
                    ${
                    scrolled ? "hidden" : "flex"
                    }
                 `}>

                    <button 
                    onClick={() => onCategoryChange("All")} className={`flex items-center gap-2 transition-transform duration-200 active:scale-95 hover:scale-110 cursor-pointer
                        ${category === "All" ? "text-[#FF5A5F]" : "" }
                    `}>
                        <Landmark /> All</button>
                    <button 
                    onClick={() => onCategoryChange("Home")} className={`flex items-center gap-2 transition-transform duration-200 active:scale-95 hover:scale-110 cursor-pointer
                        ${category === "Home" ? "text-[#FF5A5F]" : "" }
                    `}>
                        <Sofa /> Home</button>
                    <button 
                    onClick={() => onCategoryChange("Experiences")} className={`flex items-center gap-2 transition-transform duration-200 active:scale-95 hover:scale-110 cursor-pointer
                        ${category === "Experiences" ? "text-[#FF5A5F]" : "" }
                    `}>
                        <Volleyball /> Experiences</button>
                    <button 
                    onClick={() => onCategoryChange("Services")} className={`flex items-center gap-2 transition-transform duration-200 active:scale-95 hover:scale-110 cursor-pointer
                        ${category === "Services" ? "text-[#FF5A5F]" : "" }
                    `}> 
                        <Toolbox /> Services</button>
                </div>

        {/* compact search bar */}
        
        <div className="flex items-center gap-4">

        <div
            className={`absolute left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-full border border-[#c8c5c5] bg-white px-5 py-2 shadow-sm
                transition-all duration-300 ease-out
                ${
                    scrolled
                        ? "scale-100 opacity-100"
                        : "pointer-events-none invisible scale-90 opacity-0"
                }
            `}
        >
                    <button className="font-medium">
                        Anywhere
                    </button>

                    <div className="h-5 border-l border-[#c8c5c5]" />

                    <button className="font-medium">
                        Anytime
                    </button>

                    <div className="h-5 border-l border-[#c8c5c5]" />

                    <button className="font-medium">
                        Add guests
                    </button>
                    <Link 
                    to={`/search`}>
                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF5A5F] text-white">
                        <Search size={18} />
                    </button>
                    </Link>
                </div>
            
             <Link
             to={`/host/login`}>
            <span className='hidden md:block whitespace-nowrap shrink-0'> 
                Become a host </span>
                </Link>
        <button className="bg-lightgray flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-gray-200 cursor-pointer">
             <Globe />
        </button>
        
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
        </div>
            </div>

            {/* Search bar */}
            <div className="mx-auto mb-10 h-18 flex w-full max-w-4xl items-center rounded-full border border-[#c8c5c5] shadow-md">

            <div className="relative flex-1 h-full">

                <button
                    onClick={() => setShowWhere(!showWhere)}
                    className="group relative w-full h-full px-6 py-3 text-left rounded-full transition-colors duration-200 hover:bg-lightgray"
                >
                    <div className="text-xs font-semibold">
                        Where
                    </div>

                    <div className="text-sm text-gray-500">
                        {destination || "Search destinations"}
                    </div>

                    <div className="absolute right-0 top-1/2 h-8 -translate-y-1/2 border-l border-[#c8c5c5] group-hover:hidden" />
                </button>

                {showWhere && (
                    <div className="absolute left-0 top-full mt-2 w-64 rounded-2xl bg-white p-3 shadow-lg border">

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

            <div className="relative flex-1 h-full">

                <button
                    onClick={() => {
                        setShowWhen(!showWhen);
                        setShowWhere(false);
                    }}
                    className="group relative w-full h-full px-6 py-3 text-left rounded-full transition-colors duration-200 hover:bg-lightgray"
                >
                    <div className="text-xs font-semibold">
                        When
                    </div>

                    <div className="text-sm text-gray-500">
                        {date || "Add dates"}
                    </div>

                    <div className="absolute right-0 top-1/2 h-8 border-l -translate-y-1/2 border-[#c8c5c5] group-hover:hidden" />
                </button>

                {showWhen && (
                    <div className="absolute left-0 top-full mt-2 rounded-2xl bg-white p-4 shadow-lg border">

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

            <div className="relative flex-1 h-full">

                <button
                    onClick={() => {
                        setShowWho(!showWho);
                        setShowWhere(false);
                        setShowWhen(false);
                    }}
                    className="group relative w-full h-full px-6 py-3 text-left rounded-full transition-colors duration-200 hover:bg-lightgray"
                >
                    <div className="text-xs font-semibold">
                        Who
                    </div>

                    <div className="text-sm text-gray-500">
                        {guests === 0 ? "Add guests" : `${guests} guests`}
                    </div>
                </button>

                {showWho && (
                    <div className="absolute right-0 top-full mt-2 w-64 rounded-2xl bg-white p-5 shadow-lg border">

                        <div className="flex items-center justify-between">

                            <span className="font-medium">
                                Guests
                            </span>

                            <div className="flex items-center gap-3">

                                <button
                                    onClick={() => setGuests(Math.max(0, guests - 1))}
                                    className="h-8 w-8 rounded-full border hover:bg-gray-100"
                                >
                                    −
                                </button>

                                <span>
                                    {guests}
                                </span>

                                <button
                                    onClick={() => setGuests(guests + 1)}
                                    className="h-8 w-8 rounded-full border hover:bg-gray-100"
                                >
                                    +
                                </button>

                            </div>

                        </div>

                    </div>
                )}

            </div>
                <Link 
                    to={`/search`}>
                <button className="m-2 rounded-full bg-[#FF5A5F] p-3 text-white transition-all duration-200 hover:brightness-90 cursor-pointer hover:scale-90">
                    <Search />
                </button>
                </Link>
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
                            <Link
                            to={`/host/login`}>
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
                            </Link>


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
        </nav>

    );
}

//date, setDate, guests, setGuests 