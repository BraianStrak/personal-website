import About from "./About"
import Skills from "./Skills"
import Contact from "./Contact"



const Navbar = (props) => {
  return (
    <div>
      <button onClick={() => props.changeCurrentPage("About")}>
            About
      </button>
      <button onClick={() => props.changeCurrentPage("Skills")}>
            Skills
      </button>
      <button onClick={() => props.changeCurrentPage("Contact")}>
            Contact
      </button>
    </div>
  );
}

export default Navbar;
