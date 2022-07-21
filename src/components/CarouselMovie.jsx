import React, { useEffect, useState } from "react";
import tmdb from "../apis/tmdb";
import Carousel from "react-bootstrap/Carousel";

const CarouselMovie = () => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const response = await tmdb.get("/movie/popular");
        setMovies(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataMovies();
  }, []);
  return (
    <>
      <Carousel>
        {movies.map((movie) => {
          return (
            <Carousel.Item>
              <img src={`${baseUrlForMovie}${movie.backdrop_path}`} alt="{movie.original_title}" loading="lazy"  className="d-block w-100"/>
              <Carousel.Caption>
              <h3 className="display-4 fw-bold">{movie.original_title}</h3>
                <h5>{movie.overview}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default CarouselMovie;
