import React from 'react';
import './App.css';
import Hero from './sections/Hero/Hero';
import Project from './sections/Projects/Project';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Header from './sections/Header/Header';
import CustomCursor from './common/CustomCursor';
import ScrollProgress from './common/ScrollProgress';
import ScrollToTop from './common/ScrollToTop';

const App = () => {
  return (
    <div>
      <CustomCursor />
      <ScrollProgress />
      <ScrollToTop />
      {/* Bubble animation background */}
      <div className="bubbles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/*portfolio content */}
      <Header />
      <Hero />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
