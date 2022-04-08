import React from "react";
import "../Stylesheet/Footer.css";
import Logo from "../Images/Logo.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="left_footer">
          <img src={Logo} alt="" />
          <div className="left_footer_links">
            <a href="/">Privacy Policy</a>
            <a href="/">Term of use</a>
          </div>
        </div>
        <div className="right_footer">
          <div className="footer_social">
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              <FaTelegramPlane />
            </a>
            <a href="">
              <FaDiscord />
            </a>
            <a href="">
              <FaRedditAlien />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaGithub />
            </a>
            <a href="">
              <FaFacebookF />
            </a>
          </div>
          <p>&copy; All Smart Finance. Rights and Reserved</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
