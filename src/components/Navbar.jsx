import { Globe, Menu, Sofa, Landmark, Volleyball, Toolbox, Search } from 'lucide-react';
import logo from '../assets/logo.png';

export function Navbar() {
    return(
        <nav className="border-b border-[#c8c5c5] bg-[#f6f6f6] ">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                <img src={logo} className="h-16 w-auto" />
                <div className="flex items-center mx-auto gap-8">
                    <button className="flex items-center gap-2">
                        <Landmark /> All</button>
                    <button className='flex items-center gap-2'>
                        <Sofa /> Home</button>
                    <button className='flex items-center gap-2 '> 
                        <Volleyball /> Experiences</button>
                    <button className='flex items-center gap-2'> 
                        <Toolbox /> Services</button>
                </div>
        <div className="flex items-center gap-4">
            <span className='hidden md:block whitespace-nowrap shrink-0'> 
                Become a host </span>
        <button className="bg-lightgray flex h-10 w-10 items-center justify-center rounded-full">
             <Globe />
        </button>
          <button className="bg-lightgray flex h-10 w-10 items-center justify-center rounded-full">
            <Menu />
          </button>
        </div>
            </div>

            {/* Search bar */}
            <div className="mx-auto mb-10 flex w-full max-w-4xl items-center rounded-full border border-[#c8c5c5] shadow-md">

                <button className="flex-1 px-6 py-3 text-left">
                    <div className="text-xs font-semibold">Where</div>
                    <div className="text-sm text-gray-500">
                        Search destinations
                    </div>
                </button>

                <div className="h-8 border-l border-[#c8c5c5]"></div>

                <button className="flex-1 px-6 py-3 text-left">
                    <div className="text-xs font-semibold">When</div>
                    <div className="text-sm text-gray-500">
                        Add dates
                    </div>
                </button>

                <div className="h-8 border-l border-[#c8c5c5]"></div>

                <button className="flex-1 px-6 py-3 text-left">
                    <div className="text-xs font-semibold">Who</div>
                    <div className="text-sm text-gray-500">
                        Add guests
                    </div>
                </button>

                <button className="m-2 rounded-full bg-coral p-3 text-white">
                    <Search />
                </button>

            </div>
        </nav>

    );
}