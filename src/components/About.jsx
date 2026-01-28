import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tilt from 'react-parallax-tilt';

const About = () => {
  const containerRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);

  // Certification data
  const certifications = [
    {
      id: 1,
      title: "Fundamental DBMS",
      issuer: "Professional Certification",
      image: "/images/certifications/fundamental-dbms.png"
    },
    {
      id: 2,
      title: "Oracle for Beginner",
      issuer: "Oracle Database",
      image: "/images/certifications/oracle-beginer.png"
    },
    {
      id: 3,
      title: "SQL Server for Beginner",
      issuer: "Microsoft SQL Server",
      image: "/images/certifications/sqlserver-beginer.png"
    },
    {
      id: 4,
      title: "Oracle for Intermediate",
      issuer: "Oracle Database",
      image: "/images/certifications/oracle-intermediate.png"
    },
    {
      id: 5,
      title: "SQL Server for Intermediate",
      issuer: "Microsoft SQL Server",
      image: "/images/certifications/sqlserver-intermediate.png"
    },
    {
      id: 6,
      title: "Data Science",
      issuer: "Data Science Certification",
      image: "/images/certifications/data-science.png"
    }
  ];

  // Hard Skills
  const hardSkills = [
    "JavaScript", "Python", "SQL", "Data Analysis",
    "Machine Learning", "Data Science", "TensorFlow", "PowerBI", "Tableau",
    "React", "PostgreSQL"
  ];

  // Soft Skills
  const softSkills = [
    "Problem Solving", "Critical Thinking", "Communication",
    "Team Collaboration", "Adaptability", "Time Management",
    "Attention to Detail", "Creative Thinking"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial hidden state
      gsap.set(".about-intro", { y: 60, opacity: 0 });
      gsap.set(".cert-item", { y: 30, opacity: 0 });
      gsap.set(".hard-skill-tag", { scale: 0.8, opacity: 0 });
      gsap.set(".soft-skill-tag", { scale: 0.8, opacity: 0 });

      // Animate intro text on scroll
      gsap.to(".about-intro", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-intro-section",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        }
      });

      // Animate certification items on scroll
      gsap.to(".cert-item", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".certifications-section",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        }
      });

      // Animate hard skill pills on scroll
      gsap.to(".hard-skill-tag", {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hard-skills-section",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        }
      });

      // Animate soft skill pills on scroll
      gsap.to(".soft-skill-tag", {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".soft-skills-section",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <section
        id="about"
        ref={containerRef}
        className="relative z-10 bg-[#faf8f5]"
      >
        {/* Intro Section with Profile Photo */}
        <div className="about-intro-section py-24 lg:py-32 px-6 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Profile Photo */}
              <div className="about-intro">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-stone-200">
                  <img
                    src="images/projects/pp.png"
                    alt="Fadli Ardiansyah Harahap"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-6">
                <p className="about-intro text-stone-500 text-sm uppercase tracking-widest">
                  About Me
                </p>
                <h2 className="about-intro text-2xl md:text-3xl lg:text-4xl font-display font-medium text-stone-900 leading-relaxed">
                  In the game since 2021, constantly evolving. I've worked with data, algorithms, and everything in between.
                </h2>
                <p className="about-intro text-lg text-stone-600 leading-relaxed">
                  I am a passionate Data Analyst and Machine Learning Engineer with a knack for turning complex data into actionable insights.
                  My approach combines technical expertise with creative problem-solving to build scalable, efficient, and user-centric solutions.
                </p>
                <p className="about-intro text-stone-500 leading-relaxed">
                  Every project starts from the same place: <span className="italic">understanding the data</span>.
                  That's where the magic begins.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-stone-300 mx-auto max-w-5xl" />

        {/* Certifications Section */}
        <div className="certifications-section py-20 lg:py-28 px-6 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <p className="text-stone-500 text-sm uppercase tracking-widest mb-12">
              Certifications
            </p>
            <div className="space-y-0">
              {certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  className="cert-item group border-b border-stone-300 py-5 cursor-pointer hover:bg-stone-100/50 transition-all duration-300 px-2 -mx-2"
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span className="text-stone-400 text-sm font-mono w-6">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="text-xl md:text-2xl font-display font-medium text-stone-900 group-hover:text-stone-700 transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-stone-500 text-sm mt-1">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-stone-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        View Certificate
                      </span>
                      <svg
                        className="w-5 h-5 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-1 transition-all"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-stone-300 mx-auto max-w-5xl" />

        {/* Hard Skills Section */}
        <div className="hard-skills-section py-20 lg:py-28 px-6 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <p className="text-stone-500 text-sm uppercase tracking-widest mb-12">
              Hard Skills
            </p>
            <div className="flex flex-wrap gap-3">
              {hardSkills.map((skill) => (
                <span
                  key={skill}
                  className="hard-skill-tag px-5 py-2.5 bg-stone-200/60 border border-stone-300 rounded-full text-stone-700 text-sm font-medium hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-stone-300 mx-auto max-w-5xl" />

        {/* Soft Skills Section */}
        <div className="soft-skills-section py-20 lg:py-28 px-6 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <p className="text-stone-500 text-sm uppercase tracking-widest mb-12">
              Soft Skills
            </p>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="soft-skill-tag px-5 py-2.5 bg-amber-100/60 border border-amber-300 rounded-full text-amber-800 text-sm font-medium hover:bg-amber-800 hover:text-white hover:border-amber-800 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-16" />
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-stone-200">
              <div>
                <h3 className="text-xl font-display font-medium text-stone-900">
                  {selectedCert.title}
                </h3>
                <p className="text-stone-500 text-sm mt-1">{selectedCert.issuer}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 hover:bg-stone-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Certificate Image */}
            <div className="p-6 bg-stone-50 overflow-auto max-h-[70vh]">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/800x600/f5f5f4/78716c?text=${encodeURIComponent(selectedCert.title)}`;
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
