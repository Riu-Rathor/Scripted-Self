// src/data/skillsData.js
import { FaHtml5, FaCss3Alt, FaReact, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiCplusplus, SiMysql } from 'react-icons/si';
import { MdOutlineDeviceHub, MdOutlineCategory } from 'react-icons/md';
import { GiProcessor } from 'react-icons/gi';

export const skills = [
  { name: 'HTML', icon: FaHtml5, color: '#e34c26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#264de4' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'React', icon: FaReact, color: '#61dbfb' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'Docker', icon: FaDocker, color: '#0db7ed' },
  { name: 'C++', icon: SiCplusplus, color: '#00599c' },
  { name: 'OOPS', icon: MdOutlineCategory, color: '#f472b6' },
  { name: 'DSA', icon: MdOutlineDeviceHub, color: '#22c55e' },
  { name: 'DBMS', icon: GiProcessor, color: '#facc15' },
  { name: 'SQL', icon: SiMysql, color: '#00758f' }
];
