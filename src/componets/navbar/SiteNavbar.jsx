import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserTie,
  faPhone,
  faWrench,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import css from "./SiteNavbar.module.css";
import "./NavbarStyle.css";
import { Logo } from "../../assets/Images";
import { NavLink, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import cssContact from "../contact/Contact.module.css";

gsap.registerPlugin(ScrollTrigger);

function SiteNavbar() {
  const location = useLocation();
  const { pathname, hash } = location;

  const [selectorStyle, setSelectorStyle] = useState({});
  const navbarRef = useRef(null);

  // 1. ScrollTrigger Effect: Show/hide on scroll (smooth, less jitter)
  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    let lastScroll = window.scrollY;
    const showNav = () =>
      gsap.to(navbar, {
        y: "0%",
        duration: 0.4,
        ease: "power3.out",
      });

    const hideNav = () =>
      gsap.to(navbar, {
        y: "-100%",
        duration: 0.4,
        ease: "power3.in",
      });

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const currentScroll = self.scroll();
        if (currentScroll > lastScroll && currentScroll > 120) {
          // scrolling down
          hideNav();
        } else {
          // scrolling up or near top
          showNav();
        }
        lastScroll = currentScroll;
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  // 2. Active pill position: smoother, tied to .active_55
  useEffect(() => {
    const updateSelectorPosition = () => {
      const navbar = document.getElementById("meAutoId");
      if (!navbar) return;

      const activeItem = navbar.querySelector(".active_55");
      if (!activeItem) return;

      const activeRect = activeItem.getBoundingClientRect();
      const navbarRect = navbar.getBoundingClientRect();

      setSelectorStyle({
        bottom: `${navbarRect.bottom - activeRect.bottom}px`,
        left: `${activeRect.left - navbarRect.left}px`,
        height: `${activeRect.height}px`,
        width: `${activeRect.width}px`,
      });
    };

    updateSelectorPosition();
    window.addEventListener("resize", updateSelectorPosition);
    return () => window.removeEventListener("resize", updateSelectorPosition);
  }, [hash, pathname]);

  const links = [
    {
      icon: faHome,
      label: "Home",
      to: "/",
      isActive: pathname === "/" && !hash,
      onclick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      icon: faWrench,
      label: "Projects",
      to: "/#projects",
      isActive: pathname === "/" && hash === "#projects",
    },
    {
      icon: faUserTie,
      label: "About",
      to: "/#about",
      isActive: pathname === "/" && hash === "#about",
    },
    {
      icon: faPhone,
      label: "Contact",
      to: `/#${cssContact.contact}`,
      isActive: pathname === "/" && hash === `#${cssContact.contact}`,
    },
  ];

  return (
    <Navbar
      expand="lg"
      id="sticky"
      ref={navbarRef}
      className="site-navbar"
      style={{ padding: "0px" }}
    >
      <Container id="icon">
        <Navbar.Brand href="/" id="logo">
          <Image src={Logo} alt="WebZova logo" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-baseline" id="meAutoId">
            <div className="horiSelector" style={selectorStyle}>
              <div className="left2404" />
              <div className="right2404" />
            </div>

            {links.map((item, idx) => (
              <Nav.Item key={idx}>
                <NavLink
                  to={item.to}
                  onClick={item.onclick}
                  className={() =>
                    `nav-link navLink ${item.isActive ? "active_55" : ""}`
                  }
                >
                  <FontAwesomeIcon icon={item.icon} /> <span>{item.label}</span>
                </NavLink>
              </Nav.Item>
            ))}
            <Nav.Item key={5}>
              <a
                href="/Shubham-JFSD-Resume.pdf"
                download
                className="nav-link navLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} /> <span>Resume</span>
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SiteNavbar;
