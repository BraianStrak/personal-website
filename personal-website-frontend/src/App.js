import './App.css';
import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Links from "./components/Links"
import React, { useState, useEffect } from "react";


function App() {

  const [currentPage, changeCurrentPage] = useState();

  //on first mount default to the about page
  useEffect(() => {
    changeCurrentPage("About");
  }, []);

  //consider moving this to a different file if it gets more complex than this
  //returns correct page based on currentPage prop value
  const PageContent = (props) => {
    if(props.page === "Contact") {
      return < Contact />;
    }
    if(props.page === "Skills") {
      return < Skills />;
    }
    return <About/>
  }

  return (
    <div className = "container-fluid m-0 primary-background fixed-bottom fixed-top">
      <div className = "page-margin primary-border fixed-bottom fixed-top">

        <div className = "navbar-position">
            < Navbar changeCurrentPage = {changeCurrentPage} currentPage = {currentPage} />
        </div>

        <div className="name-mark">
          Braian Strak
        </div>

        <div className = "col h-100 w-100 p-0 m-0 d-flex align-items-center justify-content-center flex-column">
          <div className = "row main-content-wrapper">
            < PageContent page = {currentPage} />
          </div>
        </div>

        <div className="media-position">
            < Links />
        </div>

        
      </div>
    </div>
  );
}

export default App;
