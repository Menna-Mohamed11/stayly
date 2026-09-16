
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../localstorage";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

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

    const from = location.state?.from;
    const checkoutState = location.state?.checkoutState;

    if (from) {
      navigate(from, {
        state: checkoutState,
      });
      return;
    }

    navigate("/Home");
  }

  return (
    <div className="min-h-screen bg-[#F7F7F7] flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-sm p-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome back
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Log in to your Stayly account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#FF5A5F]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#FF5A5F]"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#FF5A5F] text-white py-3 rounded-lg font-semibold hover:bg-[#e94d52] transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
