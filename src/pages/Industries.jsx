
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./industries.css";

const industries = [
  {
    id: "ecommerce",
    number: "01",
    title: "E-commerce",
    category: "RETAIL & COMMERCE",
    description:
      "Create smoother shopping experiences, simplify order management, and turn more visitors into customers.",
    icon: "🛒",
    accent: "mint",
    solutions: ["Online stores", "Payment integration", "Order management"],
  },
  {
    id: "manufacturing",
    number: "02",
    title: "Manufacturing",
    category: "INDUSTRIAL & OPERATIONS",
    description:
      "Connect your operations with digital tools for production tracking, inventory, and everyday workflows.",
    icon: "▥",
    accent: "lime",
    solutions: ["Inventory systems", "Production tracking", "Operations dashboards"],
  },
  {
    id: "education",
    number: "03",
    title: "Education",
    category: "LEARNING & DEVELOPMENT",
    description:
      "Make learning and administration easier with accessible platforms built for students and educators.",
    icon: "▱",
    accent: "sky",
    solutions: ["Learning platforms", "Student portals", "Progress tracking"],
  },
  {
    id: "business",
    number: "04",
    title: "Business Operations",
    category: "PRODUCTIVITY & GROWTH",
    description:
      "Reduce repetitive work and bring your business data, processes, and teams into one connected system.",
    icon: "▥",
    accent: "peach",
    solutions: ["Business dashboards", "Workflow automation", "Custom management tools"],
  },
];

export default function Industries() {
  const [activeIndustry, setActiveIndustry] = useState("ecommerce");

  const active = industries.find(
    (industry) => industry.id === activeIndustry
  );

  return (
    <section
      className={`industries-section theme-${active.accent}`}
      id="industries"
    >
      <div className="industries-background-glow glow-left" />
      <div className="industries-background-glow glow-right" />

      <div className="industries-container">
        <div className="industries-main">
          {/* LEFT: Heading and industry cards */}
          <div className="industries-left">
            <div className="industries-eyebrow">
              <span className="industries-eyebrow-dot" />
              INDUSTRIES & SOLUTIONS
            </div>

            <h2 className="industries-title">
              Technology that
              <br />
              fits <span>your world.</span>
            </h2>

            <p className="industries-intro">
              Every industry has different challenges. We create
              digital solutions that fit the way you work, serve
              your customers, and grow your business.
            </p>

            <div className="industry-grid">
              {industries.map((industry) => {
                const selected = industry.id === activeIndustry;

                return (
                  <motion.button
                    type="button"
                    key={industry.id}
                    className={`industry-card ${industry.accent} ${
                      selected ? "is-selected" : ""
                    }`}
                    onClick={() => setActiveIndustry(industry.id)}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    aria-pressed={selected}
                  >
                    <div className="industry-card-top">
                      <span className="industry-card-icon">
                        {industry.icon}
                      </span>
                      <span className="industry-card-number">
                        {industry.number}
                      </span>
                    </div>

                    <span className="industry-card-category">
                      {industry.category}
                    </span>

                    <span className="industry-card-title">
                      {industry.title}
                    </span>

                    <span className="industry-card-description">
                      {industry.description}
                    </span>

                    <span className="industry-card-link">
                      Explore solutions
                      <span className="industry-card-link-arrow">↗</span>
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: One large decorative product scene */}
          <div className="industry-scene">
            <div className="scene-top-label">
              <span className="scene-live-dot" />
              DIGITAL POSSIBILITIES
            </div>

            {/* Orbit paths */}
            <div className="scene-orbit scene-orbit-outer" />
            <div className="scene-orbit scene-orbit-inner" />

            {/* Floating labels */}
            <motion.div
              className="scene-float-label sales-label"
              animate={{ y: [0, -8, 0], rotate: [-3, -1, -3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="scene-label-icon">↗</span>
              <span>
                <small>SMART SOLUTIONS</small>
                <strong>{active.title}</strong>
              </span>
            </motion.div>

            <motion.div
              className="scene-float-label code-label"
              animate={{ y: [0, 7, 0], rotate: [3, 1, 3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="scene-code-icon">&lt;/&gt;</span>
              <span>
                <strong>Custom-built</strong>
                <small>For your needs</small>
              </span>
            </motion.div>

            {/* Main isometric product platform */}
            <motion.div
              className="scene-platform"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              

              <div className="scene-product-window">
                <div className="scene-window-header">
                  <div className="scene-window-dots">
                    <i />
                    <i />
                    <i />
                  </div>
                  <span>PRELIC / DIGITAL STUDIO</span>
                </div>

                <div className="scene-window-content">
                  <div className="scene-window-copy">
                    <span className="scene-mini-eyebrow">
                      {active.category}
                    </span>

                    <h3>
                      Better tools.
                      <br />
                      Brighter future.
                    </h3>

                    <p>
                      Digital products made around the way you work.
                    </p>

                    <span className="scene-window-button">
                      Discover more ↗
                    </span>
                  </div>

                  <div className="scene-window-art">
                    <motion.div
                      key={active.id}
                      className="scene-art-tile"
                      initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 0.45 }}
                    >
                      <span>{active.icon}</span>
                    </motion.div>

                    <div className="scene-art-orb orb-a" />
                    <div className="scene-art-orb orb-b" />
                  </div>
                </div>

                <div className="scene-window-bottom">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </motion.div>

            {/* Floating mobile preview */}
            <motion.div
              className="scene-phone"
              animate={{ y: [0, 8, 0], rotate: [-8, -6, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="scene-phone-notch" />
              <div className="scene-phone-screen">
                <span className="phone-small-line" />
                <div className="phone-product-shape">
                  {active.icon}
                </div>
                <span className="phone-line long" />
                <span className="phone-line" />
                <span className="phone-button" />
              </div>
            </motion.div>

            {/* Floating analytics panel */}
            <motion.div
              className="scene-analytics"
              animate={{ y: [0, 10, 0], rotate: [4, 2, 4] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="analytics-heading">
                <span>LIVE INSIGHTS</span>
                <span>↗</span>
              </div>
              <strong>Connected systems</strong>
              <div className="analytics-chart">
                {[32, 48, 39, 66, 52, 83, 70, 96].map((height, index) => (
                  <i key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
            </motion.div>

            {/* Orbiting decorative dots */}
            <motion.span
              className="scene-orbit-ball ball-one"
              animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
            />
            <motion.span
              className="scene-orbit-ball ball-two"
              animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <span className="scene-orbit-ball ball-three" />

            <div className="scene-side-note">
              <span>✳</span>
              <p>
                Built for
                <br />
                every industry.
              </p>
            </div>

            <div className="scene-industry-switcher">
              {industries.map((industry) => (
                <button
                  type="button"
                  key={industry.id}
                  className={
                    activeIndustry === industry.id ? "active" : ""
                  }
                  onClick={() => setActiveIndustry(industry.id)}
                >
                  <span />
                  {industry.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom trust strip */}
        <div className="industries-trust">
          <div className="industry-trust-item">
            <span className="trust-icon">◎</span>
            <span>
              <strong>Industry expertise</strong>
              <small>Understand real challenges</small>
            </span>
          </div>

          <div className="industry-trust-item">
            <span className="trust-icon">✳</span>
            <span>
              <strong>Tailored solutions</strong>
              <small>No one-size-fits-all</small>
            </span>
          </div>

          <div className="industry-trust-item">
            <span className="trust-icon">◇</span>
            <span>
              <strong>Long-term support</strong>
              <small>Grow with your business</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
