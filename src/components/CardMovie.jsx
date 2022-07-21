import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import tmdb from "../apis/tmdb";
import LazyImage from "./LazyImage";
import { Link } from "react-router-dom";

const CardMovie = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState([]);
  const urlMovie = props.url;
  const slice = props.slice ? props.slice : 10;
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchDataMovies = async () => {
      try {
        const response = await tmdb.get(urlMovie);
        setMovies(response.data.results.slice(0, slice));
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setisError(true);
        setIsLoading(false);
      }
    };
    fetchDataMovies();
  }, [urlMovie]);
  if (isLoading)
    return (
      <>
        <div className="d-flex align-items-center justify-content-center">
          <Spinner animation="border" role="status" variant="danger">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </>
    );
  if (movies && !isError)
    return (
      <>
        {movies.map((movie) => {
          return (
            <Col lg={2} className="m-2" key={movie.id}>
              <Card
                className="border-0 card-hover" style={{borderRadius:'8px'}}
                onClick={() => setModalShow(true, setModalData(movie))}
              >
                <LazyImage
                  src={`${baseUrlForMovie}${movie.poster_path}`}
                  alt={movie.title}
                />
              </Card>
            </Col>
          );
        })}
        <ModalMovie
          item={modalData}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  else {
    return (
      <>
        <div className="d-flex align-items-center justify-content-center">
          <Alert variant="dagner">Something wrong, please reload again!</Alert>
        </div>
      </>
    );
  }
};

const ModalMovie = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="bg-black">
        <img
          src={`https://image.tmdb.org/t/p/original/${props.item.backdrop_path}`}
          alt={props.item.original_title}
          className="img-fluid"
          loading="lazy"
        />
        <h3 className="fw-bold mt-3">
          {props.item.original_title
            ? props.item.original_title
            : props.item.title}
        </h3>
        <ul className="list-inline list-separator small">
          <li className="list-inline-item">
            Popularity : {(props.item.popularity / 100).toFixed(2)}
          </li>
          <li className="list-inline-item">
            Release Date : {props.item.release_date}
          </li>
          <li className="list-inline-item">
            Vote Average : {(props.item.vote_average / 2).toFixed(2)}
          </li>
        </ul>
        <p className="fw-bold">Overview</p>
        <p className="mt-3">{props.item.overview}</p>

        <div className="float-end">
          
          <Button variant="danger" className="me-3" size="md" as={Link} to={`/detailmovie/${props.item.id}`}>
                        
                        Detail Movie
                      </Button>
          <Button onClick={props.onHide} variant="light">
            Close
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CardMovie;
