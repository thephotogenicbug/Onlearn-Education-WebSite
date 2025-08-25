import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Arjun & Priya",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
    story: "We met through GCU Matrimony, and now we’re happily engaged 💍.",
  },
  {
    name: "Imran & Sana",
    img: "https://randomuser.me/api/portraits/women/60.jpg",
    story: "A safe and trusted platform where I found my soulmate ❤️.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative flex-1 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center justify-center text-center px-6 py-6">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-gray-800 drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-pink-600">GCU Matrimony</span>
        </motion.h2>
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Find your perfect match with{" "}
          <span className="font-semibold text-purple-700">trust</span>,
          <span className="font-semibold text-pink-700"> care</span>, and
          <span className="font-semibold text-blue-700"> happiness</span>.
        </motion.p>
        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Link
            to="/signup"
            className="px-6 py-3 rounded-2xl bg-pink-600 text-white font-semibold shadow-lg hover:bg-pink-700 transition"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 rounded-2xl bg-white text-pink-600 font-semibold border border-pink-600 shadow hover:bg-pink-50 transition"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      {/* How It Works Section */}
      <section className="bg-white py-12 px-6 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-8">How It Works</h3>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { step: "1", title: "Signup", desc: "Create your free account." },
            {
              step: "2",
              title: "Create Profile",
              desc: "Tell us about yourself.",
            },
            {
              step: "3",
              title: "Browse Matches",
              desc: "Find profiles that suit you.",
            },
            {
              step: "4",
              title: "Connect",
              desc: "Start conversations with matches.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-pink-50 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="text-4xl font-bold text-pink-600 mb-2">
                {item.step}
              </div>
              <h4 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h4>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-12 px-6 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-8">
          Success Stories
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-pink-400"
              />
              <div className="text-left">
                <h4 className="text-lg font-semibold text-gray-800">
                  {t.name}
                </h4>
                <p className="text-gray-600 text-sm mt-1">{t.story}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-pink-600 py-12 px-6 text-white text-center">
        <h3 className="text-3xl font-bold mb-6">Why Choose GCU Matrimony?</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Trusted Community",
              desc: "Verified profiles for safe connections.",
            },
            {
              title: "Personalized Matches",
              desc: "Smart recommendations that fit you.",
            },
            {
              title: "Easy & Secure",
              desc: "User-friendly design with privacy.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white/20 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-12 text-center text-white">
        <h3 className="text-3xl font-bold mb-4">Ready to Find Your Match?</h3>
        <p className="mb-6">
          Join GCU Matrimony today and take the first step toward happiness.
        </p>
        <Link
          to="/signup"
          className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-2xl shadow hover:bg-gray-100 transition"
        >
          Join Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white py-8 mt-12 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          {/* Branding / Copyright */}
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-pink-200">GCU Matrimony</span>.
            All rights reserved.
          </p>

          {/* Footer Nav Links */}
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              to="/about"
              className="px-3 py-1 rounded-lg hover:bg-white hover:text-pink-600 transition"
            >
              About
            </Link>
            <Link
              to="/login"
              className="px-3 py-1 rounded-lg hover:bg-white hover:text-purple-600 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-3 py-1 rounded-lg bg-white text-blue-600 font-medium rounded-xl shadow hover:bg-pink-50 transition"
            >
              Signup
            </Link>
          </div>
        </div>

        {/* Divider line & extra text */}
        <div className="mt-6 border-t border-white/20 pt-4 text-center text-xs opacity-80">
          Made with ❤️ at GCU | Connecting hearts with trust, care & happiness
        </div>
      </footer>
    </div>
  );
}
