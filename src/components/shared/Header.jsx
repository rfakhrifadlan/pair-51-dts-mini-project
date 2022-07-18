import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    navigate("/login");
  };

  return (
    <Navbar className="bg-transparent fixed-top" expand="lg">
      <Container>
        <Navbar.Brand as={Link}
                to="/">
          <img
            src="assets/logo.png"
            width="150"
            // height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-start">
              <Nav.Link
                as={Link}
                to="/"
                className="text-decoration-none text-white"
              >
                Home
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/movie"
                className="text-decoration-none text-white"
              >
                Explore Movies
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
        <Nav.Link as={Link} to="/register" className="btn btn-danger text-light">
        Register
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default Header;
