
import React, { useEffect, useRef, useState } from "react";
import { Navbar, Nav, Container, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import "./NavbarComponent.css";
import logo from "../components/logo.jpeg"

function NavbarComponent() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".custom-navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarCollapseRef = useRef(null);
  const handleNavLinkClick = () => {
    const bsCollapse = new window.bootstrap.Collapse(
      navbarCollapseRef.current,
      { toggle: false }
    );
    bsCollapse.hide();
  };

  return (
    <>
      <Navbar
        sticky="top"
        expand="lg"
        variant="dark"
        className="custom-navbar"
        collapseOnSelect
      >
        <Container >
          <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center Navv">
            <img
              src={logo}
              alt="Mindcrafters Logo"
              className="navbar-logo"
            />
            <div className="brand-text ms-2">
              <div className="brand-title">Mindcrafters</div>
              <div className="brand-subtitle">HR Partner</div>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse ref={navbarCollapseRef}>
            <Nav className="ms-auto text-uppercase">
              <Nav.Link
                as={NavLink}
                to="/"
                onClick={handleNavLinkClick}
                className={({ isActive }) => isActive ? "active nav-link" : "nav-link align"}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/about"
                onClick={handleNavLinkClick}
                className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/What-We-Do"
                onClick={handleNavLinkClick}
                className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
              >
                What We Do
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/candidate"
                onClick={handleNavLinkClick}
                className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
              >
                Candidate
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/jobs"
                onClick={handleNavLinkClick}
                className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
              >
                Jobs
              </Nav.Link>

               


              <Nav.Link
                as={NavLink}
                to="/contact"
                onClick={handleNavLinkClick}
                className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}
              >
                Contact Us
              </Nav.Link>

              <Nav.Link
                as="span"
                onClick={() => setShowRegister(true)}
                style={{ cursor: "pointer" }}
              >
                <span className="btn btn-outline-light btn-sm">Register</span>
              </Nav.Link>
              <Nav.Link
                as="span"
                onClick={() => setShowLogin(true)}
                style={{ cursor: "pointer" }}
              >
                <span className="btn btn-outline-light btn-sm">Log In</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

   
      <Modal show={showRegister} onHide={() => setShowRegister(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Register Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterForm />
        </Modal.Body>
      </Modal>


      <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;