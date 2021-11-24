import "./navbar.scss";
import { Person, BlurOn } from "@mui/icons-material";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="name">
            Ameya Lambat
          </a>
        </div>
        <div className="right">
          <a href="#projects" className="item-container">
            <Button variant="text" className="button">
              <BlurOn className="icon" />
              Projects
            </Button>
          </a>
          <a href="#contact" className="item-container">
            <Button variant="text" className="button">
              <Person className="icon" />
              Contact
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
