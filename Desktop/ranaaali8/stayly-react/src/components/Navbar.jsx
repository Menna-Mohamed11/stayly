import Icon from "./Icon";
import logo from "../images/logo.png";

function Navbar({ favoritesCount }) {
    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
            <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between gap-6 px-5 lg:px-8">

                {/* Logo */}

                <div className="flex shrink-0 items-center">
                    <img
                        src={logo}
                        alt="Stayly"
                        className="h-10 w-auto object-contain"
                    />
                </div>

                {/* Navigation */}

                <nav className="hidden items-center gap-8 lg:flex">
                    <button className="text-sm font-medium text-[#222222]">
                        Stays
                    </button>

                    <button className="text-sm font-medium text-[#717171] transition hover:text-[#FF5A5F]">
                        Experiences
                    </button>
                </nav>

                {/* Right Side */}

                <div className="ml-auto flex items-center gap-2">

                    {/* Become a host */}

                    <button className="hidden rounded-full px-4 py-3 text-sm font-semibold text-[#222222] transition hover:bg-[#F7F7F7] md:block">
                        Become a host
                    </button>

                    {/* Language */}

                    <button
                        aria-label="Choose language"
                        className="flex h-11 w-11 items-center justify-center rounded-full text-[#222222] transition hover:bg-[#F7F7F7]"
                    >
                        <Icon
                            name="globe"
                            size={19}
                        />
                    </button>

                    {/* User Menu */}

                    <button
                        aria-label="Open user menu"
                        className="flex items-center gap-2 rounded-full border border-gray-300 px-2 py-2 pl-3 text-[#222222] shadow-sm transition hover:border-[#FC8A8F] hover:shadow-md"
                    >
                        <Icon
                            name="menu"
                            size={18}
                        />

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F7F7] text-[#717171]">
                            <Icon
                                name="user"
                                size={17}
                            />
                        </div>
                    </button>
                </div>

                {/* Favorites Count */}

                {favoritesCount > 0 && (
                    <div className="hidden">
                        {favoritesCount}
                    </div>
                )}

            </div>
        </header>
    );
}

export default Navbar;