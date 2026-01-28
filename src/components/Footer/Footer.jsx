import React from "react";
import "./Footer.scss";
import footer_img_1 from './Footer.image/Vector (1).png'
import footer_img_2 from './Footer.image/Vector (2).png'
import footer_img_3 from './Footer.image/Vector (3).png'
import footer_img_4 from './Footer.image/Vector (4).png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Left */}
        <div className="footer__about">
          <h2>BURAK</h2>
          <p>
            Focusing on the gourmet Turkish breakfast as well as the youth
            society, CZN Burak Gurme aims to bring Turkish cuisine back. CZN
            Burak Gurme creates an illusion with its cuisine.
          </p>

          <div className="footer__socials">
            <a href=""><img src={footer_img_1} alt="" /></a>
            <a href=""><img src={footer_img_2} alt="" /></a>
            <a href=""><img src={footer_img_3} alt="" /></a>
            <a href=""><img src={footer_img_4} alt="" /></a>
          </div>
        </div>

        {/* Middle */}
        <div className="footer__links">
          <h3>Fields</h3>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Products</a></li>
            <li><a href="">Help</a></li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer__contact">
          <h3>Contact us</h3>
          <ul>
            <li><span>L.</span> Downtown, Dubai</li>
            <li><span>P.</span> +971 4 554 7777</li>
            <li><span>E.</span> devexuz@gmail.com</li>
            <li><span>H.</span> Visit 24 hours</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        © Copyright Devex Global, All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
