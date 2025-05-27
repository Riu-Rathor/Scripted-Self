import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import LOGO from '../assets/logo.png';
import CV from '../assets/RIYA SAINI RESUME.pdf';
import { navLinks } from '../data/navLinks';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='bg-gray-900 fixed w-full z-50 shadow-md'>
      <div className='flex justify-between items-center px-5 h-16'>
        <img src={LOGO} alt="Logo" className='h-12' />

        <nav className='hidden md:flex items-center gap-6 text-white'>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-cyan-400 transition-colors duration-300'
            >
              {link.name}
            </Link>
          ))}
          <a
            href={CV}
            download
            className='bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition-colors duration-300'
          >
            Download CV
          </a>
        </nav>

        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-white text-2xl focus:outline-none'>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-gray-800 text-white flex flex-col gap-4 px-5 py-4'>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className='cursor-pointer hover:text-cyan-400 transition-colors duration-300'
            >
              {link.name}
            </Link>
          ))}
          <a
            href={CV}
            download
            onClick={() => setIsOpen(false)}
            className='bg-cyan-500 text-center text-white px-4 py-2 rounded hover:bg-cyan-600 transition-colors duration-300'
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
