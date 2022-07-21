import React, { useState } from "react";
import PageLayout from "../layouts/PageLayout";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import CardMovie from "../components/CardMovie";
import Feedback from "react-bootstrap/Feedback";
const Search = () => {
  const [input, setInput] = useState("");
  const result = document.getElementById("result"); 
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <PageLayout>
        <Container className="d-flex flex-column justify-content-center align-items-center vh-50">
          <div className="text-center mt-5">
            <h1 className="display-4 fw-bold">Explore your favorite movies.</h1>
            <p>
              We provide the best experience when you watch alone, or with
              friends and family
            </p>
          </div>
          <Col className="mx-auto" lg={6}>
            <Form.Control
              aria-label="Example text with button addon"
              aria-describedby="basic-addon"
              placeholder="Please type title"
              onChange={onInputChange}
              required
              value={input}
            />
          </Col>
        </Container>
        <Container>
          <h3 className="fw-bold mb-3">Popular Search</h3>
          
          <div id="result"></div>
          <Row className="justify-content-center">
            <CardMovie 
              url={`search/multi?language=en-US&page=1&include_adult=false&query=${
                input ? input : "a"
              }`}
              slice="30"
            />
          </Row>
        </Container>
      </PageLayout>
    </>
  );
};

export default Search;
