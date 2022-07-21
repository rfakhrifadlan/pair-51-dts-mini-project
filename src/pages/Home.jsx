import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

var heroImage = {
  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),  url(${"assets/img/hero-netflix.jpg"})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
};
const SectionHome = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <Container
        fluid
        style={heroImage}
        className="vh-100 d-flex align-items-center"
      >
        <Col className="mx-auto text-white text-center" lg={8}>
          <h1 className="display-4 fw-bold">
            Film, acara TV tak terbatas, dan lebih banyak lagi.Tonton di mana
            pun. Batalkan kapan pun.
          </h1>
          <p>
            Siap menonton? Silakan tekan tombol <strong>buat akun</strong> di
            bawah ini untuk membuat atau memulai lagi keanggotaanmu.
          </p>

          <Col className="mx-auto" lg={8}>
            <InputGroup className="mb-3" size="lg">
              <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                placeholder="Alamat Email"
              />

              <Button
                as={Link}
                to="/register"
                variant="danger"
                id="button-addon1"
              >
                Sign In
              </Button>
            </InputGroup>
          </Col>
        </Col>
      </Container>
    </>
  );
};

const SectionContent = () => {
  return (
    <>
      <Container>
        <Row className="d-flex align-items-center">
          <Col lg={6} className="align-items-center">
            <h3 className="display-4 fw-bold">Nikmati di TV-mu.</h3>
            <p>
              Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV,
              pemutar Blu-ray, dan banyak lagi.
            </p>
          </Col>
          <Col lg={6}>
            <img
              src="assets/img/tv.png"
              className="img-fluid"
              alt="Nikmati di TV-mu"
            />
          </Col>
        </Row>
        <Row className="d-flex align-items-center">
          <Col lg={6}>
            <img
              src="assets/img/mobile-0819.jpg"
              className="img-fluid"
              alt="Download acara TV"
            />
          </Col>
          <Col lg={6}>
            <h3 className="display-4 fw-bold">
              Download acara TV untuk menontonnya secara offline.
            </h3>
            <p>
              Simpan favoritmu dengan mudah agar selalu ada acara TV dan film
              yang bisa ditonton.
            </p>
          </Col>
        </Row>
        <Row className="d-flex align-items-center">
          <Col lg={6}>
            <h3 className="display-4 fw-bold">Tonton di mana pun.</h3>
            <p>
              Streaming film dan acara TV tak terbatas di ponsel, tablet,
              laptop, dan TV-mu.
            </p>
          </Col>
          <Col lg={6}>
            <img
              src="assets/img/device-pile-id.png"
              className="img-fluid"
              alt="Download acara TV"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
const Home = () => {
  return (
    <>
      <PageLayout>
        <SectionHome />
        <SectionContent />
      </PageLayout>
    </>
  );
};

export default Home;
