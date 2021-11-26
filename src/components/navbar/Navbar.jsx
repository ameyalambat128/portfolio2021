import "./navbar.scss";
import { AiFillProject, AiFillContacts } from "react-icons/ai";
// import { RiChat4Line } from "react-icons/ri";

import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <div className="wrapper">
        <div className="left">
          {/* <RiChat4Line className="name-icon" /> */}{" "}
          {/*You can add an icon by uncommenting the above line, make changes in the correct stylesheet*/}
          <a href="#intro" className="name">
            Ameya Lambat
          </a>
        </div>
        <div className="right">
          <a href="#intro" className="item-container">
            <Button variant="text" className="button">
              Introduction
            </Button>
          </a>
          <a href="#projects" className="item-container">
            <Button variant="text" className="button">
              <AiFillProject className="icon" />
              Projects
            </Button>
          </a>
          <a href="#contact" className="item-container">
            <Button variant="text" className="button">
              <AiFillContacts className="icon" />
              Contact
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
