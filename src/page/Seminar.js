import React from "react";
import "./Seminar.css";
import im1 from "../assets/img/home.jpg";
import imM from "../assets/img/subject/1.png";
import imS from "../assets/img/subject/2.png";
import imO from "../assets/img/subject/3.png";

export default function Seminar() {
  return (
    <div className="seminar-page">
      <div className="hero-section">
        <img src={im1} className="homeimage" alt="Seminar Hero" />
      </div>

      <div className="seminaseris">
        <h1 className="main-title">SEMINAR SIRES</h1>

        <p className="intro-text">
          At Arunella, we believe that education should have no boundaries. Our
          Seminar Series is dedicated to supporting G.C.E. O/L students in
          underprivileged schools across the island, with a special focus on
          Mathematics and Science.
        </p>

        <button className="request-button">REQUEST SCHOOL SEMINAR SIRES</button>

        <h2 className="section-title">WHAT WE DO</h2>

        <div className="services-list">
          <div className="service-block">
            <h3>Math & Science Mastery</h3>
            <p>Strengthening key concepts and problem-solving skills.</p>
          </div>

          <div className="service-block">
            <h3>Exam-Focused Sessions</h3>
            <p>Helping students prepare effectively for G.C.E. O/L exams.</p>
          </div>

          <div className="service-block">
            <h3>Island-Wide Reach</h3>
            <p>Conducting seminars in rural and underprivileged schools.</p>
          </div>

          <div className="service-block">
            <h3>Interactive & Engaging</h3>
            <p>Encouraging student participation and hands-on learning.</p>
          </div>
        </div>
      </div>
      <div className="esemina">
        <h1 className="main-title">E-SEMINAR SIRES</h1>
        <div className="ESemSection">
          <div>
            <img src={imM} className="SectionIMG" alt="Seminar Hero" />
            <div className="SectionName">MATHS</div>
          </div>
          <div>
            <img src={imS} className="SectionIMG" alt="Seminar Hero" />
            <div className="SectionName">SCIENCE</div>
          </div>
          <div>
            <img src={imO} className="SectionIMG" alt="Seminar Hero" />
            <div className="SectionName">OTHERS</div>
          </div>
        </div>
      </div>

      <div className="esemina_d">
        <h1 className="main-title">E-EXAM FOCUSED SEMINAR SIRES</h1>
        <div className="ESemSection">
          <div>
            <img src={imM} className="SectionIMG" alt="Seminar Hero" />
            <div className="SectionName">MATHS</div>
          </div>
          <div>
            <img src={imS} className="SectionIMG" alt="Seminar Hero" />
            <div className="SectionName">SCIENCE</div>
          </div>
          <div>
            <img src={imO} className="SectionIMG" alt="Seminar Hero" />
            <div className="SectionName">OTHERS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
