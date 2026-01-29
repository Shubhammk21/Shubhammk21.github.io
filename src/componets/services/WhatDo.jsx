import React from "react";
import {
  WhatWeDoImage1,
  WhatWeDoImage2,
  WhatWeDoImage3,
} from "../../assets/Images";

// Standard "Check" icon
const CheckDoubleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-3 w-3"
  >
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M19.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
      clipRule="evenodd"
    />
  </svg>
);

export default function WhatDo() {
  const expertise = [
    {
      title: "Frontend Development",
      description:
        "I craft responsive, accessible, and performance-focused user interfaces using modern frontend technologies.",
      points: [
        "React (Hooks, SPA architecture)",
        "Tailwind CSS & modern UI patterns",
        "Reusable components & clean layouts",
        "Mobile-first & cross-browser support",
        "Smooth animations with GSAP",
      ],
      icon: WhatWeDoImage1,
    },
    {
      title: "Backend & APIs",
      description:
        "I build secure, scalable backend systems that power real-world applications and dashboards.",
      points: [
        "Java & Spring Boot",
        "RESTful API design",
        "Authentication & authorization",
        "Database integration (SQL)",
        "Clean service-layer architecture",
      ],
      icon: WhatWeDoImage2,
    },
    {
      title: "Product Thinking",
      description:
        "Beyond code, I focus on building products that solve problems and scale with real users.",
      points: [
        "UI/UX-focused development",
        "Performance optimization",
        "Maintainable code structure",
        "Version control with Git",
        "Deployment-ready builds",
      ],
      icon: WhatWeDoImage3,
    },
  ];

  return (
    <section
      id="Services"
      // FIX 1: Added 'relative' so the absolute grid stays inside
      // FIX 2: Fixed the missing ')' at the end of the gradient string
      className="relative bg-[radial-gradient(circle at top,  #17181a 0%,  #101013 55%,  #060609 100%] py-20 lg:py-24"
    >
      {/* FIX 3: Changed 'class' to 'className' */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="mx-auto max-w-[1180px] px-6 relative z-10">
        {/* --- Header Section --- */}
        <div className="mx-auto mb-16 max-w-[720px] text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-gray-500">
            WHAT WE DO
          </p>
          <h2 className="mb-3 text-3xl font-extrabold sm:text-4xl">
            <span className="bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
              Turning ideas into reliable <br className="hidden sm:block" />
            </span>
            <span className="text-sky-400">web applications</span>
          </h2>
          <p className="mx-auto max-w-lg text-[0.98rem] text-gray-400">
            I focus on building clean, scalable, and user-friendly applications
            using modern web technologies.
          </p>
        </div>

        {/* --- Card Grid --- */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          {expertise.map((card, key) => (
            <div
              key={key}
              className="group relative overflow-hidden rounded-[24px] border border-slate-400/30 bg-[radial-gradient(circle_at_top,#17181a_0%,#101013_55%,#060609_100%)] text-gray-200 shadow-[0_22px_45px_rgba(0,0,0,0.85)] transition-all duration-300 hover:-translate-y-2 hover:border-sky-400 hover:bg-[radial-gradient(circle_at_top,#1f2124_0%,#111217_60%,#050507_100%)] hover:shadow-[0_26px_60px_rgba(56,189,248,0.24)]"
            >
              {/* Subtle Top Glow Effect */}
              <div className="pointer-events-none absolute -inset-[40%] -top-[40%] bg-[radial-gradient(circle_at_top_center,rgba(56,189,248,0.16),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              {/* Card Body */}
              <div className="relative p-8 pb-0">
                <div className="mb-5 flex h-[110px] w-[110px] items-center justify-center rounded-full shadow-[0_10px_30px_rgba(15,23,42,0.9)]">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="h-[104px] w-[104px] object-contain"
                  />
                </div>

                <h3 className="mb-2.5 text-[1.2rem] font-bold text-gray-200">
                  {card.title}
                </h3>
                <p className="mb-6 text-[0.96rem] text-[#cbd5f5]">
                  {card.description}
                </p>
              </div>

              {/* Feature List */}
              <ul className="relative border-t border-gray-800/90 bg-transparent">
                {card.points.map((p, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 border-t border-gray-800/75 px-6 py-2.5 text-[0.92rem] text-gray-200 first:border-0"
                  >
                    <span className="flex h-5 w-[30px] shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-sky-400">
                      <CheckDoubleIcon />
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
