import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff ,X} from "lucide-react";

import logo from "../assets/logo.png";
import hostData from "../data/Hostdata";

function HostLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email === hostData.account.email &&
      password === hostData.account.password
    ) {
      localStorage.setItem("staylyHostLoggedIn", "true");

      navigate("/host");
    } else {
      setError("Incorrect email or password.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7]">

      
      {/* Login */}
      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-10">

        <div className="w-full max-w-md">

          

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
             <X onClick={() => navigate(-1)}
  className="flex items-center gap-2 text-[#717171] "></X>
            <h1 className="text-3xl text-center font-semibold text-[#222222]">
              Host login
            </h1>

            <p className="mt-2 text-center text-[#717171]">
              Log in to manage your Stayly properties.
            </p>

            {error && (
              <div className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-md">
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#FF5A5F]"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-md">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-[#FF5A5F]"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>

                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#FF5A5F] py-4 font-semibold text-white transition hover:bg-[#e94d52]"
              >
                Log in as host
              </button>

            </form>

            <div className="mt-6 rounded-xl bg-gray-50 p-4 text-sm text-[#717171]">

              <p className="font-semibold text-[#222222]">
                Demo host account
              </p>

              <p className="mt-1">
                Email: daif@stayly.com
              </p>

              <p>
                Password: 123456
              </p>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default HostLogin;