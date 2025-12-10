import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const experiences = [
  {
    id: 1,
    role: "ShopKeeper",
    company: "WarungFadli",
    period: "2015 - Present",
    description: "Mengelola operasional toko meliputi inventaris, transaksi penjualan, pelayanan pelanggan, pencatatan keuangan sederhana, serta kebersihan dan kerapihan toko."
  },
  {
    id: 2,
    role: "QA Engineer",
    company: "HansKongkow Warmindo",
    period: "Oktober 2024 - Januari 2025",
    description: "Melaksanakan pengujian menyeluruh untuk sistem e-commerce meliputi fungsionalitas pemesanan, payment gateway, autentikasi pengguna, dan responsivitas UI/UX lintas perangkat."
  },
];

const Experience = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(".exp-title", { y: 60, opacity: 0 });
      gsap.set(".exp-item", { y: 40, opacity: 0 });

      // Animate title
      gsap.to(".exp-title", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".experience-section",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        }
      });

      // Animate items
      gsap.to(".exp-item", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".exp-list",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="experience" 
      ref={containerRef} 
      className="experience-section relative z-10 bg-[#faf8f5]"
    >
      {/* Header */}
      <div className="py-20 lg:py-28 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <p className="exp-title text-stone-500 text-sm uppercase tracking-widest mb-6">
            Experience
          </p>
          <h2 className="exp-title text-3xl md:text-4xl lg:text-5xl font-display font-medium text-stone-900 leading-relaxed max-w-3xl">
            My professional journey and the roles that shaped my expertise.
          </h2>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-stone-300 mx-auto max-w-5xl" />

      {/* Experience List */}
      <div className="exp-list py-16 lg:py-24 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto space-y-0">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="exp-item group border-b border-stone-300 py-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-6">
                  <span className="text-stone-400 text-sm font-mono w-6 pt-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-medium text-stone-900">
                      {exp.role}
                    </h3>
                    <p className="text-stone-600 text-sm mt-1">{exp.company}</p>
                    <p className="text-stone-400 text-sm mt-1">{exp.period}</p>
                  </div>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed md:max-w-md md:text-right">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-16" />
    </section>
  );
};

export default Experience;
