import React from "react";
import Navebar from "../navebar/Navebar";
import "./Home.css";
import im1 from "../assets/img/home.jpg";
import im2 from "../assets/img/IMG_1.JPG";
export default function Home() {
  return (
    <div className="homcss">
      {/* <Navebar /> */}
      <img src={im1} className="homeimage" />
      <div className="Page">
        <div className="aboutus">
          <div>
            <img src={im2} className="aboutimg" />
          </div>
          <div className="abouttxt">
            <div className="abouthead">ABOUT US</div>
            <p>
              The Arunella Social Service Project began in 1993, focusing on
              supporting G.C.E. O/L students in the Anuradhapura and Polonnaruwa
              districts. After a period of dormancy, the Engineering Faculty
              Students' Union revived it in 2007 under the theme "For a Better
              Future Generation." Since then, the project has grown stronger,
              expanding beyond seminars to include a scholarship program and
              infrastructure development for underprivileged schools. Today,
              Arunella continues to light the way for education, making a
              lasting impact on students in need. 
            </p>
          </div>
        </div>
        <div className="rmemo">
          <div className="rmemotxt">RECENT MEMORIES</div>
          <div className="rmgalary">
            <div></div>
          </div>
        </div>
        <div className="quicklink">
          <div
            className="qlink"
            onClick={() => (window.location.href = "/scholarship")}
          >
            Scholarship
          </div>
          <div
            className="qlink"
            onClick={() => (window.location.href = "/infrastructure")}
          >
            Infrastructure Development
          </div>
          <div
            className="qlink"
            onClick={() => (window.location.href = "/seminar")}
          >
            Seminar Series
          </div>
        </div>
      </div>
    </div>
  );
}
