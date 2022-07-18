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
        <Navbar.Brand className="fw-bold text-white">Movies 051</Navbar.Brand>
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
        <Button
          variant="light"
          size="sm"
          className="rounded-4"
          onClick={logoutHandler}
        >
          Sign Out
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
