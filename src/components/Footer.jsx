import { FaGithub, FaLinkedin, FaWhatsapp , FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  { id: "github", url: "https://github.com/kashifmehmoodtech17-cyber", icon: <FaGithub /> },
  { id: "linkedin", url: "https://www.linkedin.com/in/kashif-mehmood-a47594397?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: <FaLinkedin /> },
  { id: "whtasapp", url: "https://wa.me/+923443248489", icon: <FaWhatsapp  /> },
  { id: "instagram", url: "https://instagram.com/yourusername", icon: <FaInstagram /> },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 relative ">

      {/* Circular Profile Image */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
          <img
            src="src/assets/mypicture.jpeg" // apni profile image path
            alt="Kashif Mehmood"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 pt-20 pb-10 text-center"
      >
        <h2 className="text-xl font-semibold text-white">Kashif Mehmood</h2>
        <p className="text-slate-400 text-sm mt-1">Software Engineer • Web & App Developer</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-6">
          {socials.map((s) => (
            <motion.a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#6366f1" }} // Indigo theme
              transition={{ type: "spring", stiffness: 300 }}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-lg"
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        <p className="text-slate-500 text-xs mt-6">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
