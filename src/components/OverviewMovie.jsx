import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const OverviewMovie = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h4 className="fw-bold mt-3">{props.item.original_title}</h4>
            <ul class="list-inline list-separator small">
              <li class="list-inline-item">
                Popularity : {(props.item.popularity / 100).toFixed(2)}
              </li>
              <li class="list-inline-item">
                Release Date : {props.item.release_date}
              </li>
              <li class="list-inline-item">
                Vote Average : {(props.item.vote_average / 2).toFixed(2)}
              </li>
            </ul>
            <p className="fw-bold">Overview</p>
            <p className="mt-3">{props.item.overview}</p>
            <div className="float-end">
              <Button variant="danger" className="me-3">
                Play Trailer
              </Button>
              <Button onClick={props.onHide} variant="light">
                Close
              </Button>
            </div>
          </Col>
          <Col lg={6}>
            <img
              src={`https://image.tmdb.org/t/p/original/${props.item.backdrop_path}`}
              alt={props.item.title}
              className="img-fluid"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OverviewMovie;
