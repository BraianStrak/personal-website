import './App.css';
import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import React, { useState, useEffect } from "react";


function App() {

  const [currentPage, changeCurrentPage] = useState();

  //on first mount
  useEffect(() => {
    changeCurrentPage("Contact");
  }, []);

  //delete this extra method after the page switch works
  const changePage = (pageString) => {
    console.log(pageString);
    changeCurrentPage(pageString);
  }

  //consider moving this to a different file if it gets more complex than this
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
    <div className="App">
      hi
      < Navbar changeCurrentPage = {changePage}/>
      < PageContent page = {currentPage} />
      hi
    </div>
  );
}

export default App;
