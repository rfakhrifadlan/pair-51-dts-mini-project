import React, { useState, useEffect } from "react";
import PageLayout from "../layouts/PageLayout";
import Container from "react-bootstrap/Container";
import LoginWrapper from "../components/LoginCom/LoginWrapper";
import LoginBase from "../components/LoginCom/LoginForm";
import LoginTitle from "../components/LoginCom/LoginTitle";
import LoginInput from "../components/LoginCom/LoginInput";
import LoginText from "../components/LoginCom/LoginText";
import LoginCaptcha from "../components/LoginCom/LoginFormCaptcha";
import "../components/LoginCom/LoginFormStyles.css";
import Button from "react-bootstrap/Button";
import { auth, registerByEmail } from "../authentication/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const Register = () => {
  var heroImage = {
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),  url(${"assets/img/hero-netflix.jpg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  };

  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      navigate("/movie");
    }
  }, [loading, user, navigate]);

  const [account, setAccount] = useState({
    name: "",
    email: "",
    password: "",
  });
  const fieldNameChange = (event) => {
    setAccount({
      ...account,
      name: event.target.value,
    });
  };
  const fieldEmailChange = (event) => {
    setAccount({
      ...account,
      email: event.target.value,
    });
  };

  const fieldPasswordChange = (event) => {
    setAccount({
      ...account,
      password: event.target.value,
    });
  };

  const registerHandler = () => {
    registerByEmail(account.email, account.password);
    // navigate("/login");
  };
  return (
    <>
      <PageLayout>
        <Container
          fluid
          style={heroImage}
          className="vh-100 d-flex align-items-center"
        >
          <LoginWrapper>
            <LoginBase method="POST">
              <LoginTitle>Sign Up</LoginTitle>
              <LoginInput
                type="text"
                placeholder="First Name"
                value={account.name}
                onChange={fieldNameChange}
              />
              <LoginInput
                type="text"
                placeholder="Email Address"
                value={account.email}
                onChange={fieldEmailChange}
              />
              <LoginInput
                type="password"
                placeholder="Password"
                autoComplete="off"
                value={account.password}
                onChange={fieldPasswordChange}
              />
              <Button className="btn btn-danger mb-2" onClick={registerHandler}>
                Sign Up
              </Button>
              <LoginText>
                Already a user?
                <Link
                  to="/login"
                  className="sign-form-link"
                  style={{ textDecoration: "none" }}
                >
                  Sign in now.
                </Link>
              </LoginText>
              <LoginCaptcha>
                This page is protected by Google reCAPTCHA to ensure you are not
                a bot.
              </LoginCaptcha>
            </LoginBase>
          </LoginWrapper>
        </Container>
      </PageLayout>
    </>
  );
};

export default Register;
