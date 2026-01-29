import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Server, Database, Wrench } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-3 h-3"
  >
    <path
      fillRule="evenodd"
      d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
      clipRule="evenodd"
    />
  </svg>
);

const stack = [
  {
    title: "Frontend",
    items: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Responsive UI"],
    icon: <Code2 className="h-6 w-6" />,
  },
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "REST APIs", "Auth & Security"],
    icon: <Server className="h-6 w-6" />,
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MySQL", "Database Design", "Data Modeling"],
    icon: <Database className="h-6 w-6" />,
  },
  {
    title: "Tools & Workflow",
    items: ["Git & GitHub", "GSAP Animations", "Vite", "Clean Code"],
    icon: <Wrench className="h-6 w-6" />,
  },
];

const TechCard = ({ group, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="tech-card group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30 p-8 transition-colors hover:border-sky-500/50"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(14, 165, 233, 0.1), transparent 40%)`,
        }}
      />

      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 ring-1 ring-sky-500/20 transition-all group-hover:bg-sky-500 group-hover:text-white">
        {group.icon}
      </div>

      <h3 className="mb-4 text-lg font-bold text-white transition-colors group-hover:text-sky-400">
        {group.title}
      </h3>

      <ul className="space-y-2.5">
        {group.items.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-3 text-sm text-slate-400 group-hover:text-slate-200 transition-colors"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-800/50 text-sky-500/80 group-hover:bg-sky-500/20 group-hover:text-sky-400 transition-colors">
              <CheckIcon />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

function TechStack() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tech-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tech"
      className="relative bg-[#020617] py-24 px-6 overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* --- IMPROVED HEADER --- */}
        <div className="mx-auto mb-16 max-w-[720px] text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-gray-500">
            TECH STACK
          </p>
          <h2 className="mb-3 text-3xl font-extrabold sm:text-4xl">
            <span className="bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
              Tools I use to build{" "}
            </span>
            <span className="text-sky-400">reliable web apps</span>
          </h2>
          <p className="mx-auto max-w-lg text-[0.98rem] text-gray-400">
            A practical and modern stack focused on performance,
            maintainability, and clean user experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((group, index) => (
            <TechCard key={index} group={group} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-400">
            Want to see how I use this stack in real projects?
            <a
              href="#projects"
              className="group ml-2 inline-flex items-center font-medium text-sky-400 hover:text-sky-300 transition-colors"
            >
              View Projects
              <span className="ml-1 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
