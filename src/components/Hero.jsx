import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./hero.css";

const outcomes = [
  {
    id: "website",
    label: "WEBSITE",
    icon: "◫",
    description: "Digital experiences",
  },
  {
    id: "mobile",
    label: "MOBILE APP",
    icon: "▯",
    description: "Apps people use",
  },
  {
    id: "software",
    label: "SOFTWARE",
    icon: "⌘",
    description: "Business systems",
  },
  {
    id: "ai",
    label: "AI SYSTEM",
    icon: "✦",
    description: "Intelligent automation",
  },
];

const particles = Array.from({ length: 32 }, (_, index) => ({
  id: index,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 3,
  duration: 3 + Math.random() * 4,
}));

export default function Hero() {
  const [activeOutcome, setActiveOutcome] = useState("website");
  const [stage, setStage] = useState("idea");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const stages = ["idea", "structure", "build"];

    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % stages.length;
      setStage(stages[index]);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      ((e.clientX - rect.left) / rect.width - 0.5) * 2;

    const y =
      ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    setMouse({
      x: x * 8,
      y: y * -8,
    });
  };

  return (
    <section
      className="hero"
      onMouseMove={handleMouseMove}
    >
      <div className="hero-background">
        <div className="hero-grid"></div>
        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>

        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="background-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.15, 0.7, 0.15],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-content">

          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="eyebrow-dot"></span>
            SOFTWARE DEVELOPMENT COMPANY
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Build your
            <br />

            <span className="gradient-text">
              thoughts
            </span>

            <br />

            into purpose.
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            We transform ideas into powerful digital products —
            from websites and mobile apps to custom software
            and intelligent AI systems.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <button className="primary-button">
              Start a project
              <span>↗</span>
            </button>

            <button className="secondary-button">
              Explore our work
            </button>
          </motion.div>

          <motion.div
            className="hero-trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span>IDEA</span>
            <div className="trust-line"></div>
            <span>BUILD</span>
            <div className="trust-line"></div>
            <span>PURPOSE</span>
          </motion.div>
        </div>

        {/* RIGHT 3D SCENE */}
        <div className="hero-visual">

          <div
            className="scene"
            style={{
              transform: `
                rotateX(${mouse.y}deg)
                rotateY(${mouse.x}deg)
              `,
            }}
          >

            {/* ORBIT RINGS */}

            <motion.div
              className="orbit orbit-one"
              animate={{
                rotateZ: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="orbit orbit-two"
              animate={{
                rotateZ: -360,
              }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="orbit orbit-three"
              animate={{
                rotateX: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* CONNECTION LINES */}

            <div className="connection connection-one"></div>
            <div className="connection connection-two"></div>
            <div className="connection connection-three"></div>

            {/* 3D IDEA CORE */}

            <motion.div
              className={`idea-core ${stage}`}
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <div className="core-glow"></div>

              <div className="core-inner">

                <div className="core-symbol">
                  <small>BUILD</small>
                </div>

                <div className="core-label">
                  <small>YOUR</small>
                  <strong>IDEA</strong>
                </div>

              </div>

              {/* CORE WIREFRAME */}

              <div className="wire wire-a"></div>
              <div className="wire wire-b"></div>
              <div className="wire wire-c"></div>

              {/* FLOATING DATA */}

              <motion.div
                className="data-node node-a"
                animate={{
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
              >
                <span></span>
                01
              </motion.div>

              <motion.div
                className="data-node node-b"
                animate={{
                  y: [5, -5, 5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <span></span>
                10
              </motion.div>

              <motion.div
                className="data-node node-c"
                animate={{
                  y: [-4, 4, -4],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                }}
              >
                <span></span>
                AI
              </motion.div>

            </motion.div>

            {/* TRANSFORMATION LAYERS */}

            <AnimatePresence>

              {stage !== "idea" && (
                <>
                  <motion.div
                    className="architecture-layer layer-one"
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.5,
                    }}
                  />

                  <motion.div
                    className="architecture-layer layer-two"
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.5,
                    }}
                  />

                  <motion.div
                    className="architecture-layer layer-three"
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.5,
                    }}
                  />
                </>
              )}

            </AnimatePresence>

            {/* PRODUCT */}

            <AnimatePresence mode="wait">

              {stage === "build" && (
                <motion.div
                  className={`product-object ${activeOutcome}`}
                  initial={{
                    opacity: 0,
                    scale: 0.4,
                    rotateX: -50,
                    rotateY: 30,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotateX: 0,
                    rotateY: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                  }}
                >

                  {activeOutcome === "website" && (
                    <div className="mock-browser">
                      <div className="browser-top">
                        <i></i>
                        <i></i>
                        <i></i>
                      </div>

                      <div className="browser-body">
                        <div className="mock-heading"></div>
                        <div className="mock-heading short"></div>

                        <div className="mock-cards">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeOutcome === "mobile" && (
                    <div className="mock-phone">
                      <div className="phone-camera"></div>

                      <div className="phone-screen">
                        <div className="phone-header"></div>

                        <div className="phone-card"></div>
                        <div className="phone-card small"></div>

                        <div className="phone-bottom">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeOutcome === "software" && (
                    <div className="mock-dashboard">

                      <div className="dashboard-sidebar">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <div className="dashboard-main">

                        <div className="dashboard-top"></div>

                        <div className="dashboard-stats">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>

                        <div className="dashboard-chart">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                        </div>

                      </div>
                    </div>
                  )}

                  {activeOutcome === "ai" && (
                    <div className="mock-ai">

                      <div className="ai-core">
                        ✦
                      </div>

                      <div className="ai-ring ring-a"></div>
                      <div className="ai-ring ring-b"></div>

                      <div className="ai-data data-1">
                        DATA
                      </div>

                      <div className="ai-data data-2">
                        THINK
                      </div>

                      <div className="ai-data data-3">
                        ACT
                      </div>

                    </div>
                  )}

                </motion.div>
              )}

            </AnimatePresence>

          </div>

          {/* OUTCOME SELECTOR */}

          <div className="outcome-selector">

            {outcomes.map((outcome) => (

              <button
                key={outcome.id}
                className={
                  activeOutcome === outcome.id
                    ? "outcome active"
                    : "outcome"
                }
                onClick={() =>
                  setActiveOutcome(outcome.id)
                }
              >
                <span className="outcome-icon">
                  {outcome.icon}
                </span>

                <span className="outcome-text">
                  <strong>{outcome.label}</strong>
                  <small>{outcome.description}</small>
                </span>

              </button>

            ))}

          </div>

          <div className="visual-caption">
            <span className="caption-line"></span>
            <span>
              FROM THOUGHT TO DIGITAL PRODUCT
            </span>
            <span className="caption-line"></span>
          </div>

        </div>

      </div>
    </section>
  );
}