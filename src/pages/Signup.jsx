import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API calls

const bgImages = [
  "https://img.freepik.com/free-photo/beautiful-sea-side-landscape_23-2150724997.jpg",
  "https://img.freepik.com/free-photo/galaxy-night-landscape_23-2148895320.jpg",
];

const Signup = () => {
  const [bgIndex, setBgIndex] = useState(0);

  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Create an object with form data
    const userData = {
      fullName,
      email,
      phone,
      password,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", userData);

      alert("Signup successful!");
      console.log(response.data);

      // Redirect to login page after successful signup
      navigate("/login");
    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center font-sans px-4">
      {/* Animated Backgrounds */}
      {bgImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[3000ms] ease-in-out ${
            bgIndex === index ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Signup Box */}
      <div className="relative z-20 w-full max-w-sm sm:max-w-md bg-white/10 backdrop-blur-md text-white rounded-xl p-6 sm:p-8 shadow-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Sign Up</h1>
        <p className="text-slate-200 mb-6 text-sm sm:text-base">
          Create your account to get started.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-slate-800 text-white rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-slate-800 text-white rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+91 9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 bg-slate-800 text-white rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-slate-800 text-white rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-1">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 bg-slate-800 text-white rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold py-2 rounded-md text-sm sm:text-base"
          >
            Sign Up
          </button>
        </form>

        <p className="text-xs sm:text-sm text-slate-300 mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
