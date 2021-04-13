import FadeIn from 'react-fade-in';

function About() {
    return (
      <div>
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
  