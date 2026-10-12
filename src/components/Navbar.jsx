
import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
// import "./Navbar.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Industries", href: "#industries" },
  { label: "Technologies", href: "#technologies" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Brand */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={closeMenu}
          aria-label="Prelic home"
        >
          <span className="brand-symbol">
            <span className="brand-symbol-inner" />
          </span>

          <span className="brand-name">Prelic</span>
          <span className="brand-period">.</span>
        </a>

        {/* Navigation */}
        <nav
          className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}

          {/* Contact link inside the mobile menu */}
          <a
            href="#contact"
            className="mobile-contact-link"
            onClick={closeMenu}
          >
            Contact Us
            <ArrowUpRight size={17} />
          </a>
        </nav>

        {/* Desktop/tablet contact button & mobile toggle */}
        <div className="navbar-actions">
          <a
            href="#contact"
            className="nav-button"
            onClick={closeMenu}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={16} strokeWidth={2.2} />
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
