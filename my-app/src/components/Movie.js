import React, { useState } from "react";

const moviesData = [
  {
    id: 1,
    title: "Movie 1",
    description: "Description of Movie 1",
    image: "logo512.png",
  },
  {
    id: 2,
    title: "Movie 2",
    description: "Description of Movie 2",
    image: "logo512.png",
  },
  {
    id: 3,
    title: "Movie 3",
    description: "Description of Movie 3",
    image: "logo512.png",
  },
  // Add more movie objects as needed
];

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
    </div>
  );
};

const MoviesPage = () => {
  const [movies, setMovies] = useState(moviesData);

  return (
    <div className="movies-page">
      <h1>Movies</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <style>
        {`
          .movie-list {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
          }

          .movie-card {
            width: 30%;
            margin-bottom: 20px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
            text-align: center;
          }

          .movie-card img {
            width: 100%;
            height: auto;
            border-radius: 5px;
          }

          .movie-card h3 {
            margin-top: 10px;
          }

          .movie-card p {
            margin-top: 5px;
          }
        `}
      </style>
    </div>
  );
};

export default MoviesPage;
