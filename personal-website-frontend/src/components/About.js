import FadeIn from 'react-fade-in';
import portrait from '../assets/personalpicture.png';

// I want this to return a Div either on top, or on the left, with my profile picture. 
// perhaps smaller screens will have the picture on top and bigger screens will have it on the side? 
function About() {
    return (
      <div className = "d-flex flex-column justify-content-center align-items-center">
        <FadeIn delay = {0} transitionDuration = {600}>
          <img className="portrait pb-2" src={portrait} alt="portrait"/>
        </FadeIn>

        <FadeIn delay = {0} transitionDuration = {600}>
        <h1>
            Hey, I'm Braian.
        </h1>
        </FadeIn>

        <FadeIn delay = {800} transitionDuration = {600}>
        <h2>
            A full stack developer and Computer Science student based in London, England.
        </h2>
        </FadeIn>
      </div>
    );
  }
  
  export default About;
  