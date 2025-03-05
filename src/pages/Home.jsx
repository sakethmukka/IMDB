import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { API_URL, getFavouritesFromLocalStorage, updateFavourites } from "../utils/helpers";

const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query.length > 2) {
      fetch(`${API_URL}&s=${query}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.Search) setMovies(data.Search);
        });
    }
  }, [query]);

  return (
    <div>
      <input type="text" className="form-control mb-3" placeholder="Search for a movie..." value={query} onChange={(e) => setQuery(e.target.value)} />
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="col-md-3 mb-4">
            <div className="card">
              <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <Link to={`/movie/${movie.imdbID}`} className="btn btn-primary me-2">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;