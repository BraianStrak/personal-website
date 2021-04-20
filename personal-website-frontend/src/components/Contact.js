import FadeIn from 'react-fade-in';

function Contact() {
    return (
      <div>
      <FadeIn delay = {0} transitionDuration = {600}>
      <h1>
        Let's collaborate!
      </h1>
      </FadeIn>
      <FadeIn delay = {800} transitionDuration = {600}>
      <h2>
        Contact me on <a rel="noreferrer" target="_blank" href = "https://uk.linkedin.com/in/braian-strak-270272189?trk=people_directory">LinkedIn</a> or at b.strak99@gmail.com
      </h2>
      </FadeIn>
      </div>
    );
  }
  
  export default Contact;
  