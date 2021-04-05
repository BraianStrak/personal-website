import classNames from "classnames";

const Navbar = (props) => {
  return (
    <div>
      <button className={classNames('grow_box', {'selected_grow_box' : props.currentPage === 'About'})}
        onClick={() => props.changeCurrentPage("About")}>

            About
      </button>
      <button className={classNames('grow_box', {'selected_grow_box' : props.currentPage === 'Skills'})}
        onClick={() => props.changeCurrentPage("Skills")}>

            Skills
      </button>
      <button className={classNames('grow_box', {'selected_grow_box' : props.currentPage === 'Contact'})}
        onClick={() => props.changeCurrentPage("Contact")}>
            Contact
      </button>
    </div>
  );
}

export default Navbar;
