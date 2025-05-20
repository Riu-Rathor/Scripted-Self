import React from 'react';
import Header from './Header';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import CodingProfiles from './CodingProfiles';
import Contact from './Contact';
import Footer from './Footer';
import Skills from './Skills';

const Home = () => {
  return (
    <div>
        <Header/>
        <About/>
        <Education/>
        <Experience/>
        <Skills/>
        <CodingProfiles/>
        <Contact/>
        {/* <Footer/> */}
    </div>
  )
}

export default Home