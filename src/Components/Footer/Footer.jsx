import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMail,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FooterContainer } from "./Footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-top">
        <div className="footer-top-left"></div>
        <div className="footer-top-middle">
          <h1 className="top-middle-title" >
            T-J<span>O</span>B
          </h1>
        </div>
        <div className="footer-top-right"></div>
      </div>
      <div className="footer-middle">
        <div className="middle-left">
          <Link to={"/"}>Home</Link>
          <Link to={"/find-a-job"}>Find Job</Link>
          <Link to={"/category"}>Category</Link>
        </div>
        <div className="middle-icons">
          <div className="middle-icons-container">
            <AiOutlineMail className="social-icon" />
            <AiFillFacebook className="social-icon" />
            <AiOutlineTwitter className="social-icon" />
          </div>
          <div className="middle-line"></div>
        </div>
        <div className="middle-right">
          <Link>Contact</Link>
          <Link>Privacy</Link>
          <Link>About</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <h1 className="sub-title">Weekly Newsletter</h1>
        <div className="sub-field">
          <input type="email" placeholder="Email" />
          <button className="sub-btn">Subscribe</button>
        </div>
      </div>
      <div className="footer-content">
        <h4 className="footer-content-title">Designed and Developed by Tayo <span>&</span> PythoSalaf </h4>
        <p className="footer-content-text">&#169; 2023 Copyright , All Right Reserved.</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
