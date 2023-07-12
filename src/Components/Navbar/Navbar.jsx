import React, { useState } from "react";
import { NavbarContainer } from "./Navbar.style";
import { Link } from "react-router-dom";
import { VscThreeBars, VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  return (
    <NavbarContainer>
      <div className="desktop-navbar">
        <div className="navbar-left">
          <div className="logo-container">
            <div className="logo-circle top">
              <h2>T</h2>
            </div>
            <div className="logo-circle bottom">
              <h2>JOB</h2>
            </div>
          </div>
          <Link to={"/"} className="logo-title">
            T-J<span>O</span>B
          </Link>
        </div>
        <div className="navbar-middle">
          <Link to={"/"} className="desktop-links">
            Home
          </Link>
          <Link to={"find-a-job"} className="desktop-links">
            Find a job
          </Link>
          <Link to={"category"} className="desktop-links">
            Category
          </Link>
          <Link to={"/about"} className="desktop-links">
            About us
          </Link>
          <Link to={"/contact"} className="desktop-links">
            Contact us
          </Link>
        </div>
        <div className="navbar-right">
          <button className="navbar-btn">Register</button>
        </div>
      </div>
      <div className="mobile-navbar">
        <div className="mobile-navbar-container">
          <div className="mobile-nav-left">
            <div className="logo-container">
              <div className="logo-circle top">
                <h2>T</h2>
              </div>
              <div className="logo-circle bottom">
                <h2>JOB</h2>
              </div>
            </div>
            <Link to={"/"} className="logo-title">
              T-J<span>O</span>B
            </Link>
          </div>

          <div className="mobile-nav-right" onClick={handleToggle}>
            <h3>Menu</h3>
            {toggle ? (
              <VscChromeClose color="#fff" size={28} />
            ) : (
              <VscThreeBars color="#fff" size={28} />
            )}
          </div>
        </div>

        <div>
          {toggle && (
            <div className="mobile-menu" >
              <Link to={"/"} className="mobile-links" onClick={() => setToggle(!toggle)} >
                Home
              </Link>
              <Link to={"find-a-job"} className="mobile-links" onClick={() => setToggle(!toggle)} >
                Find a job
              </Link>
              <Link to={"category"} className="mobile-links" onClick={() => setToggle(!toggle)} >
                Category
              </Link>
              <Link to={"/about"} className="mobile-links" onClick={() => setToggle(!toggle)} >
                About us
              </Link>
              <Link to={"/contact"} className="mobile-links" onClick={() => setToggle(!toggle)} >
                Contact us
              </Link>
            </div>
          )}
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
