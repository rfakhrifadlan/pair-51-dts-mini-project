import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const SectionFooter = () => {
  return (
    <footer className="mt-5">
      <Container className="mt-3 mb-3">
        <Row className="">
          <Col sm={3}>
            <ul className="nav flex-column small">
              <li className="nav-item mb-2">Tanya Jawab</li>
              <li className="nav-item mb-2">Pusat Bantuan</li>
              <li className="nav-item mb-2">Akun</li>
              <li className="nav-item mb-2">Pusat Media</li>
            </ul>
          </Col>
          <Col sm={3}>
            <ul className="nav flex-column small">
              <li className="nav-item mb-2">Hubungan Investor</li>
              <li className="nav-item mb-2">Lowongan Kerja</li>
              <li className="nav-item mb-2">Tukar Kartu Hadiah</li>
              <li className="nav-item mb-2">Beli Kartu Hadiah</li>
            </ul>
            </Col>
            
          <Col sm={3}>

            <ul className="nav flex-column small">
              <li className="nav-item mb-2">Cara Menonton</li>
              <li className="nav-item mb-2">Ketentuan Penggunaan</li>
              <li className="nav-item mb-2">Privasi</li>
              <li className="nav-item mb-2">Preferensi</li>
            </ul>
            </Col>
            
          <Col sm={3}>
            <ul className="nav flex-column small">
              <li className="nav-item mb-2">Cookie</li>
              <li className="nav-item mb-2">Informasi</li>
              <li className="nav-item mb-2">Perusahaan</li>
              <li className="nav-item mb-2">Hubungi Kami</li>
            </ul>
          </Col>
        </Row>
        <Row className="g-3 mt-3">
          <Col lg={6}>
            <small className="d-block">
              Designed and built with all the love by{" "}
              <span className="text-danger">PAIR 051 DTS-REA2A</span>
            </small>
            <small className="text-start">
              Copyright &copy; {new Date().getFullYear()} Movies 051 Indonesia.
              All rights reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

const Footer = () => {
  return (
    <>
      <SectionFooter />
    </>
  );
};

export default Footer;
