import React, { useState, useEffect } from "react";
import "./Home.css";
import "./Admin.css";
import im1 from "../assets/img/home.jpg";

export default function ContactUs() {
  const [contactInfo, setContactInfo] = useState({
    phone1: "",
    phone2: "",
    email1: "",
    email2: "",
    address: ""
  });

  useEffect(() => {
    const savedContact = localStorage.getItem("adminContact");
    if (savedContact) {
      setContactInfo(JSON.parse(savedContact));
    }
  }, []);

  return (
    <div className="homcss">
      <img src={im1} className="homeimage" alt="Contact Us" />
      <div className="Page">
        <div className="rmemo">
          <div className="rmemotxt">CONTACT US</div>
          <div className="contact-info">
            {contactInfo.phone1 && (
              <div className="contact-item">
                <h3>Phone Number 1:</h3>
                <p>{contactInfo.phone1}</p>
              </div>
            )}
            {contactInfo.phone2 && (
              <div className="contact-item">
                <h3>Phone Number 2:</h3>
                <p>{contactInfo.phone2}</p>
              </div>
            )}
            {contactInfo.email1 && (
              <div className="contact-item">
                <h3>Email 1:</h3>
                <p>{contactInfo.email1}</p>
              </div>
            )}
            {contactInfo.email2 && (
              <div className="contact-item">
                <h3>Email 2:</h3>
                <p>{contactInfo.email2}</p>
              </div>
            )}
            {contactInfo.address && (
              <div className="contact-item">
                <h3>Address:</h3>
                <p>{contactInfo.address}</p>
              </div>
            )}
            {!contactInfo.phone1 && !contactInfo.phone2 && !contactInfo.email1 && !contactInfo.email2 && !contactInfo.address && (
              <p className="no-gallery">Contact information not available yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
