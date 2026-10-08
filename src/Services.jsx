import React, { useState } from "react";
import { motion } from "framer-motion";
import "./services.css";

const services = [
  {
    number: "01",
    title: "Web Experiences",
    description:
      "Websites and web applications designed to turn ideas into useful digital experiences.",
    tags: ["Websites", "Web Apps", "E-commerce"],
    symbol: "◫",
    size: "large",
  },
  {
    number: "02",
    title: "Mobile Products",
    description:
      "Mobile applications built around the way people actually use your product.",
    tags: ["Android", "iOS", "Cross-platform"],
    symbol: "▯",
    size: "small",
  },
  {
    number: "03",
    title: "Custom Software",
    description:
      "Business software that connects your people, processes and data.",
    tags: ["Business Systems", "Dashboards", "APIs"],
    symbol: "⌘",
    size: "small",
  },
  {
    number: "04",
    title: "AI & Automation",
    description:
      "Intelligent systems that automate repetitive work and turn data into action.",
    tags: ["AI", "Automation", "Data"],
    symbol: "✦",
    size: "wide",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState("01");

  return (
    <section className="services" id="services">

      {/* HEADER */}

      <div className="services-header">

        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span></span>
          WHAT WE BUILD
        </motion.div>

        <div className="services-heading">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What can your
            <br />
            <em>idea</em> become?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Your idea doesn't have to fit into one technology.
            We choose the right combination of design,
            software and technology to give it purpose.
          </motion.p>

        </div>
      </div>

      {/* SERVICE GRID */}

      <div className="services-grid">

        {services.map((service, index) => {

          const isActive = activeService === service.number;

          return (
            <motion.article
              key={service.number}
              className={`service-card ${service.size} ${
                isActive ? "service-active" : ""
              }`}
              onMouseEnter={() =>
                setActiveService(service.number)
              }
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
              }}
              viewport={{ once: true }}
            >

              {/* CARD NUMBER */}

              <div className="service-top">

                <span className="service-number">
                  {service.number}
                </span>

                <motion.span
                  className="service-arrow"
                  animate={{
                    rotate: isActive ? 0 : -45,
                  }}
                >
                  ↗
                </motion.span>

              </div>

              {/* SERVICE SYMBOL */}

              <motion.div
                className="service-symbol"
                animate={{
                  rotateY: isActive ? 180 : 0,
                  scale: isActive ? 1.08 : 1,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <span>{service.symbol}</span>
              </motion.div>

              {/* CONTENT */}

              <div className="service-content">

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-tags">

                  {service.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

              {/* TECHNICAL LINES */}

              <div className="service-architecture">

                <span className="architecture-dot dot-one"></span>
                <span className="architecture-dot dot-two"></span>
                <span className="architecture-dot dot-three"></span>

                <span className="architecture-line line-one"></span>
                <span className="architecture-line line-two"></span>

              </div>

            </motion.article>
          );
        })}

      </div>

      {/* BOTTOM STATEMENT */}

      <motion.div
        className="services-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >

        <div className="services-bottom-line"></div>

        <p>
          One idea.
          <span> Many possibilities.</span>
        </p>

        <div className="services-bottom-line"></div>

      </motion.div>

    </section>
  );
}