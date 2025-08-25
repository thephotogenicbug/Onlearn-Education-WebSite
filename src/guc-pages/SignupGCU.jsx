import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function SignupGCU() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/signup", {
        email,
        password,
      });
      alert("Signup successful!");
      console.log(res.data);
    } catch (err) {
      alert("Signup failed: " + err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute top-40 -right-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>

      <motion.form
        onSubmit={handleSignup}
        className="relative bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-96 border border-gray-200"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Create Account ✨
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Join{" "}
          <span className="font-semibold text-green-600">GCU Matrimony</span>{" "}
          today
        </p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-green-700 transition"
        >
          Signup
        </button>

        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Login
          </a>
        </p>
      </motion.form>
    </div>
  );
}
