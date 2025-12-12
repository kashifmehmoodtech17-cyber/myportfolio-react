import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa"; // icons

const navLinks = [
  { name: "Home", href: "#hero", icon: <FaHome /> },
  { name: "About", href: "#about", icon: <FaUser /> },
  { name: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
  { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Wave animation for items
  const waveVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 120,
      },
    }),
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-xl bg-slate-900/70 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* LOGO */}
          <a href="#hero" className="flex items-center gap-3 z-10 relative">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-500 to-purple-500 shadow-md flex items-center justify-center text-white font-bold">
              KM
            </div>
            <div className="hidden sm:block">
              <h1 className="text-white text-sm font-semibold">Kashif Mehmood</h1>
              <p className="text-xs text-slate-300">Software Engineer</p>
            </div>
          </a>

          {/* DESKTOP MENU (shifted right) */}
          <nav className="hidden md:flex items-center gap-10 ml-auto relative z-10">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={waveVariants}
                className="flex items-center gap-2 text-slate-300 text-base md:text-lg lg:text-xl font-medium transition relative group hover:text-indigo-400"
              >
                {link.icon}
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500 group-hover:w-full transition-all"></span>
              </motion.a>
            ))}
          </nav>

          {/* MOBILE HAMBURGER */}
          <button onClick={() => setOpen(!open)} className="md:hidden z-10 relative">
            <div className="space-y-1.5">
              <span
                className={`block w-7 h-[3px] bg-white transition ${open ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-7 h-[3px] bg-white transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-7 h-[3px] bg-white transition ${open ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            className="md:hidden bg-slate-900/90 backdrop-blur-xl shadow-lg px-6 py-4 space-y-4 border-b border-slate-700 flex flex-col items-center"
          >
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 130 }}
              >
                <a
                  href={link.href}
                  className="block text-lg text-slate-200 hover:text-indigo-400 transition flex items-center gap-2"
                  onClick={() => setOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </header>
  );
};
