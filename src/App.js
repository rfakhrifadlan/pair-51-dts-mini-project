import React from "react";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
