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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.622359508939!2d80.5959036747596!3d7.283853192723015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36893034a7379%3A0x17359372138c2271!2sUniversity%20of%20Peradeniya!5e0!3m2!1sen!2slk!4v1728710892900!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="University of Peradeniya Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
