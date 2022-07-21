import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { loginByGoogle, loginByGithub } from "../../authentication/firebase";

const LoginBySosmed = () => {
  const googleHandler = () => {
    loginByGoogle();
  };
  const githubHandler = () => {
    loginByGithub();
  };
  return (
    <>
      <Container>
        <Row className="justify-content-between">
          <Col>
            <a
              href="#"
              onClick={googleHandler}
              className="bg-light px-4 py-2 rounded d-flex justify-content-center align-items-center"
            >
              <FcGoogle />
            </a>
          </Col>
          <Col>
            <a
              href="#"
              onClick={githubHandler}
              className="bg-light px-4 py-2 rounded d-flex justify-content-center align-items-center"
            >
              <BsGithub className="text-dark" />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginBySosmed;
