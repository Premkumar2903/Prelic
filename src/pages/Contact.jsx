
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import "./contact.css";

const EARTH_SPECULAR_TEXTURE =
  "https://threejs.org/examples/textures/planets/earth_specular_2048.jpg";

function EarthGlobe() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrame;
    let renderer;
    let observer;
    let texture;
    let isDragging = false;
    let isVisible = true;
    let previousX = 0;
    let previousY = 0;
    let velocityY = 0;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      38,
      Math.max(container.clientWidth, 1) /
        Math.max(container.clientHeight, 1),
      0.1,
      100
    );
    camera.position.set(0, 0, 5.1);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(
      Math.max(container.clientWidth, 1),
      Math.max(container.clientHeight, 1)
    );
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // All geographic objects belong to this group.
    const globe = new THREE.Group();
    scene.add(globe);

    const earthGeometry = new THREE.SphereGeometry(1.45, 96, 96);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.setCrossOrigin("anonymous");

    texture = textureLoader.load(EARTH_SPECULAR_TEXTURE);
    texture.colorSpace = THREE.SRGBColorSpace;

    const earthMaterial = new THREE.ShaderMaterial({
      uniforms: {
        specularMap: { value: texture },
        landColor: { value: new THREE.Color("#6c7684") },
        waterColor: { value: new THREE.Color("#030406") },
        sunDirection: {
          value: new THREE.Vector3(-1.0, 1.2, 1.5).normalize(),
        },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D specularMap;
        uniform vec3 landColor;
        uniform vec3 waterColor;
        uniform vec3 sunDirection;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;

        void main() {
          // In the specular texture: water is white (>0.1), land is black (<0.1)
          float spec = texture2D(specularMap, vUv).r;
          float isWater = smoothstep(0.05, 0.18, spec);

          vec3 surfaceColor = mix(landColor, waterColor, isWater);

          vec3 normal = normalize(vNormal);
          float diff = max(dot(normal, sunDirection), 0.0);
          float lighting = 0.65 + diff * 0.45;

          vec3 viewDir = normalize(vViewPosition);
          float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0) * 0.22;

          vec3 finalColor = surfaceColor * lighting + vec3(0.25) * fresnel;
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
    });

    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    globe.add(earth);

    const atmosphereGeometry = new THREE.SphereGeometry(
      1.485,
      64,
      64
    );

    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: "#3f4957",
      transparent: true,
      opacity: 0.16,
      side: THREE.BackSide,
    });

    globe.add(
      new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
    );

    scene.add(new THREE.AmbientLight("#ffffff", 1.8));

    const sunlight = new THREE.DirectionalLight("#ffffff", 2);
    sunlight.position.set(-3, 4, 5);
    scene.add(sunlight);

    // Chennai, Tamil Nadu, India: 13.0827° N, 80.2707° E
    const latitude = 13.0827;
    const longitude = 80.2707;
    const radius = 1.465;

    /*
      Match Three.js SphereGeometry UV layout:
      U = 0 is 180°W (-180°), U = 0.5 is Prime Meridian (0°), U = 1 is 180°E.
      Therefore: phi = (lon + 180) in degrees, theta = (90 - lat).
    */
    function latLonToVector3(lat, lon, r) {
      const phi = THREE.MathUtils.degToRad(90 - lat);
      const theta = THREE.MathUtils.degToRad(lon + 180);

      return new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );
    }

    const chennaiPosition = latLonToVector3(
      latitude,
      longitude,
      radius
    );

    // Normal marker dot on Chennai
    const markerGeometry = new THREE.SphereGeometry(
      0.038,
      20,
      20
    );

    const markerMaterial = new THREE.MeshBasicMaterial({
      color: "#7DE2D1",
      transparent: true,
      opacity: 0.9,
      depthTest: true,
    });

    const chennaiMarker = new THREE.Mesh(
      markerGeometry,
      markerMaterial
    );

    chennaiMarker.position.copy(chennaiPosition);
    globe.add(chennaiMarker);

    // Orient globe upright with North Pole pointing up (+Y),
    // and rotate around Y so Chennai faces the camera initially.
    globe.rotation.y = Math.atan2(-chennaiPosition.x, chennaiPosition.z);
    globe.rotation.x = 0.12;

    // A few subtle background stars.
    const starPositions = [];

    for (let i = 0; i < 180; i++) {
      starPositions.push(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10,
        -2 - Math.random() * 7
      );
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starPositions, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: "#64748b",
      size: 0.016,
      transparent: true,
      opacity: 0.5,
    });

    scene.add(new THREE.Points(starGeometry, starMaterial));

    function onPointerDown(event) {
      isDragging = true;
      previousX = event.clientX;
      previousY = event.clientY;
      container.style.cursor = "grabbing";
      container.setPointerCapture?.(event.pointerId);
    }

    function onPointerMove(event) {
      if (!isDragging) return;

      const deltaX = event.clientX - previousX;
      const deltaY = event.clientY - previousY;

      velocityY = deltaX * 0.003;
      globe.rotation.y += deltaX * 0.003;
      globe.rotation.x += deltaY * 0.002;

      globe.rotation.x = THREE.MathUtils.clamp(
        globe.rotation.x,
        -0.7,
        0.7
      );

      previousX = event.clientX;
      previousY = event.clientY;
    }

    function onPointerUp() {
      isDragging = false;
      container.style.cursor = "grab";
    }

    function resize() {
      const width = container.clientWidth;
      const height = container.clientHeight;

      if (!width || !height) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    function render() {
      animationFrame = requestAnimationFrame(render);

      if (!isVisible) return;

      if (!isDragging) {
        globe.rotation.y += 0.0008;
        globe.rotation.y += velocityY * 0.08;
        velocityY *= 0.94;
      }

      // Subtle blink on Chennai location marker
      const blink = (Math.sin(performance.now() * 0.0035) + 1) / 2;
      markerMaterial.opacity = 0.4 + blink * 0.6;
      const scale = 0.9 + blink * 0.22;
      chennaiMarker.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    }

    observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });

    observer.observe(container);

    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerup", onPointerUp);
    container.addEventListener("pointercancel", onPointerUp);
    window.addEventListener("resize", resize);

    container.style.cursor = "grab";

    resize();
    render();

    return () => {
      cancelAnimationFrame(animationFrame);
      observer?.disconnect();

      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerup", onPointerUp);
      container.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("resize", resize);

      texture?.dispose();
      earthGeometry.dispose();
      earthMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      markerGeometry.dispose();
      markerMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();

      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="earth-globe-wrap">
      <div className="earth-globe" ref={mountRef} />
      <div className="earth-hint">
        <span className="earth-hint-dot" />
        Drag to explore the planet
      </div>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="contact-eyebrow">
            HAVE AN IDEA? LET'S TALK.
          </span>

          <h2>
            Your next big thing
            <br />
            <span>starts with a conversation.</span>
          </h2>

          <p>
            Tell us what you're imagining. We'll help you turn
            that thought into something meaningful.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-globe-panel">
            <div className="contact-globe-copy">
              <span>OUR CORNER OF THE WORLD</span>
              <h3>Rooted in Chennai. Built for everywhere.</h3>
              <p>
                Great ideas can come from anywhere.
                We're ready to build with you.
              </p>
            </div>

            <EarthGlobe />

            <div className="contact-location">
              <span className="contact-location-icon">↗</span>
              <div>
                <strong>Prelic</strong>
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          <div className="contact-form-panel">
            {submitted ? (
              <div className="contact-success" role="status">
                <span className="contact-success-icon">✓</span>
                <h3>Thanks for reaching out.</h3>
                <p>
                  Your form passed validation. Connect this form
                  to a backend or email service to receive enquiries.
                </p>
                <button
                  type="button"
                  className="contact-submit"
                  onClick={() => setSubmitted(false)}
                >
                  Send another enquiry <span>↗</span>
                </button>
              </div>
            ) : (
              <>
                <span className="contact-form-eyebrow">
                  START A PROJECT
                </span>

                <h3>Let's make it happen.</h3>

                <form onSubmit={handleSubmit}>
                  <div className="contact-field">
                    <label htmlFor="contact-name">Your name *</label>
                    <input
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email">Email address *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="contact-field-row">
                    <div className="contact-field">
                      <label htmlFor="contact-service">
                        What do you need? *
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="Website development">Website</option>
                        <option value="Mobile application">Mobile app</option>
                        <option value="Custom software">Custom software</option>
                        <option value="AI and automation">AI & automation</option>
                        <option value="Other">Something else</option>
                      </select>
                    </div>

                    <div className="contact-field">
                      <label htmlFor="contact-budget">
                        Estimated budget
                      </label>
                      <select
                        id="contact-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                      >
                        <option value="">Not sure yet</option>
                        <option value="Under ₹25,000">Under ₹25,000</option>
                        <option value="₹25,000–₹75,000">₹25k–₹75k</option>
                        <option value="₹75,000–₹2,00,000">₹75k–₹2L</option>
                        <option value="₹2,00,000+">₹2L+</option>
                      </select>
                    </div>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-message">
                      Tell us about your idea *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What would you like to build?"
                      rows="4"
                      required
                    />
                  </div>

                  <button type="submit" className="contact-submit">
                    Send project enquiry <span>↗</span>
                  </button>

                  <p className="contact-form-note">
                    No pressure. Just a conversation about your idea.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
