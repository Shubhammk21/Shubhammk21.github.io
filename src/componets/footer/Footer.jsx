import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedinIn, // Used 'In' for better styling
  faInstagram,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneVolume,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import { footer } from "../../assets/Images";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: faWhatsapp, href: "https://wa.me/918989558919", label: "WhatsApp" },
    {
      icon: faLinkedinIn,
      href: "https://www.linkedin.com/",
      label: "LinkedIn",
    },
    { icon: faGithub, href: "https://github.com/", label: "GitHub" },
    { icon: faXTwitter, href: "https://x.com/", label: "X (Twitter)" },
    {
      icon: faInstagram,
      href: "https://www.instagram.com/",
      label: "Instagram",
    },
  ];

  return (
    // STRICT: Preserving bg-[#020617]
    <footer className="relative bg-[#020617] text-slate-300 overflow-hidden">
      {/* --- Pro Background Effects --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-sky-500/5 blur-[100px] rounded-full"></div>
      </div>

      {/* Top Section */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Left: Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              What I Build
            </h3>
            <ul className="space-y-2.5 text-[0.95rem] text-slate-400 ps-0">
              <li>
                <a
                  href="#services"
                  className="hover:text-sky-400 transition-colors"
                >
                  Web Application Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-sky-400 transition-colors"
                >
                  Frontend UI Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-sky-400 transition-colors"
                >
                  Backend API Development
                </a>
              </li>
            </ul>
          </div>

          {/* Center: Brand */}
          <div className="flex flex-col items-center text-center">
            <img
              src={footer}
              alt="Shubham Singh"
              className="mb-5 w-32 drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]"
            />
            <h2 className="text-2xl font-extrabold text-white">
              Shubham Singh
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
              Building clean, scalable, and user-focused web applications using
              modern technologies.
            </p>
          </div>

          {/* Right: Socials */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Connect With Me
            </h3>
            <p className="mb-5 text-sm text-slate-400">
              Open to opportunities, collaborations, and freelance work.
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/50 bg-slate-900/50 text-slate-400 transition-all duration-300 hover:border-sky-500/50 hover:text-white hover:scale-110 overflow-hidden"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
                  <FontAwesomeIcon
                    icon={link.icon}
                    className="relative z-10 h-4 w-4"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-slate-800/60 pt-6 sm:flex-row">
          <a
            href="tel:+918989558919"
            className="flex items-center gap-3 group transition-colors hover:text-sky-400"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20">
              <FontAwesomeIcon icon={faPhoneVolume} className="h-3.5 w-3.5" />
            </div>
            <span className="text-sm font-medium">+91 89895 58919</span>
          </a>

          <a
            href="mailto:shubham@email.com"
            className="flex items-center gap-3 group transition-colors hover:text-sky-400"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20">
              <FontAwesomeIcon icon={faEnvelopeOpen} className="h-3.5 w-3.5" />
            </div>
            <span className="text-sm font-medium">shubham@email.com</span>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-slate-800/60 py-6 text-center">
        <p className="text-xs font-medium text-slate-500">
          © {currentYear} Shubham Singh. All rights reserved.{" "}
          <span className="hidden sm:inline">|</span> Crafted with{" "}
          <span className="text-sky-400">React & Tailwind</span>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
