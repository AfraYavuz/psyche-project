import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="nav">
      <div className="nav-container">
        <div className="navbar">
          <div className="logo">PSYCHE</div>
          <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
              <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
              <span
                className={navOpen ? "lineBottom spin" : "lineBottom"}
              ></span>
            </div>
          </div>
        </div>
        <div
          className="nav-overlay"
          style={{
            top: navOpen ? "0" : "100%",
            transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/">Anasayfa</Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link to="/">Home</Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link to="/">Doktorlar</Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link to="/">Psikoloji </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link to="/">Psikolojik Testler</Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link to="/">S.S.S</Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link to="/">İletişim</Link>
              <div className="nav-item-wrapper"></div>
            </li>
          </ul>
          <div className="nav-footer">
            <div className="location">
              <span>Toront,ON</span>
            </div>
            <div className="nav-social-media">
              <ul>
                <li>
                  <a href="#">Youtube</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
