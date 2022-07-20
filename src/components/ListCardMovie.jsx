import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import tmdb from "../apis/tmdb";
import LazyImage from "./LazyImage";
import { Link } from "react-router-dom";

const ListCardMovie = (props) => {
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
              <Card style={{borderRadius:'8px'}}
                className="border-0 card-hover"
                as={Link} to={`/detailmovie/${movie.id}`}
              >
                <LazyImage
                  src={`${baseUrlForMovie}${movie.poster_path}`}
                  alt={movie.title}
                />
              </Card>
            </Col>
          );
        })}
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



export default ListCardMovie;
