import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../localstorage";
import { X } from "lucide-react";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const result = registerUser(formData);

    if (!result.success) {
      setError(result.message);
      return;
    }

    // بعد التسجيل نروح للـ Login
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-[#F7F7F7] flex items-center justify-center px-4 ">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-lg p-8">
        
        <div className="text-center mb-7">
          <h1 className="text-3xl font-bold text-[#222222]">
            Create your Stayly account
          </h1>

          <p className="text-[#717171] mt-2">
            Where stays feel like home.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-[#FF5A5F]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-[#FF5A5F]"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-[#FF5A5F]"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-[#FF5A5F]"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-[#FF5A5F]"
          />

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#FF5A5F] hover:bg-[#e94d52] text-white font-semibold py-4 rounded-xl transition"
          >
            Create account
          </button>
        </form>

        <p className="text-center text-[#717171] mt-6">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-[#222222] font-semibold underline"
          >
            Log in
          </button>
        </p>

      </div>
    </div>
  );
}

export default Register;