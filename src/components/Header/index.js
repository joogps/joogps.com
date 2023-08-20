import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"
import github from "../../images/social/github.svg";
import twitter from "../../images/social/twitter.svg";
import youtube from "../../images/social/youtube.svg";
import instagram from "../../images/social/instagram.svg";

function Header() {
  const logo = (
    <svg class="logo" viewBox="0 0 177 96" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>logo</title>
        <g id="joao" fill="#000000" fill-rule="nonzero">
            <text font-size="96.0496595" letter-spacing="-8">
                <tspan x="2.45483258" y="73.8494326">joao</tspan>
            </text>
            <text id="joogps.com" font-size="15" letter-spacing="-1.5771">
                <tspan x="27.4563656" y="87.873085">joogps.com</tspan>
            </text>
        </g>
    </svg>
  );

  return (
    <header class="page-header">
      <Link to="https://joogps.com">{logo}</Link>

      <div class="social">
        <a href="https://github.com/joogps">
          <img
            src={github}
            alt="GitHub"
          />
        </a>
        <a href="https://twitter.com/joogps">
          <img
            src={twitter}
            alt="Twitter"
          />
        </a>
        <a href="https://www.youtube.com/channel/UCoI_nPpWO2sY8wVViyOmAIA/">
          <img
            src={youtube}
            alt="YouTube"
          />
        </a>
        <a href="https://www.instagram.com/joogps/">
          <img
            src={instagram}
            alt="Instagram"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;