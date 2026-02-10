import React, { useState, useEffect } from "react";
import "./Home.css";
import "./Admin.css";

export default function Gallery() {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    const savedGalleries = localStorage.getItem("adminGalleries");
    if (savedGalleries) {
      setGalleries(JSON.parse(savedGalleries));
    }
  }, []);

  return (
    <div className="homcss">
      <div className="Page">
        <div className="rmemo">
          <div className="rmemotxt">PHOTO GALLERY</div>
          <div className="gallery-container">
            {galleries.length === 0 ? (
              <p className="no-gallery">No galleries added yet.</p>
            ) : (
              galleries
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((gallery) => (
                  <div key={gallery.id} className="gallery-item">
                    <div className="gallery-header">
                      <h3 className="gallery-date">
                        {new Date(gallery.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </h3>
                    </div>
                    <div className="gallery-images">
                      {gallery.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Gallery ${index + 1}`}
                          className="gallery-img"
                        />
                      ))}
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
