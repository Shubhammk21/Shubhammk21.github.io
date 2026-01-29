import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Legal.css";

export default function PrivacyPolicy() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <main className="legal-page">
      <header className="legal-hero" data-aos="fade-up">
        <p className="legal-kicker">LEGAL</p>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">
          Last updated: {new Date().toDateString()}
        </p>
      </header>

      <section className="legal-card" data-aos="fade-up">
        <p>
          At <strong>WebZova</strong> (“we”, “our”, “us”), we respect your
          privacy and are committed to protecting the personal information you
          share with us.
        </p>
      </section>

      <section className="legal-card" data-aos="fade-up">
        <h2>1. Information We Collect</h2>
        <ul>
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Business or project details</li>
          <li>Technical data (IP address, browser, device)</li>
        </ul>
      </section>

      <section className="legal-card" data-aos="fade-up">
        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>Respond to inquiries and project requests</li>
          <li>Improve our services</li>
          <li>Communicate updates</li>
          <li>Internal analytics and records</li>
        </ul>
        <p className="highlight">
          We do <strong>not</strong> sell or rent your data.
        </p>
      </section>

      <section className="legal-card" data-aos="fade-up">
        <h2>3. Data Security</h2>
        <p>
          Your data is stored securely and accessed only by authorized personnel
          using reasonable technical safeguards.
        </p>
      </section>

      <section className="legal-card" data-aos="fade-up">
        <h2>4. Cookies & Analytics</h2>
        <p>
          We may use cookies and analytics tools to improve site performance.
          You can disable cookies via browser settings.
        </p>
      </section>

      <section className="legal-card" data-aos="fade-up">
        <h2>5. Your Rights (India)</h2>
        <ul>
          <li>Access your personal data</li>
          <li>Request correction or deletion</li>
          <li>Withdraw consent</li>
        </ul>
        <p>
          Contact us at{" "}
          <a href="mailto:contact@webzova.com">contact@webzova.com</a>
        </p>
      </section>

      <section className="legal-card" data-aos="fade-up">
        <h2>6. Jurisdiction</h2>
        <p>
          This policy is governed by the laws of <strong>India</strong>. All
          disputes fall under Indian courts.
        </p>
      </section>
    </main>
  );
}
