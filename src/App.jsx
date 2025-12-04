import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';
import ProjectDetail from './components/ProjectDetail';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-slate-950 min-h-screen text-white selection:bg-neon selection:text-slate-950 font-sans relative">
        <InteractiveBackground />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <main>
                  <Hero />
                  <About />
                  <Projects />
                  <Skills />
                  <Experience />
                  <Contact />
                </main>
                <Footer />
              </>
            } />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
