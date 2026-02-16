import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const experiences = [
  {
    id: 1,
    role: "ShopKeeper",
    company: "WarungFadli",
    period: "2015 - Present",
    description:
      "Mengelola operasional toko meliputi inventaris, transaksi penjualan, pelayanan pelanggan, pencatatan keuangan sederhana, serta kebersihan dan kerapihan toko.",
  },
  {
    id: 2,
    role: "QA Engineer",
    company: "HansKongkow Warmindo",
    period: "Oktober 2024 - Januari 2025",
    description:
      "Melaksanakan pengujian menyeluruh untuk sistem e-commerce meliputi fungsionalitas pemesanan, payment gateway, autentikasi pengguna, dan responsivitas UI/UX lintas perangkat.",
  },
];

const Experience = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".exp-title", { y: 60, opacity: 0 });
      gsap.set(".exp-item", { y: 40, opacity: 0 });

      gsap.to(".exp-title", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".experience-section",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

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
        },
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
        <div className="max-w-7xl mx-auto">
          <p className="exp-title text-stone-400 text-xs uppercase tracking-[0.25em] mb-6 font-medium">
            Experience
          </p>
          <h2 className="exp-title text-3xl md:text-4xl lg:text-6xl font-display font-bold text-stone-900 leading-tight max-w-4xl uppercase tracking-tight">
            The roles that shaped my expertise
            <span className="text-stone-400">.</span>
          </h2>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-stone-200 mx-auto max-w-7xl" />

      {/* Experience List */}
      <div className="exp-list py-16 lg:py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-0">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="exp-item group border-b border-stone-200 py-8 hover:bg-stone-100/30 transition-all duration-300 px-4 -mx-4 rounded-lg"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-6">
                  <span className="text-stone-300 text-sm font-mono w-6 pt-1 font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-stone-900 group-hover:text-stone-600 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-stone-500 text-sm mt-1">{exp.company}</p>
                    <p className="text-stone-400 text-sm mt-1 font-mono">
                      {exp.period}
                    </p>
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

      <div className="h-16" />
    </section>
  );
};

export default Experience;
