import { ReactTyped } from "react-typed";
import PROFILE_IMAGE from '../assets/profile-image.jpg';

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            👋 Hey, I’m <span className="text-cyan-400">Rishit</span>.
          </h1>

          <h2 className="text-2xl text-cyan-300 mb-6">
            <ReactTyped
              strings={[
                'Software Engineer',
                'Frontend Developer',
                'React Developer',
                'Problem Solver',
              ]}
              typeSpeed={60}
              backSpeed={40}
              backDelay={1500}
              loop
            />
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-6">
            A passionate <span className="text-cyan-300 font-medium">Frontend Developer</span> crafting engaging,
            accessible, and performant web interfaces. Based in India, I’ve spent the last year turning
            UI challenges into seamless experiences.
          </p>

          <p className="text-md text-gray-400 mb-6">
            Whether it’s React, Tailwind, or APIs—I love working on products that bring real value to users.
            Always curious, constantly learning, and building with care.
          </p>

          <div className="flex gap-4 mt-4">
            <a href="#projects" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition">
              View My Work
            </a>
            <a href="#contact" className="border border-cyan-500 text-cyan-500 px-6 py-2 rounded-lg hover:bg-cyan-500 hover:text-white transition">
              Contact Me
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,255,255,0.5)] border-4 border-cyan-500 transform hover:scale-105 transition duration-500">
            <img src={PROFILE_IMAGE} alt="Rishit" className="object-cover w-full h-full" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
