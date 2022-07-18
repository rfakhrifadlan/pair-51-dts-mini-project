import React, {useEffect, useState} from "react";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import tmdb from "../apis/tmdb";
const CardMovie = () => {
  
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const responseDariTMDB = await tmdb.get("/movie/popular");
        setMovies(responseDariTMDB.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataMovies();
  }, []);
  return (
    <>
            {movies.map((movie) => {
              return <Col lg={2} className="m-3">
              <Card className="rounded-4 border-0">
                <Card.Img
                  variant="top"
                  src={`${baseUrlForMovie}${movie.poster_path}`}
                  alt={movie.title}
                />
              </Card>
              </Col>;
            })}
    </>
  );
};


export default CardMovie;
