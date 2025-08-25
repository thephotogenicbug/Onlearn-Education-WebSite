import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 flex flex-col items-center justify-center text-center px-6">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      </div>

      {/* Content */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-gray-800 drop-shadow-lg mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About <span className="text-pink-600">Us</span>
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Sooo… welcome to{" "}
        <span className="font-semibold text-purple-700">GCU Matrimony</span>{" "}
        (don’t worry, it’s not that serious 😅). This is an unofficial, for-fun
        platform where students of GCU can vibe, connect, and maybe find their
        forever lab partner 🧪❤️.
        <br />
        <br />
        We’re not aunties with biodata sheets, promise 🙏. We’re just students
        like you, trying to make campus life a little more interesting. At the
        end of the day, it’s all chill. Think of this as a campus-only inside
        joke that sometimes turns into forever stories. 💍✨
      </motion.p>
    </div>
  );
}
