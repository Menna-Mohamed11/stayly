import { Globe, Menu, Sofa, Landmark, Volleyball, Toolbox, Search } from 'lucide-react';
import logo from '../assets/logo1.jpeg';

export function Navbar() {
    return(
        <nav className="border-b border-[#c8c5c5] bg-[#f6f6f6] ">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                <img src={logo} className="h-22 w-auto" />
                <div className="flex items-center mx-auto gap-8">
                    <button className="flex items-center gap-2 transition-transform duration-200 active:scale-95 hover:scale-110 cursor-pointer">
                        <Landmark /> All</button>
                    <button className='flex items-center gap-2 transition-transform duration-200 active:scale-95 hover:scale-110 cursor-pointer'>
                        <Sofa /> Home</button>
                    <button className='flex items-center gap-2 transition-transform duration-200 active:scale-95 hover:scale-110 cursor-pointer'> 
                        <Volleyball /> Experiences</button>
                    <button className='flex items-center gap-2 transition-transform duration-200 active:scale-95 hover:scale-110 cursor-pointer'> 
                        <Toolbox /> Services</button>
                </div>
        <div className="flex items-center gap-4">
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