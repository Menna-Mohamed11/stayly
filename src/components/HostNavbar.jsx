import { Link, useNavigate } from "react-router-dom";
import { LogOut, Plus } from "lucide-react";

import logo from "../assets/logo.png";

function HostNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("staylyHostLoggedIn");

    navigate("/home");
  };

  return (
    
    <header className="border-b border-gray-200 bg-white">

      <div className=" mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">

        {/* Logo */}
        <Link to="/host">
          <img
            src={logo}
            alt="Stayly"
            className="h-22 w-auto"
          />
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-2">

          <Link
            to="/host"
            className=" px-4 py-2 text-sm font-medium hover:text-[#FF5A5F]"
          >
            Dashboard
          </Link>

          <Link
            to="/host/bookings"
            className=" px-4 py-2 text-sm font-medium hover:text-[#FF5A5F]"
          >
            Bookings
          </Link>

          

          <Link
            to="/host/add-property"
            className="flex items-center gap-2 rounded-full bg-[#222222] px-5 py-3 text-sm font-semibold text-white hover:bg-black"
          >
            <Plus size={17} />
            Add property
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100"
            title="Log out"
          >
            <LogOut size={19} />
          </button>

        </div>

      </div>

    </header>
  );
}

export default HostNavbar;