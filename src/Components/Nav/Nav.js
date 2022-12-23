import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <Router>
      <div className="nav">
        <div className="nav-container">
          <div className="navbar">
            <div className="logo">PSYCHE</div>

            <ul className={active}>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Anasayfa
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Hakkımızda
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Psikoloji Hakkında
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Psikolojik Testler
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Doktorlar
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  S.S.S
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  İletişim
                </a>
              </li>
            </ul>
            <div onClick={navToggle} className={icon}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>

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
              top: navOpen ? "0" : "-100%",
              transitionDelay: navOpen ? "0s" : "0s",
            }}
          >
            <ul className="nav-links">
              <li className="nav-item">
                <Link
                  to="/"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "0.8s" : "0s",
                  }}
                >
                  Anasayfa
                </Link>
                <div className="nav-item-wrapper"></div>
              </li>
              <li className="nav-item">
                <Link
                  to="/projects"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "0.9s" : "0s",
                  }}
                >
                  Hakkımızda
                </Link>
                <div className="nav-item-wrapper"></div>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "1s" : "0s",
                  }}
                >
                  Psikoloji Hakkında
                </Link>
                <div className="nav-item-wrapper"></div>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "1.1s" : "0s",
                  }}
                >
                  Psikolojik Testler
                </Link>
                <div className="nav-item-wrapper"></div>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "1.1s" : "0s",
                  }}
                >
                  Doktorlarımız
                </Link>
                <div className="nav-item-wrapper"></div>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "1.1s" : "0s",
                  }}
                >
                  S.S.S
                </Link>
                <div className="nav-item-wrapper"></div>
              </li>
            </ul>
            <div className="nav-footer">
              <div
                className="location"
                style={{
                  bottom: navOpen ? "0" : "-20px",
                  opacity: navOpen ? "1" : "0",
                  transitionDelay: navOpen ? "1.2s" : "0s",
                }}
              >
                <span>...</span>
              </div>
              <div className="nav-social-media">
                <ul>
                  <li>
                    <a
                      href="/#"
                      style={{
                        bottom: navOpen ? "0" : "-20px",
                        opacity: navOpen ? "1" : "0",
                        transitionDelay: navOpen ? "1.3s" : "0s",
                      }}
                    >
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      style={{
                        bottom: navOpen ? "0" : "-20px",
                        opacity: navOpen ? "1" : "0",
                        transitionDelay: navOpen ? "1.4s" : "0s",
                      }}
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      style={{
                        bottom: navOpen ? "0" : "-20px",
                        opacity: navOpen ? "1" : "0",
                        transitionDelay: navOpen ? "1.4s" : "0s",
                      }}
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      style={{
                        bottom: navOpen ? "0" : "-20px",
                        opacity: navOpen ? "1" : "0",
                        transitionDelay: navOpen ? "1.4s" : "0s",
                      }}
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Nav;
