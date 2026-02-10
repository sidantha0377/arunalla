import React, { useState, useEffect } from "react";
import "./Home.css";
import "./Admin.css";
import im1 from "../assets/img/home.jpg";

export default function Infrastructure() {
  const [infrastructures, setInfrastructures] = useState([]);

  useEffect(() => {
    const savedInfrastructures = localStorage.getItem("adminInfrastructures");
    if (savedInfrastructures) {
      setInfrastructures(JSON.parse(savedInfrastructures));
    }
  }, []);

  return (
    <div className="homcss">
      <img src={im1} className="homeimage" alt="Infrastructure" />
      <div className="Page">
        <div className="rmemo">
          <div className="rmemotxt">INFRASTRUCTURE DEVELOPMENT</div>
          <div className="seminar-list">
            {infrastructures.length === 0 ? (
              <p className="no-gallery">No infrastructure projects available yet.</p>
            ) : (
              infrastructures
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((infra) => (
                  <div key={infra.id} className="seminar-item">
                    <h3>{infra.title}</h3>
                    <p className="seminar-date">
                      {new Date(infra.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p className="seminar-description">{infra.description}</p>
                    {infra.image && (
                      <img
                        src={infra.image}
                        alt={infra.title}
                        className="seminar-image"
                      />
                    )}
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
