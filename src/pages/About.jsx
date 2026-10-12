
import React from "react";
import { motion } from "framer-motion";
import "./about.css";

const values = [
  {
    number: "01",
    title: "Purpose first",
    description:
      "We start by understanding the problem, the people, and the outcome that matters.",
    symbol: "◎",
  },
  {
    number: "02",
    title: "Design with intent",
    description:
      "We create digital experiences that feel clear, useful, and natural to navigate.",
    symbol: "✳",
  },
  {
    number: "03",
    title: "Build thoughtfully",
    description:
      "We value maintainable code, dependable systems, and solutions built for real needs.",
    symbol: "⌘",
  },
  {
    number: "04",
    title: "Grow together",
    description:
      "We believe collaboration, feedback, and continuous improvement lead to better results.",
    symbol: "↗",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};



function IdeaTransformation() {
  const [stage, setStage] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setStage((current) => (current + 1) % 3);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const stages = [
    { label: "01 / IMAGINE", title: "Every great thing starts with an idea." },
    { label: "02 / DESIGN", title: "We give your idea a structure." },
    { label: "03 / BUILD", title: "Then we bring it to life." },
  ];

  return (
    <div className="idea-transform">
      <div className="idea-transform-top">
        <span className="idea-transform-label">
          PRELIC / THE CREATIVE PROCESS
        </span>
        <span className="idea-transform-count">
          0{stage + 1} <span>/ 03</span>
        </span>
      </div>

      <div className="idea-transform-canvas">
        <svg
          className="idea-transform-svg"
          viewBox="0 0 560 390"
          role="img"
          aria-label={stages[stage].title}
        >
          <defs>
            <pattern
              id="idea-grid"
              width="22"
              height="22"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 22 0 L 0 0 0 22"
                fill="none"
                stroke="#172033"
                strokeOpacity="0.07"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          <rect
            x="12"
            y="12"
            width="536"
            height="366"
            rx="18"
            fill="url(#idea-grid)"
          />

          {/* Stage 1: a hand-drawn idea bulb */}
          <motion.g
            animate={{
              opacity: stage === 0 ? 1 : 0,
              scale: stage === 0 ? 1 : 0.78,
              y: stage === 0 ? 0 : 12,
            }}
            transition={{ duration: 0.65 }}
            style={{ transformOrigin: "280px 185px" }}
          >
            <motion.path
              d="M238 157 C238 119 265 98 294 106 C325 113 339 143 327 171 C321 185 307 194 305 213 L263 213 C261 195 249 184 243 174"
              fill="#EBEDAF"
              fillOpacity="0.5"
              stroke="#172033"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: stage === 0 ? 1 : 0 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            />
            <motion.path
              d="M266 225 L303 225 M270 237 L299 237 M277 249 L292 249"
              fill="none"
              stroke="#172033"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: stage === 0 ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
            {[
              "M280 77 L280 57",
              "M219 94 L205 80",
              "M340 95 L355 80",
              "M207 148 L186 148",
              "M351 148 L373 148",
            ].map((path, index) => (
              <motion.path
                key={path}
                d={path}
                stroke="#7DE2D1"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: stage === 0 ? 1 : 0,
                  opacity: stage === 0 ? 1 : 0,
                }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
              />
            ))}
            <motion.circle
              cx="280"
              cy="180"
              r="104"
              fill="none"
              stroke="#7DE2D1"
              strokeDasharray="3 10"
              strokeWidth="1.5"
              animate={{ rotate: stage === 0 ? 360 : 0 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "280px 180px" }}
            />
          </motion.g>

          {/* Stage 2: blueprint lines draw into a website wireframe */}
          <motion.g
            animate={{
              opacity: stage === 1 ? 1 : 0,
              scale: stage === 1 ? 1 : 0.88,
            }}
            transition={{ duration: 0.65 }}
            style={{ transformOrigin: "280px 195px" }}
          >
            <rect
              x="133"
              y="74"
              width="294"
              height="238"
              rx="9"
              fill="#F9FAF6"
              stroke="#172033"
              strokeWidth="2"
            />
            <motion.path
              d="M133 111 H427 M158 92 H178 M188 92 H205 M156 142 H404 M156 159 H310 M156 194 H404 M156 211 H310 M156 246 H404 M156 263 H310"
              fill="none"
              stroke="#172033"
              strokeOpacity="0.6"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: stage === 1 ? 1 : 0 }}
              transition={{ duration: 1.1, staggerChildren: 0.1 }}
            />
            <motion.rect
              x="328"
              y="134"
              width="76"
              height="46"
              rx="5"
              fill="#7DE2D1"
              fillOpacity="0.7"
              stroke="#172033"
              strokeWidth="1.5"
              initial={{ scale: 0 }}
              animate={{ scale: stage === 1 ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              style={{ transformOrigin: "366px 157px" }}
            />
            <motion.rect
              x="328"
              y="199"
              width="76"
              height="64"
              rx="5"
              fill="#EBEDAF"
              fillOpacity="0.8"
              stroke="#172033"
              strokeWidth="1.5"
              initial={{ scale: 0 }}
              animate={{ scale: stage === 1 ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              style={{ transformOrigin: "366px 231px" }}
            />
            <motion.path
              d="M188 282 H372"
              stroke="#7DE2D1"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: stage === 1 ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            />
          </motion.g>

          {/* Stage 3: the finished product */}
          <motion.g
            animate={{
              opacity: stage === 2 ? 1 : 0,
              scale: stage === 2 ? 1 : 0.84,
              y: stage === 2 ? 0 : 10,
            }}
            transition={{ duration: 0.65 }}
            style={{ transformOrigin: "280px 195px" }}
          >
            <rect
              x="100"
              y="65"
              width="360"
              height="250"
              rx="13"
              fill="#172033"
            />
            <rect
              x="100"
              y="65"
              width="360"
              height="34"
              rx="13"
              fill="#26344B"
            />
            <rect x="100" y="85" width="360" height="14" fill="#26344B" />
            <circle cx="120" cy="82" r="4" fill="#F9FAF6" />
            <circle cx="135" cy="82" r="4" fill="#7DE2D1" />
            <circle cx="150" cy="82" r="4" fill="#EBEDAF" />

            <motion.rect
              x="123"
              y="117"
              width="314"
              height="174"
              rx="6"
              fill="#F9FAF6"
              initial={{ opacity: 0 }}
              animate={{ opacity: stage === 2 ? 1 : 0 }}
              transition={{ delay: 0.2 }}
            />
            <motion.rect
              x="140"
              y="136"
              width="122"
              height="9"
              rx="4"
              fill="#172033"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: stage === 2 ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{ transformOrigin: "140px 140px" }}
            />
            <motion.rect
              x="140"
              y="154"
              width="91"
              height="5"
              rx="2"
              fill="#9BA4B3"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: stage === 2 ? 1 : 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              style={{ transformOrigin: "140px 156px" }}
            />
            <rect
              x="140"
              y="174"
              width="116"
              height="91"
              rx="5"
              fill="#7DE2D1"
            />
            <path
              d="M153 244 L181 211 L198 228 L220 194 L244 244 Z"
              fill="#172033"
              fillOpacity="0.85"
            />
            <rect
              x="271"
              y="174"
              width="146"
              height="10"
              rx="4"
              fill="#DDE1E4"
            />
            <rect
              x="271"
              y="195"
              width="130"
              height="6"
              rx="3"
              fill="#DDE1E4"
            />
            <rect
              x="271"
              y="209"
              width="139"
              height="6"
              rx="3"
              fill="#DDE1E4"
            />
            <rect
              x="271"
              y="230"
              width="81"
              height="26"
              rx="5"
              fill="#172033"
            />
            <motion.path
              d="M287 243 L295 250 L308 235"
              fill="none"
              stroke="#7DE2D1"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: stage === 2 ? 1 : 0 }}
              transition={{ duration: 0.45, delay: 0.6 }}
            />
          </motion.g>

          {/* Stage indicator */}
          <motion.circle
            cx="475"
            cy="337"
            r="7"
            fill={stage === 2 ? "#7DE2D1" : "#EBEDAF"}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <text
            x="457"
            y="361"
            textAnchor="end"
            fill="#172033"
            fontSize="10"
            letterSpacing="2"
          >
            {stage === 0 ? "IDEA" : stage === 1 ? "BLUEPRINT" : "PRODUCT"}
          </text>
        </svg>
      </div>

      <div className="idea-transform-bottom">
        <div className="idea-transform-copy" aria-live="polite">
          <span>{stages[stage].label}</span>
          <h3>{stages[stage].title}</h3>
        </div>

        <div className="idea-transform-controls">
          {stages.map((item, index) => (
            <button
              key={item.label}
              type="button"
              className={`idea-stage-dot ${
                stage === index ? "is-active" : ""
              }`}
              onClick={() => setStage(index)}
              aria-label={`Show stage ${index + 1}: ${item.label}`}
              aria-pressed={stage === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Intro and visual */}
        <div className="about-hero">
          <motion.div
            className="about-copy"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="about-eyebrow">
              <span className="about-eyebrow-dot" />
              GET TO KNOW PRELIC
            </span>

            <h2>
              Good ideas deserve
              <br />
              <span>to become real.</span>
            </h2>

            <p className="about-lead">
              We believe technology should do more than look impressive.
              It should solve problems, simplify work, and help people
              move forward.
            </p>

            <p className="about-description">
              Prelic is a software development brand built around one
              simple purpose: turning ideas into meaningful digital
              experiences. From websites and applications to business
              systems and intelligent automation, we focus on building
              solutions with a reason to exist.
            </p>

            <a className="about-cta" href="#contact">
              Let's build something meaningful
              <span>↗</span>
            </a>
          </motion.div>

          <motion.div
            className="about-visual"
            
          >
            <IdeaTransformation />
          </motion.div>
        </div>

        {/* Mission and vision */}
        <motion.div
          className="about-purpose"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="about-purpose-heading">
            <span className="about-section-number">01 / OUR PURPOSE</span>
            <h3>
              Technology with
              <br />
              <span>a reason.</span>
            </h3>
          </div>

          <div className="about-purpose-details">
            <article className="about-purpose-item">
              <span className="about-purpose-icon">◎</span>
              <h4>Our mission</h4>
              <p>
                To transform ideas into practical digital solutions that
                help people work smarter, solve meaningful problems, and
                create new opportunities.
              </p>
            </article>

            <article className="about-purpose-item">
              <span className="about-purpose-icon about-purpose-icon-lime">
                ↗
              </span>
              <h4>Our vision</h4>
              <p>
                To make purposeful technology accessible to businesses
                and individuals, creating digital products that can
                evolve alongside their ambitions.
              </p>
            </article>
          </div>
        </motion.div>

        {/* Company values */}
        <div className="about-values">
          <motion.div
            className="about-values-heading"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="about-section-number">02 / WHAT GUIDES US</span>
            <h3>
              How we think.
              <br />
              <span>How we build.</span>
            </h3>
          </motion.div>

          <div className="about-values-list">
            {values.map((value, index) => (
              <motion.article
                className="about-value-row"
                key={value.number}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <span className="about-value-number">{value.number}</span>

                <span className="about-value-symbol">{value.symbol}</span>

                <div className="about-value-content">
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>

                <span className="about-value-arrow">↗</span>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          className="about-closing"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-closing-symbol">✳</span>

          <p>
            Your idea is the starting point.
            <br />
            <span>Let's give it purpose.</span>
          </p>

          <a href="#contact" aria-label="Contact Prelic">
            ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
