import { SECTION_HEADERS } from "../constants";
import { education } from "../data/education";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-gray-900 text-white py-16 px-6 w-full"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">
          🎓 {SECTION_HEADERS.EDUCATION}
        </h2>

        <div className="relative before:absolute before:top-10 before:bottom-10 before:left- md:before:left-1/2 before:w-1 before:bg-cyan-600 before:rounded">
          <ul className="space-y-20 md:space-y-0 flex flex-col">
            {education.map(
              (
                {
                  id,
                  degree,
                  institution,
                  year,
                  cgpa,
                  marks,
                  description,
                  icon: Icon,
                },
                idx
              ) => (
                <li
                  key={id}
                  className={`relative md:max-w-md p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-cyan-600 transition-shadow duration-500
          ${
            idx % 2 === 0
              ? "md:mr-auto md:text-right left-8"
              : "md:ml-auto md:text-left right-7"
          }
          ${idx === 1 ? "md:mt-20" : ""} 
        `}
                >
                  <span
                    className={`absolute -left-7md:left-auto md:right-[-28px] w-8 h-8 bg-cyan-500 rounded-full shadow-lg flex items-center justify-center
            ${
              idx % 2 === 0
                ? "md:right-[-32px] md:top-[45%]"
                : "md:left-[-32px] md:top-[45%]"
            }
          `}
                    style={{ zIndex: 10 }}
                  >
                    <Icon className="text-cyan-400 w-5 h-5" />
                  </span>

                  <h3 className="text-xl font-semibold text-cyan-300 mb-1">
                    {degree}
                  </h3>
                  <p className="text-gray-400 italic mb-2">{institution}</p>
                  <p className="text-gray-500 text-sm mb-2">{year}</p>

                  {(cgpa || marks) && (
                    <p className="text-gray-300 font-medium mb-3">
                      {cgpa && <span>CGPA: {cgpa}</span>}
                      {cgpa && marks && <span> | </span>}
                      {marks && <span>Marks: {marks}</span>}
                    </p>
                  )}

                  <p className="text-gray-300">{description}</p>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
