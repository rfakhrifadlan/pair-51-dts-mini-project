import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Header = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    navigate("/login");
  };

  return (
    <Navbar className="bg-transparent fixed-top" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={`${BASE_URL}/assets/logo.png`}
            width="150"
            // height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        
        <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
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
        <div className="d-lg-flex justify-content-end">
        <Nav.Link as={Link} to="/search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#FFF"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </Nav.Link>
        <Button variant="danger" as={Link}
          to="/register">Sign Up</Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
