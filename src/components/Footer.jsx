import { useState } from 'react';

export function Footer() {
    const [activeCategory, setActiveCategory] = useState("Popular");

    return(
    <footer>
        
        <h2 className="mx-auto max-w-7xl px-6 mt-15 text-xl text-textdark font-bold tracking-wide">
            Inspiration for future getaways
        </h2>
      {/* Categories */}
<div className="flex overflow-x-auto border-b border-[#c8c5c5] justify-between px-10 mt-3">

    {["Popular", "Arts & Culture", "Outdoors", "Mountains", "Beach", "Things to do"].map((category) => (
        <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`group relative shrink-0 pb-4 text-sm cursor-pointer transition-all duration-200
                ${
                    activeCategory === category
                        ? "font-semibold text-black"
                        : "font-medium text-gray-500 hover:font-semibold hover:text-black"
                }
            `}
        >
            {category}

            <span
                className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ease-out
                    ${
                        activeCategory === category
                            ? "w-full"
                            : "w-0"
                    }
                `}
            ></span>
            
        </button>
    ))}

</div>

      {/* Grid */}
      <section>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 px-10 mt-5">

            <a href="#">
                <p className="text-sm font-medium">Port Aransas</p>
                <p className="text-sm font-medium text-mutedark">Apartment rentals</p>
            </a>
            <a href="#">
                <p className="text-sm font-medium">Kauai</p>
                <p className="text-sm font-medium text-mutedark">House rentals</p>
            </a>
            <a href="#">
                <p className="text-sm font-medium">Ocean City</p>
                <p className="text-sm font-medium text-mutedark">House rentals</p>
            </a>
            <a href="#">
                <p className="text-sm font-medium">Brooklyn</p>
                <p className="text-sm font-medium text-mutedark">House rentals</p>
            </a>
            <a href="#">
                <p className="text-sm font-medium">Detroit</p>
                <p className="text-sm font-medium text-mutedark">House rentals</p>
            </a>
            <a href="#">
                <p className="text-sm font-medium">Albuquerque</p>
                <p className="text-sm font-medium text-mutedark">Condo rentals</p>
            </a>
            <a href="#">
                <p className="text-sm font-medium">Dallas</p>
                <p className="text-sm font-medium text-mutedark">Vacation rentals</p>
            </a>
            <a href="#">
                <p className="text-sm font-medium">Raleigh</p>
                <p className="text-sm font-medium text-mutedark">Vacation rentals</p>
            </a>
            <a href="#">
                <p className="text-sm font-medium">Charleston</p>
                <p className="text-sm font-medium text-mutedark">Condo rentals</p>
            </a>

            <a href="#">
                <p className="text-sm font-medium">Pittsburgh</p>
                <p className="text-sm font-medium text-mutedark">Apartment rentals</p>
            </a>
            <a href="#">
                <p className="text-sm font-medium">Tampa</p>
                <p className="text-sm font-medium text-mutedark">Apartment rentals</p>
            </a>
            <a href="#">
                <p className="text-sm font-medium">Wilmington</p>
                <p className="text-sm font-medium text-mutedark">House rentals</p>
            </a>
            <a href="#">
                <p className="text-sm font-medium">Key West</p>
                <p className="text-sm font-medium text-mutedark">Vacation rentals</p>
            </a>
            <a href="#">
                <p className="text-sm font-medium">Portland</p>
                <p className="text-sm font-medium text-mutedark">Cabin rentals</p>
            </a>
            <a href="#">
                <p className="text-sm font-medium">Minneapolis</p>
                <p className="text-sm font-medium text-mutedark">Apartment rentals</p>
            </a>
        </div>

            {/* Credits 2 */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 px-10">
            {/* Support */}
            <div>
                <h3 className="mb-4 mt-15 font-semibold">Support</h3>

                <div className="space-y-3 text-sm text-footer">
                    <a href="#" className="block">Help Center</a>
                    <a href="#" className="block">Get help with a safety issue</a>
                    <a href="#" className="block">AirCover</a>
                    <a href="#" className="block">Travel insurance</a>
                    <a href="#" className="block">Anti-discrimination</a>
                    <a href="#" className="block">Disability support</a>
                    <a href="#" className="block">Cancellation options</a>
                    <a href="#" className="block">Report neighborhood concern</a>
                </div>
            </div>

                        {/* Hosting */}
            <div>
                <h3 className="mb-4 mt-15 font-semibold">Hosting</h3>

                <div className="space-y-3 text-sm text-footer">
                    <a href="#" className="block">Airbnb your home</a>
                    <a href="#" className="block">Airbnb your experience</a>
                    <a href="#" className="block">Airbnb your service</a>
                    <a href="#" className="block">AirCover for Hosts</a>
                    <a href="#" className="block">Hosting resources</a>
                    <a href="#" className="block">Community forum</a>
                    <a href="#" className="block">Hosting responsibly</a>
                    <a href="#" className="block">Airbnb-friendly apartments</a>
                    <a href="#" className="block">Join a free hosting class</a>
                    <a href="#" className="block">Find a co-host</a>
                    <a href="#" className="block">Refer a host</a>
                </div>
            </div>

            {/* Airbnb */}
            <div>
                <h3 className="mb-4 mt-15 font-semibold text-footer">Airbnb</h3>

                <div className="space-y-3 text-sm">
                    <a href="#" className="block">2026 Summer Release</a>
                    <a href="#" className="block">Newsroom</a>
                    <a href="#" className="block">Careers</a>
                    <a href="#" className="block">Investors</a>
                    <a href="#" className="block">Gift cards</a>
                    <a href="#" className="block">Airbnb.org emergency stays</a>
                </div>
            </div>

        </div>

        <div className="border-t mt-10 border-[#c8c5c5]">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm mb-20">

                {/* Copyright */}
                <div className="flex flex-wrap items-center gap-2">
                    <span>© 2026 Airbnb, Inc.</span>
                    <span>·</span>

                    <a href="#" className="hover:underline">
                        Privacy
                    </a>

                    <span>·</span>

                    <a href="#" className="hover:underline">
                        Terms
                    </a>

                    <span>·</span>

                    <a href="#" className="hover:underline">
                        Your Privacy Choices
                    </a>
                </div>

                {/* Language + Currency + Social */}
                <div className="flex flex-wrap items-center gap-5">

                    <button className="font-medium hover:underline">
                        English (US)
                    </button>

                    <button className="font-medium hover:underline">
                        EGP
                    </button>

                    <div className="flex items-center gap-4">
                        <a href="#" aria-label="Facebook">
                            Facebook
                        </a>

                        <a href="#" aria-label="Twitter">
                            Twitter
                        </a>

                        <a href="#" aria-label="Instagram">
                            Instagram
                        </a>
                    </div>

                </div>

            </div>
    </div>
      </section>

    </footer>
    ); 
}