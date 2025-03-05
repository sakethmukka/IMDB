import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import Favourites from "./pages/Favourites";

const App = () => {
  return (
    <Router>
      <div className="container mt-4">
        <h1 className="text-center text-primary">IMDB Clone</h1>
        <nav className="mb-4 text-center">
          <Link className="btn btn-outline-primary me-2" to="/">Home</Link>
          <Link className="btn btn-outline-secondary" to="/favourites">My Favourites</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

