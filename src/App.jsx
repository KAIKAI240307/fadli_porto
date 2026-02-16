import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";

import ProjectDocumentation from "./components/ProjectDocumentation";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
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
      <div className="bg-primary min-h-screen text-stone-900 font-sans relative">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <main>
                  <Hero />
                  <Projects />
                  <Services />
                  <About />
                  <Experience />
                  <Contact />
                </main>
                <Footer />
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/project/:id/docs" element={<ProjectDocumentation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
