import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { EMAIL_ID, GITHUB_URL, INSTAGRAM_URL, LINKED_URL } from '../constants';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-cyan-300 px-6 py-6'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left'>

        <div>
          <h2 className='text-lg font-semibold'>Rishit Singh</h2>
          <p className='text-sm'>&copy; 2025 Rishit Singh. All rights reserved.</p>
        </div>

        <div>
          <h3 className='font-semibold mb-2'>Connect with me</h3>
          <div className='flex justify-center md:justify-start gap-6 text-2xl'>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition' title="GitHub">
              <FaGithub className="text-white" />
            </a>
            <a href={LINKED_URL} target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition' title="LinkedIn">
              <FaLinkedin className="text-blue-500" />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition' title="Instagram">
              <FaInstagram className="text-pink-500" />
            </a>
            <a href={`mailto:${EMAIL_ID}`} className='hover:scale-110 transition' title="Email">
              <FaEnvelope className="text-red-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
