import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/esm/Button";
import tmdb from "../apis/tmdb";
const OverviewMovie = () => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const random = Math.floor(Math.random() * 20);
  useEffect(() => {
    setIsLoading(true);
    const fetchMovies = async () => {
      try {
        const responseDariTMDB = await tmdb.get(
          "/movie/top_rated?language=en-US&page=1"
        );
        setMovies(responseDariTMDB.data.results.slice(0, 1));
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setisError(true);
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);
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
            <Container
              fluid
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),  url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
              className="vh-100 d-flex align-items-center"
            >
              <Container>
                <Row>
                  <Col lg={6}>
                    <h1 className="fw-bold mt-3">{movie.original_title}</h1>
                    <ul class="list-inline list-separator small">
                      <li class="list-inline-item">
                        Popularity : {(movie.popularity / 100).toFixed(2)}
                      </li>
                      <li class="list-inline-item">
                        Release Date : {movie.release_date}
                      </li>
                      <li class="list-inline-item">
                        Vote Average : {(movie.vote_average / 2).toFixed(2)}
                      </li>
                    </ul>
                    <p className="fw-bold">Overview</p>
                    <p className="mt-3">{movie.overview}</p>
                    <div className="float-start">
                      <Button variant="danger" className="me-3" size="lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-play-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                        </svg>{" "}
                        Play Trailer
                      </Button>
                      <Button variant="light" size="lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-plus"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>{" "}
                        My Playlist
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Container>
          );
        })}
      </>
    );
  else {
    return (
      <>
        <div className="justify-content-center">
          <Alert variant="dagner">Something wrong, please reload again!</Alert>
        </div>
      </>
    );
  }
};

export default OverviewMovie;
