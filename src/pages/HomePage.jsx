// import SiteNavbar from "../componet/navbar/SiteNavbar";
import AboutUs from "../componets/about/AboutUs";
import ContactM from "../componets/contact/ContactM";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "../componets/home/Home";
import Project from "../componets/work/Project";
import TechStack from "../componets/tech-Stack/TechStack";
import WhatDo from "../componets/services/WhatDo";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      const navbarHeight =
        document.querySelector(".navbar")?.offsetHeight || 80;
      if (element) {
        const y =
          element.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;
        // Scroll to the element with a smooth animation
        gsap.to(window, {
          duration: 1,
          scrollTo: y,
          ease: "power2.out",
        });
      }
    }
  }, [location]);
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Home></Home>
        <WhatDo></WhatDo>
        <TechStack></TechStack>
        <AboutUs></AboutUs>
        <Project></Project>

        <ContactM></ContactM>
      </div>
    </div>
  );
}
