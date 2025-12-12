import { motion } from "framer-motion";
import useInfiniteGradient from "../hooks/useInfinitGradient";
import Typewriter from "./TyperWriter";

export default function HeroAbout() {
  const gradient = useInfiniteGradient(); // use once

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        id="hero"
        className="flex flex-col items-center justify-start bg-slate-900 px-6 pt-24 md:pt-32 pb-12 md:pb-16 min-h-[70vh] md:min-h-[85vh]"
      >
        {/* Name */}
        <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-white leading-tight text-center">
          <span className="block">Hi I'm</span>
          <span className="block whitespace-nowrap">Kashif Mehmood</span>
        </h1>

        {/* Typewriter under name */}
        <h2 className="text-xl md:text-3xl text-indigo-400 mt-2 text-center">
          <Typewriter
            words={[
              "Hi, I'm a Web Developer",
              "Hi, I'm an App Developer",
              "Hi, I'm a CS Student",
            ]}
          />
        </h2>

        {/* Description */}
        <p className="text-slate-300 mt-4 text-lg md:text-xl text-center max-w-2xl">
          A passionate <span className="text-indigo-400">Software Engineer</span> who
          builds modern Web & Mobile Applications with clean architecture,
          scalable backend systems, and beautiful UI.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-indigo-400 border border-indigo-400 hover:bg-indigo-400 hover:text-slate-900 rounded-lg transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section
        id="about"
        className="pt-8 md:pt-12 pb-12 md:pb-16 bg-slate-800"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">

          {/* LEFT SIDE: DETAILS */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <p className="text-slate-300 mt-4 text-lg">
              I am Kashif Mehmood, a <span className="text-indigo-400">Software Engineer</span> with a passion for building modern web and mobile applications.
              I specialize in creating scalable backend systems, clean architecture, and beautiful user interfaces.
            </p>
            <p className="text-slate-300 mt-3 text-lg">
              I love learning new technologies, solving challenging problems, and continuously improving my skills in web and app development.
            </p>
          </div>

          {/* RIGHT SIDE: PROFILE IMAGE */}
          <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
            <motion.div
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-xl p-1"
              animate={gradient.controls}
              style={gradient.style}
            >
              <div className="w-full h-full rounded-lg overflow-hidden bg-slate-900 shadow-lg">
                <img
                  src="src/assets/mypicture.jpeg"
                  alt="Kashif Mehmood"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
};
