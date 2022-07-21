import React, { useEffect } from "react";
import PageLayout from "../layouts/PageLayout";
import Container from "react-bootstrap/esm/Container";
import ListCardMovie from "../components/ListCardMovie";
import OverviewMovie from "../components/OverviewMovie";
import { useNavigate } from "react-router-dom";
import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Movie = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      navigate("/movie");
    } else {
      navigate("/");
    }
  }, [user, loading, navigate]);
  return (
    <>
      <PageLayout>
        <OverviewMovie />
        <Container style={{ marginTop: "100px" }}>
          <h3 className="fw-bold mt-3">Trending Now</h3>
          <div className="cards-container">
            <ListCardMovie url="/trending/all/week" />
          </div>
          <h3 className="fw-bold mt-3">Movies 51 Original</h3>
          <div className="cards-container">
            <ListCardMovie url="/discover/tv" />
          </div>
          <h3 className="fw-bold mt-3">Top Rated</h3>
          <div className="cards-container">
            <ListCardMovie url="/movie/top_rated" />
          </div>
          <h3 className="fw-bold mt-3">Action Movies</h3>
          <div className="cards-container">
            <ListCardMovie url="/discover/movie?with_genres=28" />
          </div>
          <h3 className="fw-bold mt-3">Comedy Movies</h3>
          <div className="cards-container">
            <ListCardMovie url="/discover/movie?with_genres=35" />
          </div>
          <h3 className="fw-bold mt-3">Horror Movies</h3>
          <div className="cards-container">
            <ListCardMovie url="/discover/movie?with_genres=27" />
          </div>
        </Container>
      </PageLayout>
    </>
  );
};

export default Movie;
