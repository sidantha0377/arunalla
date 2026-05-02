import React from "react";
import "./ContactUs.css";
import im1 from "../assets/img/wala2.jpeg";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export default function ContactUs() {
  return (
    <div>
      <div className="headC-section">
        <img src={im1} className="contactimage" alt="University campus" />
      </div>

      <div className="aboutus">
        <div className="contact-container">
          {/* Left side with contact information */}
          <div className="info-section">
            <div className="contact-details">
              <div className="contact-item">
                <span className="title">ADDRESS</span>
                <p className="content">
                  University of Peradeniya,
                  <br />
                  Prof. E. O. E. Pereira Mawatha,
                  <br />
                  Kandy
                </p>
              </div>

              <div className="contact-item">
                <span className="title">EMAIL</span>
                <p className="content">
                  <a href="mailto:arunalla@eng.pdn.ac.lk">
                    arunalla@eng.pdn.ac.lk
                  </a>
                </p>
              </div>

              <div className="contact-item">
                <span className="title">CALL US</span>
                <p className="content">
                  <a href="tel:+94714621254">(+94) 71 4621 254</a>
                </p>
              </div>
            </div>

            {/* Social media icons */}
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://wa.me/94714621254"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Right side with the embedded map */}
          <div className="map-section">
            <iframe
              className="gmap_iframe"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=350&height=400&hl=en&q=Faculty%20of%20engineering%20uop&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              title="Faculty of Engineering Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
