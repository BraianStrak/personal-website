import express from  "../assets/express.png"
import android from  "../assets/android.png"
import cplusplus from  "../assets/cplusplus.png"
import java from  "../assets/java.png"
import mongodb from  "../assets/mongodb.png"
import nodejs from  "../assets/nodejs.png"
import rails from  "../assets/rails.png"
import react from  "../assets/react.png"

import FadeIn from 'react-fade-in';


function Skills() {
    return (
      <div className = "col">
        <FadeIn delay={0} transitionDuration={600} className="row">
          <h1>I'm experienced in:</h1>
        </FadeIn>

        
        <FadeIn delay={400} transitionDuration={600} className="col d-flex flex-wrap justify-content-center">
          <div className="col skill-wrapper d-flex flex-column align-items-center justify-content-center">
            <img className="skill-icon" src={express} alt="express icon"/>
            <h4>Express JS</h4>
          </div>
          <div className="col skill-wrapper d-flex flex-column align-items-center justify-content-center">
            <img className="skill-icon" src={mongodb} alt="express icon"/>
            <h4>MongoDB</h4>
          </div>
          <div className="col skill-wrapper d-flex flex-column align-items-center justify-content-center">
            <img className="skill-icon" src={nodejs} alt="express icon"/>
            <h4>Node JS</h4>
          </div>
          <div className="col skill-wrapper d-flex flex-column align-items-center justify-content-center">
            <img className="skill-icon" src={react} alt="express icon"/>
            <h4>React</h4>
          </div>
          <div className="col skill-wrapper d-flex flex-column align-items-center justify-content-center">
            <img className="skill-icon" src={rails} alt="express icon"/>
            <h4>Ruby on Rails</h4>
          </div>
          <div className="col skill-wrapper d-flex flex-column align-items-center justify-content-center">
            <img className="skill-icon" src={android} alt="express icon"/>
            <h4>Android</h4>
          </div>
          <div className="col skill-wrapper d-flex flex-column align-items-center justify-content-center">
            <img className="skill-icon" src={java} alt="express icon"/>
            <h4>Java</h4>
          </div>
          <div className="col skill-wrapper d-flex flex-column align-items-center justify-content-center">
            <img className="skill-icon" src={cplusplus} alt="express icon"/>
            <h4>C++</h4>
          </div>
        </FadeIn>
      </div>
    );
  }
  //express, mongo, node, react, rails, android, java, cpp
  export default Skills;
  