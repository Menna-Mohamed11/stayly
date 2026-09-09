import { useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../localstorage";

function Profile() {
  const navigate = useNavigate();
  const user = getCurrentUser();

  if (!user) {
    return (
      <div className="min-h-screen bg-[#F7F7F7] flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-[#222222] mb-3">
            Please log in
          </h1>

          <p className="text-[#717171] mb-6">
            You need to log in to view your profile.
          </p>

          <button
            onClick={() => navigate("/login")}
            className="bg-[#FF5A5F] text-white px-7 py-3 rounded-xl font-semibold hover:bg-[#e94d52]"
          >
            Log in
          </button>
        </div>
      </div>
    );
  }

  function handleLogout() {
    logoutUser();
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex items-center justify-between mb-10">
          <button
            onClick={() => navigate(-1)}
            className="text-[#222222] text-2xl"
          >
            ←
          </button>

          <h1 className="text-2xl font-bold text-[#222222]">
            Account
          </h1>

          <div className="w-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-1">
            <div className="border border-gray-200 rounded-3xl p-7">
              <div className="w-28 h-28 rounded-full bg-[#FF5A5F] text-white flex items-center justify-center text-4xl font-bold mx-auto">
                {user.name.charAt(0).toUpperCase()}
              </div>

              <h2 className="text-2xl font-bold text-[#222222] text-center mt-5">
                {user.name}
              </h2>

              <p className="text-[#717171] text-center mt-1">
                Stayly member
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">

            <h2 className="text-2xl font-bold text-[#222222] mb-6">
              Personal information
            </h2>

            <div className="border border-gray-200 rounded-3xl divide-y">

              <div className="p-6">
                <p className="text-sm text-[#717171] mb-1">
                  Name
                </p>

                <p className="text-[#222222] font-medium">
                  {user.name}
                </p>
              </div>

              <div className="p-6">
                <p className="text-sm text-[#717171] mb-1">
                  Email
                </p>

                <p className="text-[#222222] font-medium">
                  {user.email}
                </p>
              </div>

              <div className="p-6">
                <p className="text-sm text-[#717171] mb-1">
                  Phone number
                </p>

                <p className="text-[#222222] font-medium">
                  {user.phone}
                </p>
              </div>

            </div>

            <h2 className="text-2xl font-bold text-[#222222] mt-10 mb-6">
              Your Stayly
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <button
                onClick={() => navigate("/wishlist")}
                className="border border-gray-200 rounded-2xl p-6 text-left hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-[#222222]">
                  Wishlist
                </h3>

                <p className="text-[#717171] mt-2">
                  Your saved stays
                </p>
              </button>

              <button
                onClick={() => navigate("/trips")}
                className="border border-gray-200 rounded-2xl p-6 text-left hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-[#222222]">
                  Trips
                </h3>

                <p className="text-[#717171] mt-2">
                  Your upcoming and past trips
                </p>
              </button>

            </div>

            <h2 className="text-2xl font-bold text-[#222222] mt-10 mb-6">
              Account settings
            </h2>

            <div className="border border-gray-200 rounded-2xl">

              <button className="w-full text-left p-6 hover:bg-gray-50 rounded-2xl">
                <p className="font-semibold text-[#222222]">
                  Login & security
                </p>

                <p className="text-sm text-[#717171] mt-1">
                  Update your password and security settings
                </p>
              </button>

            </div>

            <button
              onClick={handleLogout}
              className="mt-8 border border-[#222222] px-7 py-3 rounded-xl font-semibold text-[#222222] hover:bg-gray-100"
            >
              Log out
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;