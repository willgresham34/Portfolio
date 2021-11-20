import React, { useState } from "react";
import Navbar from "./Navbar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Header from "./Header";
import "./styles/portfolio.css";

export default function Portfolio() {
  const [curPage, setCurPage] = useState("AboutMe");

  const renderPage = () => {
    if (curPage === "AboutMe") {
      return <AboutMe />;
    }
    if (curPage === "Projects") {
      return <Projects />;
    }
    if (curPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurPage(page);

  return (
    <div>
      <Header curPage={curPage} handlePageChange={handlePageChange} />
      <Navbar curPage={curPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
