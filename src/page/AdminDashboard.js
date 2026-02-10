import React, { useState, useEffect } from "react";
import "./Home.css";
import "./Admin.css";
import im1 from "../assets/img/home.jpg";
import im2 from "../assets/img/IMG_1.JPG";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("gallery");
  
  // Gallery state
  const [galleries, setGalleries] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);

  // Seminar state
  const [seminars, setSeminars] = useState([]);
  const [seminarTitle, setSeminarTitle] = useState("");
  const [seminarDate, setSeminarDate] = useState("");
  const [seminarDescription, setSeminarDescription] = useState("");
  const [seminarImage, setSeminarImage] = useState("");

  // Infrastructure state
  const [infrastructures, setInfrastructures] = useState([]);
  const [infraTitle, setInfraTitle] = useState("");
  const [infraDate, setInfraDate] = useState("");
  const [infraDescription, setInfraDescription] = useState("");
  const [infraImage, setInfraImage] = useState("");

  // Contact state
  const [contactInfo, setContactInfo] = useState({
    phone1: "",
    phone2: "",
    email1: "",
    email2: "",
    address: ""
  });

  // Load data
  useEffect(() => {
    const savedGalleries = localStorage.getItem("adminGalleries");
    if (savedGalleries) setGalleries(JSON.parse(savedGalleries));

    const savedSeminars = localStorage.getItem("adminSeminars");
    if (savedSeminars) setSeminars(JSON.parse(savedSeminars));

    const savedInfrastructures = localStorage.getItem("adminInfrastructures");
    if (savedInfrastructures) setInfrastructures(JSON.parse(savedInfrastructures));

    const savedContact = localStorage.getItem("adminContact");
    if (savedContact) setContactInfo(JSON.parse(savedContact));
  }, []);

  // Gallery functions - Optimized for 50+ images
  const handleImageSelect = (e) => {
    const files = Array.from(e.target.files);
    const imagePromises = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Smaller max dimensions for 50+ images (800x800 instead of 1200x1200)
            const MAX_WIDTH = 800;
            const MAX_HEIGHT = 800;
            let width = img.width;
            let height = img.height;
            
            if (width > height) {
              if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
              }
            } else {
              if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height;
                height = MAX_HEIGHT;
              }
            }
            
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
            
            // More aggressive compression (0.6 quality instead of 0.7)
            const compressedImage = canvas.toDataURL('image/jpeg', 0.6);
            resolve(compressedImage);
          };
          img.src = event.target.result;
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises).then((images) => {
      setSelectedImages(images);
    });
  };

  const handleAddGallery = () => {
    if (!selectedDate || selectedImages.length === 0) {
      alert("Please select date and images!");
      return;
    }

    const newGallery = {
      id: Date.now(),
      date: selectedDate,
      images: selectedImages,
    };

    const updatedGalleries = [...galleries, newGallery];
    
    try {
      localStorage.setItem("adminGalleries", JSON.stringify(updatedGalleries));
      setGalleries(updatedGalleries);
      setSelectedDate("");
      setSelectedImages([]);
      alert(`Gallery added successfully with ${selectedImages.length} images!`);
    } catch (error) {
      if (error.name === 'QuotaExceededError') {
        alert("Storage limit reached! Please delete some old galleries or upload fewer images at once.");
      } else {
        alert("Error saving gallery: " + error.message);
      }
    }
  };

  const handleDeleteGallery = (id) => {
    const updatedGalleries = galleries.filter((gallery) => gallery.id !== id);
    localStorage.setItem("adminGalleries", JSON.stringify(updatedGalleries));
    setGalleries(updatedGalleries);
  };

  // Seminar functions
  const handleSeminarImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setSeminarImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAddSeminar = () => {
    if (!seminarTitle || !seminarDate || !seminarDescription) {
      alert("Please fill all fields!");
      return;
    }

    const newSeminar = {
      id: Date.now(),
      title: seminarTitle,
      date: seminarDate,
      description: seminarDescription,
      image: seminarImage,
    };

    const updatedSeminars = [...seminars, newSeminar];
    localStorage.setItem("adminSeminars", JSON.stringify(updatedSeminars));
    setSeminars(updatedSeminars);
    setSeminarTitle("");
    setSeminarDate("");
    setSeminarDescription("");
    setSeminarImage("");
    alert("Seminar added successfully!");
  };

  const handleDeleteSeminar = (id) => {
    const updatedSeminars = seminars.filter((seminar) => seminar.id !== id);
    localStorage.setItem("adminSeminars", JSON.stringify(updatedSeminars));
    setSeminars(updatedSeminars);
  };

  // Infrastructure functions
  const handleInfraImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setInfraImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAddInfrastructure = () => {
    if (!infraTitle || !infraDate || !infraDescription) {
      alert("Please fill all fields!");
      return;
    }

    const newInfra = {
      id: Date.now(),
      title: infraTitle,
      date: infraDate,
      description: infraDescription,
      image: infraImage,
    };

    const updatedInfrastructures = [...infrastructures, newInfra];
    localStorage.setItem("adminInfrastructures", JSON.stringify(updatedInfrastructures));
    setInfrastructures(updatedInfrastructures);
    setInfraTitle("");
    setInfraDate("");
    setInfraDescription("");
    setInfraImage("");
    alert("Infrastructure project added successfully!");
  };

  const handleDeleteInfrastructure = (id) => {
    const updatedInfrastructures = infrastructures.filter((infra) => infra.id !== id);
    localStorage.setItem("adminInfrastructures", JSON.stringify(updatedInfrastructures));
    setInfrastructures(updatedInfrastructures);
  };

  // Contact functions
  const handleSaveContact = () => {
    localStorage.setItem("adminContact", JSON.stringify(contactInfo));
    alert("Contact information saved successfully!");
  };

  return (
    <div className="homcss">
      <img src={im1} className="homeimage" alt="Home" />
      <div className="Page">
        <div className="aboutus">
          <div>
            <img src={im2} className="aboutimg" alt="About Us" />
          </div>
          <div className="abouttxt">
            <div className="abouthead">ADMIN DASHBOARD</div>
            <p>
              Manage all aspects of the Arunella Social Service Project website.
              Use the tabs below to manage photo galleries, seminars, infrastructure projects, and contact information.
            </p>
          </div>
        </div>

        <div className="admin-tabs">
          <button 
            className={`tab ${activeTab === "gallery" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("gallery")}
          >
            Gallery
          </button>
          <button 
            className={`tab ${activeTab === "seminar" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("seminar")}
          >
            e-Seminar
          </button>
          <button 
            className={`tab ${activeTab === "infrastructure" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("infrastructure")}
          >
            Infrastructure Development
          </button>
          <button 
            className={`tab ${activeTab === "contact" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("contact")}
          >
            Contact Us
          </button>
        </div>

        {activeTab === "gallery" && (
          <div className="admin-section">
            <div className="admin-upload">
              <h2>Add Gallery</h2>
              <div className="upload-form">
                <label>Select Date:</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="date-input"
                />

                <label>Select Images (JPG/PNG) - You can select up to 50 images at once:</label>
                <input
                  type="file"
                  multiple
                  accept="image/jpeg,image/jpg,image/png"
                  onChange={handleImageSelect}
                  className="file-input"
                />

                {selectedImages.length > 0 && (
                  <div className="preview-images">
                    <strong>{selectedImages.length} image(s) selected</strong>
                    <div className="image-preview-grid">
                      {selectedImages.map((img, index) => (
                        <img key={index} src={img} alt={`Preview ${index + 1}`} className="preview-thumbnail" />
                      ))}
                    </div>
                  </div>
                )}

                <button onClick={handleAddGallery} className="add-btn">
                  Add Gallery
                </button>
              </div>
            </div>

            <div className="gallery-container">
              <h3>Existing Galleries</h3>
              {galleries.length === 0 ? (
                <p>No galleries added yet.</p>
              ) : (
                galleries
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map((gallery) => (
                    <div key={gallery.id} className="gallery-item">
                      <div className="gallery-header">
                        <h3>{new Date(gallery.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}</h3>
                        <button onClick={() => handleDeleteGallery(gallery.id)} className="delete-btn">
                          Delete ({gallery.images.length} images)
                        </button>
                      </div>
                      <div className="gallery-images">
                        {gallery.images.map((image, index) => (
                          <img key={index} src={image} alt={`Gallery ${index + 1}`} className="gallery-img" />
                        ))}
                      </div>
                    </div>
                  ))
              )}
            </div>
          </div>
        )}

        {activeTab === "seminar" && (
          <div className="admin-section">
            <div className="admin-upload">
              <h2>Add Seminar</h2>
              <div className="upload-form">
                <label>Title:</label>
                <input
                  type="text"
                  value={seminarTitle}
                  onChange={(e) => setSeminarTitle(e.target.value)}
                  className="text-input"
                  placeholder="Enter seminar title"
                />

                <label>Date:</label>
                <input
                  type="date"
                  value={seminarDate}
                  onChange={(e) => setSeminarDate(e.target.value)}
                  className="date-input"
                />

                <label>Description:</label>
                <textarea
                  value={seminarDescription}
                  onChange={(e) => setSeminarDescription(e.target.value)}
                  className="text-area"
                  placeholder="Enter seminar description"
                  rows="4"
                />

                <label>Image (Optional):</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSeminarImageSelect}
                  className="file-input"
                />

                <button onClick={handleAddSeminar} className="add-btn">
                  Add Seminar
                </button>
              </div>
            </div>

            <div className="seminar-list">
              <h3>Existing Seminars</h3>
              {seminars.length === 0 ? (
                <p>No seminars added yet.</p>
              ) : (
                seminars
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map((seminar) => (
                    <div key={seminar.id} className="seminar-item">
                      <div className="seminar-header">
                        <h3>{seminar.title}</h3>
                        <button onClick={() => handleDeleteSeminar(seminar.id)} className="delete-btn">
                          Delete
                        </button>
                      </div>
                      <p className="seminar-date">{new Date(seminar.date).toLocaleDateString()}</p>
                      <p>{seminar.description}</p>
                      {seminar.image && <img src={seminar.image} alt={seminar.title} className="seminar-img" />}
                    </div>
                  ))
              )}
            </div>
          </div>
        )}

        {activeTab === "infrastructure" && (
          <div className="admin-section">
            <div className="admin-upload">
              <h2>Add Infrastructure Project</h2>
              <div className="upload-form">
                <label>Title:</label>
                <input
                  type="text"
                  value={infraTitle}
                  onChange={(e) => setInfraTitle(e.target.value)}
                  className="text-input"
                  placeholder="Enter project title"
                />

                <label>Date:</label>
                <input
                  type="date"
                  value={infraDate}
                  onChange={(e) => setInfraDate(e.target.value)}
                  className="date-input"
                />

                <label>Description:</label>
                <textarea
                  value={infraDescription}
                  onChange={(e) => setInfraDescription(e.target.value)}
                  className="text-area"
                  placeholder="Enter project description"
                  rows="4"
                />

                <label>Image (Optional):</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleInfraImageSelect}
                  className="file-input"
                />

                <button onClick={handleAddInfrastructure} className="add-btn">
                  Add Project
                </button>
              </div>
            </div>

            <div className="seminar-list">
              <h3>Existing Projects</h3>
              {infrastructures.length === 0 ? (
                <p>No projects added yet.</p>
              ) : (
                infrastructures
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map((infra) => (
                    <div key={infra.id} className="seminar-item">
                      <div className="seminar-header">
                        <h3>{infra.title}</h3>
                        <button onClick={() => handleDeleteInfrastructure(infra.id)} className="delete-btn">
                          Delete
                        </button>
                      </div>
                      <p className="seminar-date">{new Date(infra.date).toLocaleDateString()}</p>
                      <p>{infra.description}</p>
                      {infra.image && <img src={infra.image} alt={infra.title} className="seminar-img" />}
                    </div>
                  ))
              )}
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="admin-section">
            <div className="admin-upload">
              <h2>Manage Contact Information</h2>
              <div className="upload-form">
                <label>Phone Number 1:</label>
                <input
                  type="text"
                  value={contactInfo.phone1}
                  onChange={(e) => setContactInfo({...contactInfo, phone1: e.target.value})}
                  className="text-input"
                  placeholder="Enter primary phone number"
                />

                <label>Phone Number 2:</label>
                <input
                  type="text"
                  value={contactInfo.phone2}
                  onChange={(e) => setContactInfo({...contactInfo, phone2: e.target.value})}
                  className="text-input"
                  placeholder="Enter secondary phone number"
                />

                <label>Email 1:</label>
                <input
                  type="email"
                  value={contactInfo.email1}
                  onChange={(e) => setContactInfo({...contactInfo, email1: e.target.value})}
                  className="text-input"
                  placeholder="Enter primary email"
                />

                <label>Email 2:</label>
                <input
                  type="email"
                  value={contactInfo.email2}
                  onChange={(e) => setContactInfo({...contactInfo, email2: e.target.value})}
                  className="text-input"
                  placeholder="Enter secondary email"
                />

                <label>Address:</label>
                <textarea
                  value={contactInfo.address}
                  onChange={(e) => setContactInfo({...contactInfo, address: e.target.value})}
                  className="text-area"
                  placeholder="Enter address"
                  rows="3"
                />

                <button onClick={handleSaveContact} className="add-btn">
                  Save Contact Information
                </button>
              </div>
            </div>

            <div className="contact-info">
              <h3>Current Contact Information</h3>
              {contactInfo.phone1 && <div className="contact-item"><strong>Phone 1:</strong> {contactInfo.phone1}</div>}
              {contactInfo.phone2 && <div className="contact-item"><strong>Phone 2:</strong> {contactInfo.phone2}</div>}
              {contactInfo.email1 && <div className="contact-item"><strong>Email 1:</strong> {contactInfo.email1}</div>}
              {contactInfo.email2 && <div className="contact-item"><strong>Email 2:</strong> {contactInfo.email2}</div>}
              {contactInfo.address && <div className="contact-item"><strong>Address:</strong> {contactInfo.address}</div>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
