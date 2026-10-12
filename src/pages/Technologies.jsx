import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./technologies.css";



const techCategories = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend",
    description:
      "We build responsive, accessible interfaces that make digital products feel intuitive and effortless.",
    technologies: [
      { name: "React", detail: "UI development", symbol: "⚛" },
      { name: "JavaScript", detail: "Interactive experiences", symbol: "JS" },
      { name: "TypeScript", detail: "Reliable applications", symbol: "TS" },
      { name: "HTML5", detail: "Web structure", symbol: "5" },
      { name: "CSS3", detail: "Visual experiences", symbol: "#" },
      { name: "Tailwind CSS", detail: "Rapid UI styling", symbol: "≈" },
    ],
  },
  {
    id: "backend",
    number: "02",
    title: "Backend",
    description:
      "We develop secure application logic, APIs, and services that keep your products running smoothly.",
    technologies: [
      { name: "Python", detail: "Application logic", symbol: "Py" },
      { name: "Django", detail: "Web applications", symbol: "Dj" },
      { name: "Node.js", detail: "Server-side JavaScript", symbol: "N" },
      { name: "Express", detail: "API development", symbol: "Ex" },
      { name: "Java", detail: "Application services", symbol: "Ja" },
      { name: "REST APIs", detail: "System integration", symbol: "API" },
    ],
  },
  {
    id: "database",
    number: "03",
    title: "Database",
    description:
      "We organize and manage business data with dependable storage, efficient queries, and thoughtful data models.",
    technologies: [
      { name: "PostgreSQL", detail: "Relational data", symbol: "Pg" },
      { name: "MySQL", detail: "Structured databases", symbol: "My" },
      { name: "MongoDB", detail: "Document databases", symbol: "Mo" },
      { name: "Redis", detail: "In-memory data", symbol: "Re" },
    ],
  },
  {
    id: "mobile",
    number: "04",
    title: "Mobile",
    description:
      "We create mobile experiences that help customers access your products wherever they are.",
    technologies: [
      { name: "React Native", detail: "Cross-platform apps", symbol: "RN" },
      { name: "Flutter", detail: "Mobile interfaces", symbol: "Fl" },
      { name: "Android", detail: "Mobile development", symbol: "An" },
      { name: "Responsive UI", detail: "Adaptive layouts", symbol: "UI" },
    ],
  },
  {
    id: "ai",
    number: "05",
    title: "AI & Automation",
    description:
      "We connect intelligent tools and automated workflows to reduce repetitive work and unlock new possibilities.",
    technologies: [
      { name: "Python AI tools", detail: "AI development", symbol: "AI" },
      { name: "AI APIs", detail: "Intelligent features", symbol: "✳" },
      { name: "Workflow tools", detail: "Task automation", symbol: "↗" },
      { name: "Data processing", detail: "Useful insights", symbol: "D" },
    ],
  },
  {
    id: "cloud",
    number: "06",
    title: "Cloud & DevOps",
    description:
      "We prepare applications for deployment with version control, containers, and reliable delivery practices.",
    technologies: [
      { name: "Git", detail: "Version control", symbol: "Git" },
      { name: "GitHub", detail: "Team collaboration", symbol: "GH" },
      { name: "Docker", detail: "Application containers", symbol: "D" },
      { name: "Cloud platforms", detail: "Hosting & deployment", symbol: "☁" },
    ],
  },
];

export default function Technologies() {
  const [activeId, setActiveId] = useState("frontend");
  

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((currentId) => {
        const currentIndex = techCategories.findIndex(
          (category) => category.id === currentId,
        );

        const nextIndex = (currentIndex + 1) % techCategories.length;

        return techCategories[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const activeCategory = techCategories.find(
    (category) => category.id === activeId,
  );

  return (
    <section className="technologies-section" id="technologies">
      <div className="technologies-container">
        <motion.div
          className="technologies-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <span className="technologies-eyebrow">
            <span className="technologies-eyebrow-dot" />
            OUR TECHNOLOGY STACK
          </span>

          <h2>
            The right technology.
            <br />
            <span>For the right solution.</span>
          </h2>

          <p>
            Every idea has different needs. We choose the tools and technologies
            that best fit the product, the people, and the goal.
          </p>
        </motion.div>

        <div className="technologies-workspace">
          <div className="technologies-sidebar">
            <span className="technologies-sidebar-label">
              EXPLORE OUR EXPERTISE
            </span>

            <div className="technologies-category-list">
              {techCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={`technologies-category ${
                    activeId === category.id ? "active" : ""
                  }`}
                  onClick={() => setActiveId(category.id)}
                  aria-pressed={activeId === category.id}
                >
                  <span className="technologies-category-number">
                    {category.number}
                  </span>

                  <span className="technologies-category-title">
                    {category.title}
                  </span>

                  <span className="technologies-category-arrow">↗</span>
                </button>
              ))}
            </div>

            <div className="technologies-sidebar-note">
              <span className="technologies-note-icon">✳</span>
              <p>
                The tools may change.
                <br />
                <strong>The purpose stays yours.</strong>
              </p>
            </div>
          </div>

          <div className="tech-universe">
            <div className="tech-universe-heading">
              <span className="tech-universe-kicker">THE PRELIC TOOLKIT</span>
              <span className="tech-universe-index">
                {activeCategory.number} / 06
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                className="tech-universe-scene"
                initial={{ opacity: 0, scale: 0.92, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.04, rotate: 5 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              >
                <div className="tech-orbit tech-orbit-outer" />
                <div className="tech-orbit tech-orbit-inner" />

                <div className="tech-orbit-dot tech-orbit-dot-one" />
                <div className="tech-orbit-dot tech-orbit-dot-two" />
                <div className="tech-orbit-dot tech-orbit-dot-three" />

                <div className="tech-core">
                  <motion.div
                    className="tech-core-glow"
                    animate={{
                      scale: [1, 1.12, 1],
                      opacity: [0.45, 0.8, 0.45],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <span className="tech-core-symbol">P.</span>
                  <span className="tech-core-caption">IDEAS IN MOTION</span>
                </div>

                {activeCategory.technologies.map((tech, index) => {
                  const angle =
                    (index / activeCategory.technologies.length) * Math.PI * 2 -
                    Math.PI / 2;

                  const radius = index % 2 === 0 ? 145 : 105;

                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={tech.name}
                      className="tech-orbit-node"
                      style={{
                        "--node-x": `${x}px`,
                        "--node-y": `${y}px`,
                      }}
                      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x,
                        y,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 110,
                        damping: 13,
                        delay: index * 0.08,
                      }}
                    >
                      <motion.div
                        className="tech-orbit-node-card"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 2.5 + index * 0.25,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.15,
                        }}
                      >
                        <span className="tech-orbit-node-symbol">
                          {tech.symbol}
                        </span>
                        <span className="tech-orbit-node-name">
                          {tech.name}
                        </span>
                        <span className="tech-orbit-node-detail">
                          {tech.detail}
                        </span>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            <div className="tech-universe-footer">
              <span className="tech-universe-live-dot" />
              <span>CONNECTED BY PURPOSE</span>
              <span className="tech-universe-count">
                {activeCategory.technologies.length} TOOLS
              </span>
            </div>

            <p className="tech-universe-description">
              {activeCategory.description}
            </p>
          </div>
        </div>

        <motion.div
          className="technologies-bottom-line"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>Thoughtful engineering.</span>
          <span className="technologies-bottom-symbol">✳</span>
          <span>Purposeful digital products.</span>
        </motion.div>
      </div>
    </section>
  );
}
