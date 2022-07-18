import React from "react";
import PageLayout from "../layouts/PageLayout";
import Container from "react-bootstrap/Container";
import LoginWrapper from "../components/LoginCom/LoginWrapper";
import LoginBase from "../components/LoginCom/LoginForm";
import LoginTitle from "../components/LoginCom/LoginTitle";
import LoginInput from "../components/LoginCom/LoginInput";
import LoginButton from "../components/LoginCom/LoginButton";
import LoginText from "../components/LoginCom/LoginText";
import LoginLink from "../components/LoginCom/LoginLink";
import LoginCaptcha from "../components/LoginCom/LoginFormCaptcha";

const Register = () => {
  var heroImage = {
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),  url(${"assets/img/hero-netflix.jpg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
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
            {/* <SignFormBase onSubmit={handleSubmit} method="POST"> */}
            <LoginBase method="POST">
              <LoginTitle>Sign Up</LoginTitle>
              {/* {error ? <SignFormError>{error}</SignFormError> : null} */}
              <LoginInput
                type="text"
                placeholder="First Name"
                // value={firstName}
                value=""
                // onChange={({ target }) => setFirstName(target.value)}
              />
              <LoginInput
                type="text"
                placeholder="Email Address"
                // value={emailAddress}
                value=""
                // onChange={({ target }) => setEmailAddress(target.value)}
              />
              <LoginInput
                type="password"
                placeholder="Password"
                autoComplete="off"
                // value={password}
                value=""
                // onChange={({ target }) => setPassword(target.value)}
              />
              <LoginButton>Sign Up</LoginButton>
              {/* <SignFormButton disabled={IsInvalid}>Sign Up</SignFormButton> */}
              <LoginText>
                Already a user?
                <LoginLink href="/login">Sign in now.</LoginLink>
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
