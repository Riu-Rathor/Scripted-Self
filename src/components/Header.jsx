import { HashLink } from 'react-router-hash-link';
import LOGO from '../assets/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-gray-800 pl-5 pr-10 h-16 fixed w-full'>
        <div >
            <img src={LOGO} className='h-12'/>
        </div>

        <div>
          <ul className='text-white flex gap-5'>
            <Link to="#about" smooth={true} duration={500} className='cursor-pointer'>About</Link>
            <Link to="#education" smooth={true} duration={500} className='cursor-pointer'>Education</Link>
            <Link to="#experience" smooth={true} duration={500} className='cursor-pointer'>Experience</Link>
            <Link to="#skills" smooth={true} duration={500} className='cursor-pointer'>Skills</Link>
            <Link to="#contact" smooth={true} duration={500} className='cursor-pointer'>Contact</Link>
          </ul>
        </div>
    </div>
  )
}

export default Header