import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/esm/Button";
import PageLayout from "../layouts/PageLayout";
import Card from "react-bootstrap/esm/Card";
import LazyImage from "../components/LazyImage";
import ListCardMovie from "../components/ListCardMovie";
import tmdb from "../apis/tmdb";
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
const DetailMovie = () => {
  const [detail, setDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [actors, setactors] = useState([]);
  const [trailer, setTrailer] = useState([]);
  let params = useParams();
  useEffect(() => {
    setIsLoading(true);
    const getMovie = async () => {
      try {
        const response = await tmdb.get(`/movie/${params.id}?language=en-US`);
        setDetail(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    const getCredit = async () => {
      try {
        const response = await tmdb.get(
          `/movie/${params.id}/credits?language=en-US`
        );
        setactors(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
    getCredit();
  }, [params.id]);
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
  if (detail && !isError)
    return (
      <>
        <PageLayout>
          <Container
            fluid
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),  url(https://image.tmdb.org/t/p/original/${detail.backdrop_path})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              minHeight: "800px",
            }}
            className="d-flex align-items-center"
            key={detail.id}
          >
            <Container>
              <Row>
                <Col lg={6}>
                  <p className="fw-bold">{detail.tagline}</p>
                  <h1 className="fw-bold mb-3">
                    {detail.original_title} - {detail.release_date?.slice(0, 4)}
                  </h1>
                  {detail.genres?.map((genre) => (
                    <div key={genre.id} className="badge bg-primary me-2 mb-3">
                      {genre.name}
                    </div>
                  ))}
                  <ul className="list-inline list-separator small">
                    <li className="list-inline-item">
                      Popularity : {(detail.popularity / 100).toFixed(2)}
                    </li>
                    <li className="list-inline-item">
                      Release Date :{" "}
                      {detail.release_date ?? detail.release_date}
                    </li>
                    <li className="list-inline-item">
                      Vote Average : {(detail.vote_average / 2).toFixed(2)}
                    </li>
                  </ul>
                  <p className="fw-bold">Overview</p>
                  <p className="mt-3">{detail.overview}</p>
                  <p className="fw-bold">Cinemactor</p>
                  <p>
                    {actors?.slice(0, 3).map((actor) => (
                      <span key={actor.id} className="me-3">
                        {actor.name}
                      </span>
                    ))}
                  </p>
                  <div className="float-start">
                    <Button variant="danger" className="me-3" size="lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-play-fill"
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
                        className="bi bi-plus"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                      </svg>{" "}
                      My Playlist
                    </Button>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
                      alt={detail.title}
                      className="shadow-lg img-fluid "
                      style={{ width: "50%", borderRadius: "8px" }}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </Container>
          <Container>
            <Row>
              <Col lg={8}>
                <h3 className="fw-bold mt-3">Top Billed Cast</h3>
                <div className="cards-container">
                  {actors?.slice(0, 10).map((actor) => {
                    return (
                      <Col lg={2} className="m-2 text-center" key={actor.id}>
                        <Card
                          className="border-0 card-hover"
                          style={{ borderRadius: "8px" }}
                        >
                          <LazyImage
                            src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                            alt={actor.title}
                          />
                        </Card>

                        <span>{actor.name}</span>
                      </Col>
                    );
                  })}
                </div>
              </Col>
              <Col lg={4}>
                <div  className="ps-5">
                <p className="fw-bold mt-3">Original Title</p>
                <p>{detail.original_title}</p>

                <p className="fw-bold">Status</p>
                <p>{detail.status}</p>

                <p className="fw-bold">Budget</p>
                <p>{formatter.format(detail.budget)}</p>

                <p className="fw-bold">Revenue</p>

                <p>{formatter.format(detail.revenue)}</p>
                </div>
              </Col>
            </Row>
            <h3 className="fw-bold">Recommendations</h3>
            <div className="cards-container">
          <ListCardMovie url="/trending/all/week"/>
        </div>
          </Container>
        </PageLayout>
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

export default DetailMovie;
