import React from 'react';
import Header from './Header';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import CodingProfile from './CodingProfile';
import Contact from './Contact';
import Footer from './Footer';
import Skills from './Skills';
import Projects from './Projects';

const Home = () => {
  return (
    <div>
        <Header/>
        <About/>
        <Education/>
        <Experience/>
        <Skills/>
        <CodingProfile/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home