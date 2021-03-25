
const Navbar = (props) => {
  return (
    <div>
      <button className = "fade-in fade-in:hover" onClick={() => props.changeCurrentPage("About")}>
            About
      </button>
      <button className = "fade-in fade-in:hover" onClick={() => props.changeCurrentPage("Skills")}>
            Skills
      </button>
      <button className = "fade-in fade-in:hover" onClick={() => props.changeCurrentPage("Contact")}>
            Contact
      </button>
    </div>
  );
}

export default Navbar;
