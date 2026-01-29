import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  GitBranch,
  Terminal,
  Cpu,
  Globe,
  Github,
  ExternalLink,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const workflowItems = [
  { text: "Git-based workflow", icon: <GitBranch className="w-4 h-4" /> },
  { text: "Clean commit history", icon: <Terminal className="w-4 h-4" /> },
  { text: "Feature branching", icon: <Cpu className="w-4 h-4" /> },
  { text: "Continuous Integration", icon: <Globe className="w-4 h-4" /> },
];

// --- SMART STATS CARD (With Loading & Error State) ---
const GitHubStatsCard = ({ liveUrl, altText }) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full rounded-2xl border border-slate-800 bg-[#0a0f1e] shadow-2xl overflow-hidden group min-h-[160px] flex items-center justify-center">
      {/* Background Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

      {/* Loading Spinner */}
      {isLoading && !isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0a0f1e] z-20">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-slate-700 border-t-sky-400"></div>
        </div>
      )}

      {!isError ? (
        <img
          src={liveUrl}
          alt={altText}
          className={`w-full h-auto relative z-10 transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsError(true);
            setIsLoading(false);
          }}
        />
      ) : (
        // Fallback Button
        <a
          href="https://github.com/Shubhammk21"
          target="_blank"
          rel="noreferrer"
          className="relative z-10 flex flex-col items-center gap-2 p-6 text-center group-hover:scale-105 transition-transform"
        >
          <Github className="w-8 h-8 text-slate-500 group-hover:text-white transition-colors" />
          <p className="font-semibold text-slate-300">View GitHub Profile</p>
        </a>
      )}
    </div>
  );
};

function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-animate", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // STRICT: Background color preserved
    <section
      ref={containerRef}
      id="about"
      className="relative bg-[radial-gradient(circle at top,  #17181a 0%,  #101013 55%,  #060609 100%] py-24 px-6 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
        {/* LEFT: About Content */}
        <div className="order-2 lg:order-1">
          <p className="about-animate mb-4 text-xs font-bold uppercase tracking-[0.22em] text-gray-500">
            ABOUT ME
          </p>

          <h2 className="about-animate mb-6 text-3xl font-extrabold text-white sm:text-4xl leading-tight">
            Developer who values <br />
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              clean code & consistency
            </span>
          </h2>

          <p className="about-animate mb-6 text-lg leading-relaxed text-slate-400">
            I’m a web developer focused on building modern, scalable
            applications using{" "}
            <span className="text-slate-200 font-medium">
              React, Tailwind CSS, and Spring Boot
            </span>
            . I enjoy turning complex ideas into reliable and maintainable
            software.
          </p>

          <p className="about-animate mb-8 text-base leading-relaxed text-slate-400">
            I actively use <span className="text-white">Git and GitHub</span> in
            all my projects for version control, collaboration, and continuous
            improvement.
          </p>

          <div className="about-animate grid gap-4 sm:grid-cols-2">
            {workflowItems.map((item, i) => (
              <div
                key={i}
                className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition-all hover:border-sky-500/30 hover:bg-slate-800/60"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 group-hover:text-sky-300 group-hover:bg-sky-500/20 transition-colors">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: GitHub Stats (New Working API) */}
        <div className="about-animate order-1 lg:order-2 flex flex-col gap-6">
          {/* Card 1: Your Profile Details (With bg_color adjusted to 020617 to match your site) */}
          <GitHubStatsCard
            liveUrl="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=shubhammk21&theme=dracula&bg_color=020617"
            altText="GitHub Profile Details"
          />

          {/* Card 2: Repos/Languages (Added to match the 2-card layout) */}
          <GitHubStatsCard
            liveUrl="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=shubhammk21&theme=dracula&bg_color=020617"
            altText="GitHub Languages"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
