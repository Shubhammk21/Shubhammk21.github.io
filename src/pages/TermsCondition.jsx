import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Legal.css";

export default function TermsConditions() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="legal-page">
      <header className="legal-hero" data-aos="fade-up">
        <p className="legal-kicker">LEGAL</p>
        <h1>Terms & Conditions</h1>
        <p className="legal-updated">
          Last updated: {new Date().toDateString()}
        </p>
      </header>

      <section className="legal-card" data-aos="fade-up">
        <h2>1. Services</h2>
        <p>
          WebZova provides web development, mobile apps, custom software, and
          related digital services based on agreed scopes and timelines.
        </p>
      </section>

      <section className="legal-card" data-aos="fade-up">
        <h2>2. Intellectual Property</h2>
        <p>
          All designs, code, and materials remain WebZova’s intellectual
          property unless explicitly transferred in writing.
        </p>
      </section>

      <section className="legal-card" data-aos="fade-up">
        <h2>3. Client Responsibilities</h2>
        <ul>
          <li>Provide accurate requirements</li>
          <li>Timely communication</li>
          <li>Payments as agreed</li>
        </ul>
      </section>

      <section className="legal-card" data-aos="fade-up">
        <h2>4. Payments & GST</h2>
        <ul>
          <li>Prices exclude taxes unless stated</li>
          <li>GST applied as per Indian law</li>
          <li>Invoices payable within agreed timelines</li>
        </ul>
      </section>

      <section className="legal-card" data-aos="fade-up">
        <h2>5. Limitation of Liability</h2>
        <p>
          WebZova is not liable for indirect or consequential damages arising
          from service use.
        </p>
      </section>

      <section className="legal-card" data-aos="fade-up">
        <h2>6. Governing Law</h2>
        <p>
          These terms are governed by the laws of <strong>India</strong>, with
          jurisdiction limited to Indian courts.
        </p>
      </section>
    </main>
  );
}
