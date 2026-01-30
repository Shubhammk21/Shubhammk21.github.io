import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { HomeImage } from "../../assets/Images";

function Home() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Staggered Text Reveal (Slide up + Fade)
      tl.from(".hero-text-element", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      })
        // 2. Image Reveal (Scale up slightly + Fade)
        .from(
          ".hero-image-container",
          {
            scale: 0.9,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.6",
        );

      // 3. Subtle floating animation for the background elements
      gsap.to(".floating-shape", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#020617] px-6 py-2 lg:px-0"
      // Your requested radial gradient background
      style={{
        backgroundImage: `
          radial-gradient(circle at 15% 50%, rgba(56, 189, 248, 0.08), transparent 25%),
          radial-gradient(circle at 85% 30%, rgba(99, 102, 241, 0.08), transparent 25%)
        `,
      }}
    >
      {/* --- Tech Grid Background (Adds Texture) --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* --- LEFT: Text Content --- */}
        <div
          ref={textRef}
          className="z-10 order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
        >
          <div className="hero-text-element mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span>
            </span>
            Available for Freelance
          </div>

          <h1 className="hero-text-element mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-6xl">
            Hi, I'm Shubham <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Web Developer
            </span>
          </h1>

          <p className="hero-text-element mb-8 max-w-lg text-lg leading-relaxed text-slate-400">
            I build fast, scalable web experiences using
            <span className="text-slate-200">
              {" "}
              React, Tailwind, and Spring Boot
            </span>
            . Focused on creating seamless UI/UX for modern businesses.
          </p>

          <div className="hero-text-element flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-sky-400 hover:shadow-[0_0_20px_-5px_rgba(14,165,233,0.5)]"
            >
              View Projects
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/50 px-8 py-3.5 text-sm font-medium text-slate-300 backdrop-blur-sm transition-all hover:border-sky-500/50 hover:text-white hover:shadow-[0_0_20px_-10px_rgba(14,165,233,0.3)]"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* --- RIGHT: Image with "Fade to Dark" Effect --- */}
        <div
          ref={imageRef}
          className="hero-image-container order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative h-[400px] w-[350px] sm:h-[500px] sm:w-[450px]">
            {/* 1. Abstract Background Blobs (Behind Image) */}
            <div className="floating-shape absolute -right-10 top-10 h-32 w-32 rounded-full bg-indigo-500/20 blur-[60px]"></div>
            <div className="floating-shape absolute -left-10 bottom-20 h-40 w-40 rounded-full bg-sky-500/20 blur-[60px]"></div>

            {/* 2. The Image Container */}
            <div className="relative h-full w-full overflow-hidden rounded-b-[3rem] border-b border-slate-800/50 bg-gradient-to-b from-slate-900/0 to-slate-900/50 backdrop-blur-sm">
              {/* YOUR IMAGE */}
              <img
                src={HomeImage}
                alt="Shubham Singh"
                className="h-full w-full object-cover object-center"
                // This 'mask-image' is the MAGIC TRICK. It fades the bottom of the photo
                // into the background so it doesn't look like a cut-out.
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 70%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 70%, transparent 100%)",
                }}
              />

              {/* Optional: Floating "Badge" over the image for 3D effect */}
              <div className="floating-shape absolute bottom-12 right-4 rounded-xl border border-white/10 bg-slate-900/80 p-3 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/20 text-sky-400">
                    {/* React Icon (SVG) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-11.5 -10.23174 23 20.46348"
                      className="h-6 w-6 fill-current animate-[spin_10s_linear_infinite]"
                    >
                      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                      <g stroke="#61dafb" strokeWidth="1" fill="none">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Tech Stack
                    </p>
                    <p className="text-xs font-semibold text-white">
                      React & Spring
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
