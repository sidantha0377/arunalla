import "./App.css";
import Navebar from "./navebar/Navebar";
import Fotbar from "./Fotbar/Fotbar.js";

// Import router - add BrowserRouter
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages
import Home from "./page/Home.js";
import Seminar from "./page/Seminar.js";
import ContactUs from "./page/ContactUs.js";

function App() {
  return (
    <Router>
      <Navebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/e-seminar" element={<Seminar />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Fotbar />
    </Router>
  );
}

export default App;
