import { SECTION_HEADERS } from "../constants";
import { experience } from "../data/experience";
import { FaMapMarkerAlt, FaCalendarAlt, FaCode } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14 tracking-wide">
          {SECTION_HEADERS.EXPERIENCE}
        </h2>

        {experience.map((job, index) => (
          <div
            key={index}
            className="relative group mb-12 bg-gray-800 border-l-4 border-cyan-600 shadow-lg hover:shadow-cyan-600 duration-500 rounded-xl p-6 transition-transform transform hover:scale-[1.01]"
          >
            <div className="md:flex justify-between items-center mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-cyan-600">
                  {job.role}
                </h3>
                <p className="text-gray-400 mt-1">
                  {job.company}
                  <span className="inline-flex items-center ml-2 text-sm text-gray-400">
                    <FaMapMarkerAlt className="mr-1" />
                    {job.location}
                  </span>
                </p>
              </div>
              <div className="flex items-center mt-3 md:mt-0 text-sm text-gray-400">
                <FaCalendarAlt className="mr-2 text-cyan-600" />
                {job.period}
              </div>
            </div>

            <div className="space-y-8 mt-6">
              {job.projects.map((project, pIndex) => (
                <div
                  key={pIndex}
                  className="bg-gray-600 p-5 rounded-lg hover:shadow-md transition-all duration-300"
                >
                  {project.title && (
                    <h4 className="text-lg font-semibold text-cyan-600 mb-2">
                      {project.title}
                    </h4>
                  )}
                  {project.techStack && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="text-sm text-white bg-cyan-600 px-3 py-1 rounded-full shadow-sm hover:bg-cyan-700 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <ul className="list-disc list-inside space-y-1 text-gray-300 pl-2 text-sm leading-relaxed">
                    {project.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="absolute top-6 left-[-10px] w-5 h-5 bg-cyan-600 rounded-full border-4 border-white"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
