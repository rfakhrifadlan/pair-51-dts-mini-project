import React from "react";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Movie />} />
    </Routes>
  );
}

export default App;
