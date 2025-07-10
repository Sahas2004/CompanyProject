import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";
import logo from "../components/logo.jpeg"
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="py-5 text-white ">
          
          <Col
            md={4}
            className="footer-brand text-center d-flex flex-column align-items-center mb-4 mb-md-0"
          >
            <img
              src={logo}
              alt="Enlace Solutions"
              className="footer-logo mb-2"
            />
            <p className="footer-tagline">Empowering Futures Through Careers</p>
            <div className="footer-social-icons d-flex justify-content-center gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkd"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon ins"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon fb"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon tw"
              >
                <FaXTwitter />
              </a>
            </div>
          </Col>

          
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-heading">EXPLORE</h5>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/What-We-Do">What We Do</Link>
              </li>
              <li>
                <Link to="/candidate">Candidate</Link>
              </li>
              <li>
                <Link to="/jobs">Jobs</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </Col>

        
          <Col md={4}>
            <h5 className="footer-heading">CONTACT</h5>
            <ul className="footer-contact">
              <li>
                <a
                  href="https://maps.app.goo.gl/sUnQMGYfQSxhRZV17"
                  target="_blank"
                  class="Anchor_of_Footer Footer-List111"
                >
                  <FaMapMarkerAlt /> 603, Shriram chandrama hsg society, near
                  Renault showroom, Baner highway side road, Baner, Pune-411045
                </a>
              </li>
              <li>
                <FaPhoneAlt /> +91 9270401369
              </li>
            

              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle text-center "
                  style={{width:"200px"}}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Connect With Us..
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a
                      className="dropdown-item active"
                      href="mailto:careers@mindcraftershrpartners.com"
                      target="_blank"
                    >
                      Carrer Opportunity
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="mailto:hr@mindcraftershrpartner.com"
                    >
                      Connect To Hr
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="mailto:info@mindcraftershrpartner.com"
                    >
                      More Details
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="mailto:contactus@mindcraftershrpartner.com"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <li>
                <FaGlobe />
                <a
                  href="https://mindcraftershrpartner.com/"
                  class="Anchor_of_Footer Footer-List111"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  www.mindcraftershrpartner.com
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        
      </Container>

    
      <div className="footer-bottom text-center text-white py-3">
        © {new Date().getFullYear()} Cortica Web Solutions pvt.ltd . All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
