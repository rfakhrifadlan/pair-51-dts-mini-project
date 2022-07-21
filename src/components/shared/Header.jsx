import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import { useLocation, Link, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const logoutHandler = () => {
    navigate("/login");
  };

  return (
    <Navbar className="bg-transparent fixed-top" expand="lg">
      {/* {console.log(location.pathname)} */}
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="assets/logo.png"
            width="150"
            // height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="justify-content-center">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-center">
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
                Movies
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
        <Nav.Link as={Link} to="/login" className="btn btn-danger text-light">
          Masuk
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default Header;
