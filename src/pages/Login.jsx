import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const bgImages = [
  "https://img.freepik.com/free-photo/beautiful-sea-side-landscape_23-2150724997.jpg",
  "https://img.freepik.com/free-photo/galaxy-night-landscape_23-2148895320.jpg",
];

const Login = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      alert("Login Successful!");
      console.log(response.data);

      // Save token or user data if needed
      // localStorage.setItem("token", response.data.token);

    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      alert("Login failed. Please check your credentials.");
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

      {/* Login Box */}
      <div className="relative z-20 w-full max-w-sm sm:max-w-md bg-white/10 backdrop-blur-md text-white rounded-xl p-6 sm:p-8 shadow-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Login</h1>
        <p className="text-slate-200 mb-6 text-sm sm:text-base">
          Welcome back! Please login to your account.
        </p>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-slate-800 text-white rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
          </div>

          <div className="flex items-center justify-between text-xs sm:text-sm text-slate-300">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" />
              Remember Me
            </label>
            <a href="#" className="text-blue-400 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold py-2 rounded-md text-sm sm:text-base"
          >
            Login
          </button>
        </form>

        <p className="text-xs sm:text-sm text-slate-300 mt-4 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
