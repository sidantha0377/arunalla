import React from "react";
import "./Fotbar.css";

export default function Fotbar() {
  return (
    <footer className="fotbar">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Arunalla</h3>
          <p>Social Service Project</p>
          <p>University of Peradeniya</p>
        </div>

        <div className="footer-section">
          <h4>Address</h4>
          <p>University of Peradeniya</p>
          <p>Prof. E. O. E. Pereira Mawatha</p>
          <p>Kandy, Sri Lanka</p>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="contact-item">
            <span className="contact-label">Email:</span>
            <a href="mailto:arunalla@eng.pdn.ac.lk">arunalla@eng.pdn.ac.lk</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Phone:</span>
            <a href="tel:+94714621254">(+94) 71 4621 254</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="Fbtxt">
          All Rights Reserved 2025 - Arunalla Social Service Project University
          of Peradeniya Sri Lanka
        </div>
      </div>
    </footer>
  );
}
