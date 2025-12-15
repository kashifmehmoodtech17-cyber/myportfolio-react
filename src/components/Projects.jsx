// src/components/Projects.jsx

import React from "react";
import { motion } from "framer-motion";
import projects from "../data/projects.js";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        scroll-mt-24
        bg-slate-900
        py-16 sm:py-20 md:py-24
        px-4 sm:px-6
        text-white
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            text-center font-bold
            text-[clamp(1.9rem,4vw,2.8rem)]
            mb-10 sm:mb-12 md:mb-14
          "
        >
          Projects
        </motion.h2>

        {/* PROJECT GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6 sm:gap-8 md:gap-10
          "
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="
                bg-slate-800
                border border-slate-700
                rounded-xl
                shadow-lg
                overflow-hidden
                hover:scale-[1.03]
                transition-transform
              "
            >
              {/* IMAGE */}
              <div className="h-40 sm:h-44 md:h-48 bg-slate-700">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                    Project Preview
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="font-semibold mb-2 text-[clamp(1.1rem,3vw,1.3rem)]">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-4 text-[clamp(0.85rem,2.5vw,0.95rem)]">
                  {project.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1
                        text-[clamp(0.65rem,2vw,0.75rem)]
                        bg-indigo-600/20
                        text-indigo-300
                        border border-indigo-500/30
                        rounded-full
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="mt-4 flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline text-sm"
                    >
                      GitHub
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:underline text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
