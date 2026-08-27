import { Globe, Menu, Sofa, Landmark, Volleyball, Toolbox, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import logo from '../assets/logo1.jpeg';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

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
        <nav className="border-b border-[#c8c5c5] bg-[#f6f6f6] pt-32">
            <div 
                className={`fixed left-0 right-0 top-0 z-50 mx-auto flex items-center justify-between px-6
                    bg-[#f6f6f6] transition-all duration-500 ease-out
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

                    <button className="flex items-center gap-2 transition-transform duration-200 active:scale-95 hover:scale-110 cursor-pointer">
                        <Landmark /> All</button>
                    <button className='flex items-center gap-2 transition-transform duration-200 active:scale-95 hover:scale-110 cursor-pointer'>
                        <Sofa /> Home</button>
                    <button className='flex items-center gap-2 transition-transform duration-200 active:scale-95 hover:scale-110 cursor-pointer'> 
                        <Volleyball /> Experiences</button>
                    <button className='flex items-center gap-2 transition-transform duration-200 active:scale-95 hover:scale-110 cursor-pointer'> 
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

                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-coral text-white">
                        <Search size={18} />
                    </button>
                </div>
            

            <span className='hidden md:block whitespace-nowrap shrink-0'> 
                Become a host </span>
        <button className="bg-lightgray flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-muted cursor-pointer">
             <Globe />
        </button>
          <button className="bg-lightgray flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-muted cursor-pointer">
            <Menu />
          </button>
        </div>
            </div>

            {/* Search bar */}
            <div className="mx-auto mb-10 h-18 flex w-full max-w-4xl items-center rounded-full border border-[#c8c5c5] shadow-md">

                <button className="group relative flex-1 px-6 py-3 h-full text-left rounded-full transition-colors duration-200 hover:bg-lightgray ">
                    <div className="text-xs font-semibold">Where</div>
                    <div className="text-sm text-gray-500">
                        Search destinations
                    </div>
                    <div className="absolute right-0 top-1/2 h-8 -translate-y-1/2 border-l border-[#c8c5c5] group-hover:hidden"></div>
                </button>

                <button className="group relative flex-1 self-stretch px-6 py-3 text-left rounded-full transition-colors duration-200 hover:bg-lightgray">
                    <div className="text-xs font-semibold">When</div>
                    <div className="text-sm text-gray-500">
                        Add dates
                    </div>
                <div className='absolute right-0 top-1/2 h-8 border-l -translate-y-1/2 border-[#c8c5c5] group-hover:hidden'></div>
                </button>

                <button className="group relative flex-1 px-6 py-3 text-left h-full rounded-full transition-colors duration-200 hover:bg-lightgray ">
                    <div className="text-xs font-semibold">Who</div>
                    <div className="text-sm text-gray-500">
                        Add guests
                    </div>
                
                </button>

                <button className="m-2 rounded-full bg-coral p-3 text-white transition-all duration-200 hover:brightness-90 cursor-pointer hover:scale-90">
                    <Search />
                </button>

            </div>
        </nav>

    );
}