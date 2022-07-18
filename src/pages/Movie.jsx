import React, { useEffect, useState } from "react";
import PageLayout from "../layouts/PageLayout";
import tmdb from "../apis/tmdb";
import Container from "react-bootstrap/esm/Container";
import CardMovie from "../components/CardMovie";
import CarouselMovie from "../components/CarouselMovie";


const Movie = () => {
  return (
    <>
      <PageLayout>
        <CarouselMovie/>
        <Container className="mt-5">
        <h3 className="fw-bold">Movies Popular</h3>
          <div className="cards-container">
        <CardMovie/>
        </div>

        </Container>
      </PageLayout>
    </>
  );
}

export default Movie;
