import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";

const APIkey = "7d7ff9f0";

export default function MovieList({ movies, children }) {
  const [movieCards, setMovieCards] = useState([]);

  useEffect(() => {
    const fetchOmdb = async () => {
      const ombdData = await Promise.all(
        movies.map(async ({ imdb_id }) => {
          return (await fetch(
            `http://www.omdbapi.com/?apikey=${APIkey}&i=${imdb_id}`
          )).json();
        })
      );

      console.log({ ombdData });
      setMovieCards(ombdData);
    }

    fetchOmdb()
    
  }, [movies.length]);

  console.log({ movieCards });

  return (
    <>
      <h1>{children}</h1>
      <ul>
        {movieCards.map(movie => (
          <MovieCard key={movie.imdbID} {...movie} />
        ))}
      </ul>
    </>
  );
}
