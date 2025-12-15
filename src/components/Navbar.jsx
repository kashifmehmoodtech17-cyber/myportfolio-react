import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", id: "hero", icon: <FaHome /> },
  { name: "About", id: "about", icon: <FaUser /> },
  { name: "Projects", id: "projects", icon: <FaProjectDiagram /> },
  { name: "Contact", id: "contact", icon: <FaEnvelope /> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Smooth scroll handler
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const waveVariants = {
    hidden: { y: -15, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 120,
      },
    }),
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-xl bg-slate-900/70 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

          {/* LOGO */}
          <button
            onClick={() => handleScroll("hero")}
            className="flex items-center gap-3 z-10"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-slate-500 to-purple-500 flex items-center justify-center text-white font-bold">
              KM
            </div>
            <div className="hidden sm:block text-left">
              <h1 className="text-white text-sm font-semibold">
                Kashif Mehmood
              </h1>
              <p className="text-xs text-slate-300">Software Engineer</p>
            </div>
          </button>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 ml-auto">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.name}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={waveVariants}
                onClick={() => handleScroll(link.id)}
                className="
                  flex items-center gap-2
                  text-slate-300
                  text-base lg:text-lg
                  font-medium
                  hover:text-indigo-400
                  transition
                  relative group
                "
              >
                {link.icon}
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500 group-hover:w-full transition-all" />
              </motion.button>
            ))}
          </nav>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden z-10"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-7 h-[3px] bg-white transition ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-7 h-[3px] bg-white transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-7 h-[3px] bg-white transition ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="
              md:hidden
              bg-slate-900/90 backdrop-blur-xl
              border-t border-slate-700
              px-6 py-4
              space-y-4
              text-center
            "
          >
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <button
                  onClick={() => handleScroll(link.id)}
                  className="
                    flex items-center justify-center gap-2
                    text-lg
                    text-slate-200
                    hover:text-indigo-400
                    transition
                  "
                >
                  {link.icon}
                  {link.name}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </header>
  );
}
