import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
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
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Python", icon: <FaPython /> },
  ];

  return (
    <section
      id="languages"
      className="
        bg-gray-50 dark:bg-gray-900
        py-14 sm:py-16 md:py-20
        px-4 sm:px-6
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            text-center font-bold
            text-gray-800 dark:text-white
            text-[clamp(1.8rem,4vw,2.8rem)]
            mb-10 sm:mb-12
          "
        >
          Languages & Technologies
        </motion.h2>

        {/* Skills Grid */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            gap-4 sm:gap-6
          "
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="
                flex flex-col items-center justify-center
                p-4 sm:p-5
                bg-white dark:bg-gray-800
                rounded-xl sm:rounded-2xl
                shadow-md hover:shadow-xl
                transition
              "
            >
              {/* Icon */}
              <div
                className="
                  mb-3
                  text-blue-600 dark:text-blue-400
                  text-[clamp(1.8rem,4vw,2.6rem)]
                "
              >
                {skill.icon}
              </div>

              {/* Name */}
              <p
                className="
                  font-medium text-center
                  text-gray-700 dark:text-gray-300
                  text-[clamp(0.85rem,2.5vw,1rem)]
                "
              >
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
