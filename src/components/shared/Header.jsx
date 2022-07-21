import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";

import { auth, logout } from "../../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Header = () => {
  const navigate = useNavigate();

  const [tombolAuth, setTombolAuth] = useState({
    jenis: "register",
    caption: "Sign Up",
  });
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      return;
    }

    if (user) {
      setTombolAuth({ jenis: "keluar", caption: "Sign Out" });
    } else {
      setTombolAuth({ jenis: "register", caption: "Sign Up" });
    }
  }, [user]);

  const logoutHandler = () => {
    logout();
    navigate("/");
  };
  return (
    <Navbar className="bg-transparent fixed-top" expand="lg">
      {/* {console.log(location.pathname)} */}
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={`${process.env.REACT_APP_BASE_URL}/assets/logo.png`}
            width="150"
            // height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="order-lg-2 d-flex justify-content-between">
          {!user && tombolAuth.jenis == "register" ? (
            <Button variant="danger" as={Link} to="/register">
              {tombolAuth.caption}
            </Button>
          ) : (
            <>
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
              <Button variant="danger" onClick={logoutHandler}>
                {/* {tombolAuth.caption} */}
                Sign Out
              </Button>
            </>
          )}
        </div>
        
        <div className="order-lg-1 justify-content-md-center">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/"
                className="text-decoration-none text-white"
              >
                Home
              </Nav.Link>
              {!user ? (
                ""
              ) : (
                <Nav.Link
                  as={Link}
                  to="/movie"
                  className="text-decoration-none text-white"
                >
                  Explore Movies
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
