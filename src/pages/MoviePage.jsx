import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../utils/helpers";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}&i=${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div className="text-center">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} className="mb-3" />
      <p>{movie.Plot}</p>
    </div>
  );
};

export default MoviePage;
