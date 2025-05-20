import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import LOGO from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-gray-900 fixed w-full z-50'>
      <div className='flex justify-between items-center px-5 h-16'>
        <img src={LOGO} className='h-12' />

        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-white focus:outline-none'>
            ☰
          </button>
        </div>

        <ul className='hidden md:flex text-white gap-5'>
          <Link to="#about" smooth={true} duration={500} className='cursor-pointer hover:text-cyan-400 transition-colors duration-300'>
            About
          </Link>
          <Link to="#education" smooth={true} duration={500} className='cursor-pointer hover:text-cyan-400 transition-colors duration-300'>
            Education
          </Link>
          <Link to="#experience" smooth={true} duration={500} className='cursor-pointer hover:text-cyan-400 transition-colors duration-300'>
            Experience
          </Link>
          <Link to="#skills" smooth={true} duration={500} className='cursor-pointer hover:text-cyan-400 transition-colors duration-300'>
            Skills
          </Link>
          <Link to="#contact" smooth={true} duration={500} className='cursor-pointer hover:text-cyan-400 transition-colors duration-300'>
            Contact
          </Link>
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className='md:hidden flex flex-col bg-gray-800 text-white p-5 gap-3'>
          <Link to="#about" smooth={true} duration={500} onClick={() => setIsOpen(false)} className='cursor-pointer hover:text-cyan-400 transition-colors duration-300'>
            About
          </Link>
          <Link to="#education" smooth={true} duration={500} onClick={() => setIsOpen(false)} className='cursor-pointer hover:text-cyan-400 transition-colors duration-300'>
            Education
          </Link>
          <Link to="#experience" smooth={true} duration={500} onClick={() => setIsOpen(false)} className='cursor-pointer hover:text-cyan-400 transition-colors duration-300'>
            Experience
          </Link>
          <Link to="#skills" smooth={true} duration={500} onClick={() => setIsOpen(false)} className='cursor-pointer hover:text-cyan-400 transition-colors duration-300'>
            Skills
          </Link>
          <Link to="#contact" smooth={true} duration={500} onClick={() => setIsOpen(false)} className='cursor-pointer hover:text-cyan-400 transition-colors duration-300'>
            Contact
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Header;
