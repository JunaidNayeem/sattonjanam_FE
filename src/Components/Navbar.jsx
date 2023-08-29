import { NavLink } from "react-router-dom";
import "../scss/Navbar.scss";
import logo from "../assets/logo2.svg";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="navbar">
      <div className="content-container">
        <div className="logoContent">
            <div className="logo-title">
              <img src={logo} alt="logo"/>
            </div>
            <div className="contact">
                <p className="phone"><i className="bi bi-telephone-fill"></i> +91-11-47094491</p>
                <p className="phone"><i className="bi bi-phone"></i> +91-9599991982</p>
                <p><i className="bi bi-envelope-fill"></i> contact@wedgatematrimony.com</p>
                <NavLink to={`/register`}><button>Register</button></NavLink>
                <NavLink to={`/login`}><button>Login</button></NavLink>
            </div>
        </div>
        <div className='content'>
          <ul className={`links ${isMenuOpen ? "open" : ""}`} style={{zIndex: "3"}}>
            <li>
              <NavLink to={"/"} onClick={toggleMenu}>
               Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/service"} onClick={toggleMenu}>
                Services
              </NavLink>
            </li>
           
            <li>
              <NavLink to={"/successStories"} onClick={toggleMenu}>
                Success Stories
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} onClick={toggleMenu}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} onClick={toggleMenu}>
                Contact us
              </NavLink>
            </li>
          </ul>
          <div className="nav-btn" onClick={toggleMenu}>
            <MenuOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

