import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navebar.css";

export default function Navebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nave">
      <h2 className="Bname">Arunalla</h2>

      {/* Mobile menu button */}
      <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <ul className={`Npage ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/e-seminar" onClick={() => setIsOpen(false)}>
            e-Seminar
          </Link>
        </li>
        <li>
          <Link to="/infrastructure" onClick={() => setIsOpen(false)}>
            Infrastructure Development
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
