import { Link } from "react-router-dom";

export default function NavbarGCU() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          <span className="text-pink-200">GCU</span> Matrimony
        </h1>

        {/* Nav Links */}
        <div className="flex space-x-4">
          <Link
            to="/"
            className="px-4 py-2 rounded-xl hover:bg-white hover:text-pink-600 font-medium transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 rounded-xl hover:bg-white hover:text-purple-600 font-medium transition"
          >
            About Us
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 rounded-xl hover:bg-white hover:text-blue-600 font-medium transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-white text-pink-600 rounded-xl font-semibold shadow hover:bg-pink-50 transition"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}
