import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  {
    id: "github",
    url: "https://github.com/kashifmehmoodtech17-cyber",
    icon: <FaGithub />,
  },
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/kashif-mehmood-a47594397",
    icon: <FaLinkedin />,
  },
  {
    id: "whatsapp",
    url: "https://wa.me/923443248489",
    icon: <FaWhatsapp />,
  },
  {
    id: "instagram",
    url: "https://instagram.com/yourusername",
    icon: <FaInstagram />,
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 border-t border-slate-800">

      {/* Floating Profile Image */}
      <div className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2">
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
          <img
            src="public\assets\mypicture.jpeg"
            alt="Kashif Mehmood"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6
          pt-16 sm:pt-20
          pb-8 sm:pb-10
          text-center
        "
      >
        {/* Name */}
        <h2 className="font-semibold text-white text-[clamp(1.1rem,3vw,1.4rem)]">
          Kashif Mehmood
        </h2>

        {/* Role */}
        <p className="mt-1 text-slate-400 text-[clamp(0.8rem,2.5vw,0.95rem)]">
          Software Engineer • Web & App Developer
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 sm:gap-5 mt-5 sm:mt-6">
          {socials.map((s) => (
            <motion.a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 260 }}
              className="
                w-9 h-9 sm:w-10 sm:h-10
                rounded-full
                bg-white/10 hover:bg-white/20
                flex items-center justify-center
                text-white
                text-base sm:text-lg
              "
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="mt-5 sm:mt-6 text-slate-500 text-[clamp(0.7rem,2vw,0.8rem)]">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
