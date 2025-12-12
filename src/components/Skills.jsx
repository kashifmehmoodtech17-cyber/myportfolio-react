import React from "react";
import { motion } from "framer-motion";

const skills = [
  { title: "HTML / CSS", level: "95%", color: "from-indigo-500 to-purple-500" },
  { title: "JavaScript", level: "90%", color: "from-yellow-400 to-orange-500" },
  { title: "React / Vite", level: "92%", color: "from-cyan-400 to-blue-500" },
  { title: "Tailwind CSS", level: "94%", color: "from-teal-400 to-emerald-500" },
  { title: "Node.js", level: "88%", color: "from-green-400 to-lime-500" },
  { title: "MongoDB", level: "85%", color: "from-emerald-400 to-green-500" },
  { title: "Firebase", level: "82%", color: "from-orange-400 to-red-500" },
  { title: "Git / GitHub", level: "90%", color: "from-slate-400 to-slate-600" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800 p-6 rounded-xl shadow-md border border-slate-700"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{skill.title}</h3>
                <span className="text-sm text-slate-300">{skill.level}</span>
              </div>

              <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className={`h-full bg-gradient-to-r ${skill.color}`}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
