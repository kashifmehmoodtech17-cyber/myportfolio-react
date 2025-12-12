import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiMysql } from "react-icons/si";

export default function Languages() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "Python", icon: <FaPython /> },
  ];

  return (
    <section id="languages" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white"
        >
          Languages & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-4xl text-blue-600 dark:text-blue-400 mb-3">
                {skill.icon}
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
