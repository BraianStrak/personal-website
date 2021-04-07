import express from  "../assets/express.png"

function Skills() {
    return (
      <div className = "">
        <div className="skill-wrapper d-flex flex-column align-items-center justify-content-center">
          <img className="skill-icon" src={express} alt="express icon"/>
          <h4>Express JS</h4>
        </div>
        
      </div>
    );
  }
  //express, mongo, node, react, rails, android, java, cpp
  export default Skills;
  