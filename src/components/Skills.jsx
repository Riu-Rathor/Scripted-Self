import { skills } from '../data/skills';

const Skills = () => {
  return (
    <div id='skills' className="min-h-screen bg-gray-900 text-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-10">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map(({ name, icon: Icon, color }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-500 hover:shadow-cyan-500/50 group"
          >
            <Icon
              size={50}
              className="mb-4 group-hover:animate-pulse"
              style={{ color: color }}
            />
            <span className="text-lg font-semibold">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
