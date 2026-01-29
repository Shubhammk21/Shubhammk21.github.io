// src/pages/ContactM/ContactM.jsx
import React, { useState } from "react";
import css from "./Contact.module.css";
import Button from "../../common/Button";
import Loader from "../../common/Loader"; // adjust path if needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import ContactImage from "../../assets/contact.svg";
import emailjs from "@emailjs/browser";

function ContactM() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "number") {
      const digitsOnly = value.replace(/[^\d]/g, "");
      setFormData((s) => ({ ...s, [name]: digitsOnly }));
      return;
    }
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const validateForm = () => {
    const errs = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      errs.email = "Invalid email format";
    if (!formData.number.trim()) errs.number = "Phone number is required";
    else if (formData.number.length !== 10)
      errs.number = "Phone number should be 10 digits";
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fErr = validateForm();
    setErrors(fErr);
    if (Object.keys(fErr).length > 0) return;

    // Abort after 10s
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      setSending(true);
      emailjs
        .send(
          "service_e7i33ir", // Replace with your EmailJS service ID
          "template_0vxmztr", // Replace with your EmailJS template ID
          formData,
          "1VZYFTh3pla1n66To" // Replace with your EmailJS user ID
        )
        .then((response) => {
          setIsSubmitted(true);
          console.log("SUCCESS!", response.status, response.text, formData);
          setFormData({ name: "", email: "", number: "", message: "" });
        })
        .catch((error) => {
          console.error("Server returned non-OK status", res.status, error);
          alert(`Server error: ${res.status}. ${text || "Try again later."}`);
          return;
        });

      clearTimeout(timeoutId);
    } catch (err) {
      if (err.name === "AbortError") {
        console.error("Request timed out", err);
        alert("Request timed out. Check your connection or try again.");
      } else {
        console.error("Error sending contact:", err);
        alert(
          "Network error. Please check your connection or try again later."
        );
      }
    } finally {
      clearTimeout(timeoutId);
      setSending(false);
    }
  };

  return (
    <div id={css.contact}>
      <Loader visible={sending} text="Sending your message..." />
      <div className={css.contactHeader}>
        <h1 className={css.contactTitle}>
          Let’s talk about your next project.
        </h1>
        <p className={css.contactSubtitle}>
          Share a bit about what you’re building, and we’ll get back to you
          within 24 hours.
        </p>
      </div>

      <div className={css.contactCon}>
        <div className={css.contactImg}>
          <img src={ContactImage} alt="Contact WebZova team" />
        </div>

        <div className={css.contactAll}>
          <div className={css.contactIcon}>
            <Button link={"mailto:Shubham@WebZova.com"}>
              <span className={css.conFont}>
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </span>
            </Button>
            <Button link={"https://www.instagram.com/webzova/"}>
              <span className={css.conFont}>
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </span>
            </Button>
            <Button link={"https://www.linkedin.com/company/webzova"}>
              <span className={css.conFont}>
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </span>
            </Button>
            <Button link={"https://wa.me/918989558919"}>
              <span className={css.conFont}>
                <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
              </span>
            </Button>
          </div>

          <div>
            {isSubmitted ? (
              <p className={css.successMsg}>
                Thank you for reaching out. We’ll review your message and get
                back to you shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div>
                  <input
                    name="name"
                    className={css.inputTag}
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-label="Full name"
                  />
                  {errors.name && <p className={css.error}>{errors.name}</p>}
                </div>

                <div>
                  <input
                    name="email"
                    className={css.inputTag}
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-label="Email address"
                  />
                  {errors.email && <p className={css.error}>{errors.email}</p>}
                </div>

                <div>
                  <input
                    name="number"
                    className={css.inputTag}
                    type="text"
                    inputMode="tel"
                    placeholder="Phone Number (10 digits)"
                    maxLength={10}
                    value={formData.number}
                    onChange={handleChange}
                    aria-label="Phone number"
                  />
                  {errors.number && (
                    <p className={css.error}>{errors.number}</p>
                  )}
                </div>

                <div className="input_message">
                  <textarea
                    name="message"
                    className={css.inputTagTA}
                    placeholder="Your Message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    aria-label="Message"
                  ></textarea>
                  {errors.message && (
                    <p className={css.error}>{errors.message}</p>
                  )}
                </div>

                <div>
                  <Button type="submit" style={{ width: "97%" }}>
                    Send Message
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactM;
