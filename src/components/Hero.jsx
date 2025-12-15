import { motion } from "framer-motion";
import useInfiniteGradient from "../hooks/useInfinitGradient";
import Typewriter from "./TyperWriter";

export default function HeroAbout() {
  const gradient = useInfiniteGradient();

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        id="hero"
        className="
          bg-slate-900
          flex flex-col items-center justify-start
          pt-20 sm:pt-24 md:pt-28 lg:pt-32
          pb-8 sm:pb-10 md:pb-12   /* 👈 bottom padding reduced */
          px-4 sm:px-6
          min-h-[65vh] md:min-h-[75vh]
          text-center
        "
      >
        {/* Heading */}
        <h1 className="font-bold text-white leading-tight">
          <span className="block text-[clamp(1.4rem,4vw,2.4rem)]">
            Hi, I'm
          </span>
          <span className="block whitespace-nowrap text-[clamp(2.2rem,7vw,4.6rem)]">
            Kashif Mehmood
          </span>
        </h1>

        {/* Typewriter */}
        <h2 className="mt-2 text-indigo-400 text-[clamp(1.05rem,3vw,1.9rem)]">
          <Typewriter
            words={[
              "Web Developer",
              "App Developer",
              "Computer Science Student",
            ]}
          />
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-slate-300 text-[clamp(0.95rem,2.5vw,1.2rem)]">
          A passionate{" "}
          <span className="text-indigo-400">Software Engineer</span> building
          modern web & mobile applications with scalable backend systems and
          clean, beautiful UI.
        </p>

        {/* Buttons */}
        <div className="mt-5 flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition text-sm sm:text-base"
          >
            View Projects
          </a>

          <a
            href="#about"
            className="px-6 py-3 rounded-lg border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900 transition text-sm sm:text-base"
          >
            About Me
          </a>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section
        id="about"
        className="scroll-mt-24 bg-slate-800 py-14 sm:py-16 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <h2 className="font-bold text-white text-[clamp(1.9rem,4vw,2.8rem)]">
              About Me
            </h2>

            <p className="mt-4 text-slate-300 text-[clamp(0.95rem,2.5vw,1.15rem)]">
              I am <span className="text-indigo-400">Kashif Mehmood</span>, a
              Software Engineer passionate about building scalable web and
              mobile applications with clean architecture and modern UI.
            </p>

            <p className="mt-3 text-slate-300 text-[clamp(0.95rem,2.5vw,1.15rem)]">
              I enjoy solving complex problems, learning new technologies, and
              continuously improving my development skills.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              className="
                relative
                w-60 h-60
                sm:w-72 sm:h-72
                md:w-88 md:h-88
                lg:w-96 lg:h-96
                rounded-xl
                p-1
              "
              animate={gradient.controls}
              style={gradient.style}
            >
              <div className="w-full h-full rounded-lg overflow-hidden bg-slate-900 shadow-xl">
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
}
