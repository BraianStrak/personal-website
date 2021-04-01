import linkedin from "./linkedin.png"
import github from "./github.png"

function Links() {
    return (
      <div>
          <a className = "p-2" href="https://uk.linkedin.com/in/braian-strak-270272189?trk=people_directory">
            <img className="media-icon" src={linkedin} alt="linkedin link"/>
          </a>

          <a href="https://github.com/BraianStrak">
            <img className="media-icon" src={github} alt="github link"/>
          </a>
      </div>
    );
  }
  
  export default Links;
  