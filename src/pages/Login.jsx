import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../localstorage";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    const result = loginUser(email, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    // Login successful
    navigate("/profile");
  }

  return (
    <div className="min-h-screen bg-black/40 flex items-center justify-center px-4">

      <div className="w-full max-w-520px bg-white rounded-3xl shadow-2xl p-8 relative">

        {/* Close */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-5 right-6 text-2xl text-[#222222]"
        >
          ×
        </button>

        {/* Logo */}
        <div className="text-center pt-3">

       

          <h1 className="text-2xl font-bold text-[#222222]">
            Log in to Stayly
          </h1>

          <p className="text-[#717171] mt-2 mb-7">
            Welcome back!
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-400 rounded-xl px-4 py-4 outline-none focus:border-[#FF5A5F]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-400 rounded-xl px-4 py-4 mt-3 outline-none focus:border-[#FF5A5F]"
          />

          {error && (
            <p className="text-red-500 text-sm mt-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#FF5A5F] hover:bg-[#e94d52] text-white font-semibold py-4 rounded-xl mt-5 transition"
          >
            Log in
          </button>

        </form>

        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-gray-200 flex-1"></div>
          <span className="text-[#717171]">or</span>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        <button className="w-full border border-gray-400 rounded-xl py-3 font-semibold">
          Continue with Google
        </button>

        <button className="w-full border border-gray-400 rounded-xl py-3 font-semibold mt-3">
          Continue with Apple
        </button>

        <p className="text-center text-[#717171] mt-7">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="font-semibold text-[#222222] underline"
          >
            Sign up
          </button>
        </p>

      </div>
    </div>
  );
}

export default Login;