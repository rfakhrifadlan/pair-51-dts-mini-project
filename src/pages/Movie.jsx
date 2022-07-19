import React from "react";
import PageLayout from "../layouts/PageLayout";
import Container from "react-bootstrap/esm/Container";
import CardMovie from "../components/CardMovie";
import CarouselMovie from "../components/CarouselMovie";

const Movie = () => {
  return (
    <>
      <PageLayout>
        <Container>
        <h3 className="fw-bold mt-3">Trending Now</h3>
        <div className="cards-container">
          <CardMovie url="/trending/all/week"/>
        </div>
        <h3 className="fw-bold mt-3">Movies 51 Original</h3>
        <div className="cards-container">
          <CardMovie url="/discover/tv"/>
        </div>
        <h3 className="fw-bold mt-3">Top Rated</h3>
        <div className="cards-container">
          <CardMovie url="/movie/top_rated"/>
        </div>
        <h3 className="fw-bold mt-3">Action Movies</h3>
        <div className="cards-container">
          <CardMovie url="/discover/movie?with_genres=28"/>
        </div>
        <h3 className="fw-bold mt-3">Comedy Movies</h3>
        <div className="cards-container">
          <CardMovie url="/discover/movie?with_genres=35"/>
        </div>
        <h3 className="fw-bold mt-3">Horror Movies</h3>
        <div className="cards-container">
          <CardMovie url="/discover/movie?with_genres=27"/>
        </div>
        </Container>
      </PageLayout>
    </>
  );
}

export default Movie;
