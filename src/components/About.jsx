import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tilt from 'react-parallax-tilt';

const About = () => {
  const containerRef = useRef(null);
  const skills = [
    "JavaScript", "Python", "SQL", "Data Analysis", "Data Science", "Machine Learning", "TensorFlow", "PowerBI", "Tableau"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        }
      });

      gsap.from(".skill-pill", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".skills-container",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Card Side */}
          <div className="about-content flex justify-center">
            <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
                transitionSpeed={2000}
                className="w-full max-w-md"
            >
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-slate-700/50 shadow-2xl">
                    {/* Card Header/Background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
                    
                    <div className="p-8 flex flex-col items-center text-center relative z-10">
                        {/* Name & Title */}
                        <h3 className="text-4xl font-display font-bold text-white mb-1">
                            Fadli Ardiansyah Harahap
                        </h3>
                        <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-8">
                    {/*Placeholder*/}
                        </p>

                        {/* Profile Image */}
                        <div className="relative w-64 h-64 mb-8 group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-900 bg-slate-800">
                                {/* Placeholder for Profile Image - Replace with actual image */}
                                <img 
                                    src="src/assets/profile web.jpg" 
                                    alt="Profile" 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>

                        {/* Card Footer/Decorations */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-6" />
                        
                        <div className="flex gap-4">
                            <div className="w-2 h-2 rounded-full bg-slate-700" />
                            <div className="w-2 h-2 rounded-full bg-slate-700" />
                            <div className="w-2 h-2 rounded-full bg-slate-700" />
                        </div>
                    </div>
                </div>
            </Tilt>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="about-content text-3xl md:text-4xl font-display font-bold mb-6">
              About <span className="text-neon">Me</span>
            </h2>
            <p className="about-content text-slate-400 text-lg mb-6 leading-relaxed">
              I am a passionate Data Analyst and Machine Learning Engineer with a knack for turning complex data into actionable insights. 
              With a strong foundation in both software development and data science, I bridge the gap between raw data and meaningful solutions.
            </p>
            <p className="about-content text-slate-400 text-lg mb-8 leading-relaxed">
              My approach combines technical expertise with creative problem-solving to build scalable, efficient, and user-centric applications.
            </p>

            <div className="skills-container flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-pill px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-sm text-slate-300 hover:border-neon hover:text-neon transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="about-content mt-10 grid grid-cols-3 gap-6">
              <div>
                {/* <h3 className="text-3xl font-bold text-white">3+</h3>
                <p className="text-sm text-slate-500 mt-1">Years Exp.</p> */}
              </div>
              <div>
                {/* <h3 className="text-3xl font-bold text-white">20+</h3>
                <p className="text-sm text-slate-500 mt-1">Projects</p> */}
              </div>
              <div>
                {/* <h3 className="text-3xl font-bold text-white">15+</h3>
                <p className="text-sm text-slate-500 mt-1">Clients</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
