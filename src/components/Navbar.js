import React from "react";
import "./styles/navbar.css";

export default function Navbar({ curPage, handlePageChange }) {
  return (
    <ul className="nav">
      <li>
        <a
          href="#aboutMe"
          onClick={() => handlePageChange("AboutMe")}
          className={curPage === "AboutMe" ? "nav-link active" : "nav-link"}
        >
          {" "}
          About Me
        </a>
      </li>
      <li>
        <a
          href="#projects"
          onClick={() => handlePageChange("Projects")}
          className={curPage === "Projects" ? "nav-link active" : "nav-link"}
        >
          {" "}
          Projects
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={curPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          {" "}
          Contact
        </a>
      </li>
      <li>
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={curPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          {" "}
          Resume
        </a>
      </li>
    </ul>
  );
}
