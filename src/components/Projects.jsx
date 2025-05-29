import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import projectsData from "../data/projects";

const visibleCards = 3;
const gap = 24; // 1.5rem
const CARD_WIDTH = 320;

const Projects = () => {
  const [index, setIndex] = useState(0);

  const canGoNext = index + visibleCards < projectsData.length;
  const canGoPrev = index > 0;

  const next = () => {
    if (canGoNext) setIndex(index + 1);
  };

  const prev = () => {
    if (canGoPrev) setIndex(index - 1);
  };

  return (
    <section id="projects" className="bg-gray-900 text-cyan-400 py-16 px-4">
      <div className="max-w-[1055px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className="relative">
          {/* Arrows */}
          <button
            onClick={prev}
            disabled={!canGoPrev}
            className={`absolute -left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-700 text-white z-20 hover:bg-gray-600 ${
              !canGoPrev && "opacity-30 cursor-not-allowed"
            }`}
          >
            <FaChevronLeft />
          </button>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 px-6"
              animate={{ x: -index * (CARD_WIDTH + gap) }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ width: "max-content" }}
            >
              {projectsData.map((project, i) => (
                <div
                  key={i}
                  className="w-[320px] bg-gray-800 border border-gray-700 rounded-2xl p-5 shadow-lg flex-shrink-0 hover:scale-105 transition-transform duration-300"
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover rounded-xl border border-gray-700 mb-4"
                    />
                  )}
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 text-gray-800 px-2 py-1 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline hover:text-cyan-300"
                  >
                    Visit Project →
                  </a>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={next}
            disabled={!canGoNext}
            className={`absolute -right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-700 text-white z-20 hover:bg-gray-600 ${
              !canGoNext && "opacity-30 cursor-not-allowed"
            }`}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
