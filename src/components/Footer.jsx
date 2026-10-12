
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faArrowUp,
  faEnvelope,
  faLocationDot,
  faHeart,
  faArrowRight,
  faCode,
  faPhone

} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faXTwitter,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

import "./footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Our Process", href: "#process" },
    { label: "Projects", href: "#projects" },
  ];

  const serviceLinks = [
    { label: "Web Development", href: "#services" },
    { label: "Mobile Applications", href: "#services" },
    { label: "Custom Software", href: "#services" },
    { label: "AI & Automation", href: "#services" },
  ];

  const socialLinks = [
    {
      label: "WhatsApp",
      icon: faWhatsapp,
      href: "http://wa.me/+916382721836",
    },
    {
      label: "GitHub",
      icon: faGithub,
      href: "https://github.com/",
    },
    {
      label: "LinkedIn",
      icon: faLinkedinIn,
      href: "https://www.linkedin.com/",
    },
    {
      label: "Instagram",
      icon: faInstagram,
      href: "https://www.instagram.com/",
    },
    {
      label: "X",
      icon: faXTwitter,
      href: "https://x.com/",
    },
  ];

  return (
    <footer className="prelic-footer">
      {/* Decorative background */}
      <div className="footer-glow footer-glow-one"></div>
      <div className="footer-glow footer-glow-two"></div>

      <div className="footer-container">
        {/* Top CTA */}
        <div className="footer-cta">
          <div className="footer-cta-content">
            <span className="footer-eyebrow">
              <span className="footer-status-dot"></span>
              HAVE AN IDEA?
            </span>

            <h2>
              Let's make something
              <br />
              <span>meaningful together.</span>
            </h2>

            <p>
              Have a challenge to solve or an idea to bring to life?
              Let's turn it into something purposeful.
            </p>
          </div>

          <a href="#contact" className="footer-cta-button">
            Start a conversation
            <span className="footer-cta-icon">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </span>
          </a>
        </div>

        <div className="footer-divider"></div>

        {/* Main footer */}
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand-column">
            <a href="#home" className="footer-brand">
              <span className="footer-brand-symbol">
                <FontAwesomeIcon icon={faCode} />
              </span>

              <span className="footer-brand-name">
                Prelic<span>.</span>
              </span>
            </a>

            <p className="footer-brand-description">
              Build your thoughts into purpose.
              <br />
              We create digital experiences and software
              that help ideas move forward.
            </p>

            <a href="#contact" className="footer-email-link">
              <span className="footer-email-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              Let's discuss your idea
              <FontAwesomeIcon
                icon={faArrowRight}
                className="footer-email-arrow"
              />
            </a>

            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="footer-social-link"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
            
            <a
                href="tel:+919876543210"
                className="footer-direct-contact"
            >
                <span className="footer-direct-icon">
                <FontAwesomeIcon icon={faPhone} />
                </span>

                <span className="footer-direct-text">
                <small>Call us</small>
                <strong>+91 6382721836</strong>
                </span>

                <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="footer-direct-arrow"
                />
            </a>

          </div>

          {/* Explore */}
          <div className="footer-links-column">
            <h3>Explore</h3>

            <ul>
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    <span>{link.label}</span>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="footer-link-arrow"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-links-column">
            <h3>What We Do</h3>

            <ul>
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    <span>{link.label}</span>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="footer-link-arrow"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact-column">
            <h3>Let's Connect</h3>

            <p>
              Every great product starts with a conversation.
              Tell us what you're thinking.
            </p>

            <a href="#contact" className="footer-contact-button">
              Get in touch
              <FontAwesomeIcon icon={faArrowRight} />
            </a>

            <div className="footer-location">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Chennai, Tamil Nadu, India</span>
            </div>
          </div>
        </div>

        <div className="footer-divider footer-bottom-divider"></div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Prelic. All rights reserved.
          </p>

          {/* <p className="footer-made-with">
            Made with <FontAwesomeIcon icon={faHeart} /> and purpose.
          </p> */}

          <a href="#home" className="footer-back-to-top">
            Back to top
            <span>
              <FontAwesomeIcon icon={faArrowUp} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
