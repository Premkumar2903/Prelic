
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./process.css";

const steps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understand the idea",
    description:
      "We learn about your business, users, goals, and the problem your product needs to solve.",
    tags: ["Research", "Requirements", "Strategy"],
    icon: "◎",
    visualTitle: "Your idea",
    visualText: "A problem worth solving",
    visualIcon: "✳",
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Shape the experience",
    description:
      "We transform your idea into user flows, wireframes, prototypes, and a clear visual direction.",
    tags: ["UX Research", "UI Design", "Prototypes"],
    icon: "◇",
    visualTitle: "Your design",
    visualText: "An experience taking shape",
    visualIcon: "▦",
  },
  {
    number: "03",
    title: "Develop",
    subtitle: "Bring it to life",
    description:
      "We build the frontend, backend, database, and integrations to turn the design into working software.",
    tags: ["Engineering", "Integration", "Testing"],
    icon: "</>",
    visualTitle: "Your product",
    visualText: "Built with purpose",
    visualIcon: "</>",
  },
  {
    number: "04",
    title: "Launch & Evolve",
    subtitle: "Make it better",
    description:
      "We test, deploy, monitor, and improve your product as your business and users grow.",
    tags: ["Quality", "Deployment", "Support"],
    icon: "↗",
    visualTitle: "Your launch",
    visualText: "Ready for the real world",
    visualIcon: "✦",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const current = steps[activeStep];



  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % steps.length);
    }, 4000);
  
    return () => clearInterval(interval);
  }, []);


  return (
    <section className="process-section" id="process">
      <div className="process-glow process-glow-one" />
      <div className="process-glow process-glow-two" />

      <div className="process-container">
        <div className="process-heading">
          <span className="process-eyebrow">
            <span className="process-eyebrow-dot" />
            HOW WE WORK
          </span>

          <h2>
            From first thought
            <br />
            to <span>real product.</span>
          </h2>

          <p>
            Great products don't happen by accident. We turn your ideas
            into thoughtful digital experiences through a clear,
            collaborative process.
          </p>
        </div>

        <div className="process-layout">
          {/* Left: interactive process steps */}
          <div className="process-timeline">
            {steps.map((step, index) => {
              const isActive = activeStep === index;

              return (
                <button
                  className={`process-step ${isActive ? "active" : ""}`}
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  aria-pressed={isActive}
                  type="button"
                >
                  <span className="process-step-icon">
                    {step.icon}
                  </span>

                  <span className="process-step-copy">
                    <span className="process-step-number">
                      {step.number}
                    </span>

                    <span className="process-step-title">
                      {step.title}
                    </span>

                    <span className="process-step-description">
                      {step.description}
                    </span>

                    <span className="process-tags">
                      {step.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </span>
                  </span>

                  <span className="process-step-arrow">↗</span>
                </button>
              );
            })}
          </div>

          {/* Right: animated product illustration */}
          <div className="process-visual">
            <div className="process-visual-top">
              <span>THE JOURNEY</span>
              <span>{current.number} / 04</span>
            </div>

            <div className="process-orbit orbit-one" />
            <div className="process-orbit orbit-two" />

            <motion.div
              className="process-floating-label label-idea"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="label-dot mint-dot" />
              <span>
                <strong>IDEA</strong>
                <small>Where it begins</small>
              </span>
            </motion.div>

            <motion.div
              className="process-floating-label label-result"
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="label-dot lime-dot" />
              <span>
                <strong>REAL RESULTS</strong>
                <small>Built step by step</small>
              </span>
            </motion.div>

            <div className="process-illustration">
              <motion.div
                className="process-platform platform-back"
                animate={{
                  rotate: activeStep * 3,
                  y: [0, -4, 0],
                }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: { duration: 0.5 },
                }}
              />

              <motion.div
                className={`process-product product-${activeStep}`}
                key={activeStep}
                initial={{
                  opacity: 0,
                  y: 22,
                  rotateX: -15,
                  scale: 0.88,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: 1,
                }}
                transition={{ duration: 0.55 }}
              >
                <div className="product-topbar">
                  <div className="product-dots">
                    <i />
                    <i />
                    <i />
                  </div>
                  <span>PRELIC / {current.number}</span>
                </div>

                <AnimatePresence mode="sync">
                  <motion.div
                    className="product-content"
                    key={activeStep}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="product-symbol">
                      {current.visualIcon}
                    </div>

                    <h3>{current.visualTitle}</h3>
                    <p>{current.visualText}</p>

                    <div className="product-mini-lines">
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="product-mini-blocks">
                      <span />
                      <span />
                      <span />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              <motion.div
                className="process-orbit-dot dot-one"
                animate={{ y: [0, -12, 0], x: [0, 4, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="process-orbit-dot dot-two"
                animate={{ y: [0, 10, 0], x: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div
                className="process-orbit-dot dot-three"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>

            <div className="process-visual-caption">
              <span className="caption-mark">✳</span>
              <div>
                <strong>{current.title}</strong>
                <p>{current.subtitle}</p>
              </div>
            </div>

            <div className="process-progress">
              {steps.map((step, index) => (
                <button
                  key={step.number}
                  type="button"
                  aria-label={`View ${step.title} step`}
                  aria-pressed={activeStep === index}
                  className={
                    activeStep === index ? "progress-active" : ""
                  }
                  onClick={() => setActiveStep(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="process-footer">
          <div>
            <strong>One clear process.</strong>
            <span>Built around your goals.</span>
          </div>

          <a href="#contact" className="process-cta">
            Let's build something <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
