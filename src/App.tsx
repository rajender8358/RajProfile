import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-inter">
      <Helmet>
        <title>Rajender Reddy Garlapally | Frontend Developer</title>
        <meta name="description" content="Portfolio of Rajender Reddy Garlapally – 7 years experienced React/React Native frontend developer." />
        <meta name="keywords" content="Rajender Reddy Garlapally, React Developer, Frontend Engineer, India, Resume, Portfolio" />
        <meta name="author" content="Rajender Reddy Garlapally" />
        <meta property="og:title" content="Rajender Reddy Garlapally | Portfolio" />
        <meta property="og:description" content="Explore my resume, frontend projects, and technical skills in React, AWS, and more." />
        <meta property="og:url" content="https://rajender-reddy-garlapally.vercel.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;