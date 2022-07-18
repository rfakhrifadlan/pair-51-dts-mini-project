import React from "react";
import PageLayout from "../layouts/PageLayout";
import Container from "react-bootstrap/esm/Container";
import CardMovie from "../components/CardMovie";

const Movie = () => {
  return (
    <>
      <PageLayout>
      <Container className="d-flex justify-content-center align-items-center vh-50">
        <div className="text-center">
        <h1 className="display-4 fw-bold">Explore your favorite movies.</h1>
        <p>We provide the best experience when you watch alone, or with friends and family</p>
        </div>
      </Container>
        <Container>
        <h3 className="fw-bold mt-3">Trending Now</h3>
        <div className="cards-container">
          <CardMovie url="/trending/all/week"/>
        </div>
        <h3 className="fw-bold mt-3">051 Movies Original</h3>
        <div className="cards-container">
          <CardMovie url="/discover/tv"/>
        </div>
        <h3 className="fw-bold mt-3">Top Rated</h3>
        <div className="cards-container">
          <CardMovie url="/movie/top_rated"/>
        </div>
        <h3 className="fw-bold mt-3">Top Rated</h3>
        <div className="cards-container">
          <CardMovie url="/movie/top_rated"/>
        </div>
        </Container>
      </PageLayout>
    </>
  );
}

export default Movie;
