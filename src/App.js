import "./App.css";
import Navebar from "./navebar/Navebar";
import Fotbar from "./Fotbar/Fotbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./page/Home.js";
import Seminar from "./page/Seminar.js";
import ContactUs from "./page/ContactUs.js";
import AdminDashboard from "./page/AdminDashboard.js";
import Gallery from "./page/Gallery.js";
import Infrastructure from "./page/Infrastructure.js";

function App() {
  return (
    <Router>
      <Navebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/e-seminar" element={<Seminar />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Fotbar />
    </Router>
  );
}

export default App;
