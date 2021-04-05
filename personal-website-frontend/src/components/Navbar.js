
const Navbar = (props) => {
  return (
    <div>
      <button className = "grow_box" onClick={() => props.changeCurrentPage("About")}>
            About
      </button>
      <button className = "grow_box" onClick={() => props.changeCurrentPage("Skills")}>
            Skills
      </button>
      <button className = "grow_box" onClick={() => props.changeCurrentPage("Contact")}>
            Contact
      </button>
    </div>
  );
}

export default Navbar;
