import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
import MovieList from "./components/MovieList/MovieList";
import { movies as hardcodedMovies } from "./Data.js";

function Home() {
  // const location = useLocation();
  // const query = location.state?.query;
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("iron man");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    try {
      //  todo encode query and pass into api
      // const fetchedMovies = await (await fetch(
      //   `https://reelflix.azurewebsites.net/api/recommendations/?title=iron%20man&top_n=10`,
      //   {
      //     mode: "no-cors",
      //   }
      // ))

      const fetchedMovies = hardcodedMovies;
      setMovies(fetchedMovies);
    } catch (error) {
      console.error(error);
    }
  };

  let content = <p>Loading...</p>;

  if (!isLoading && movies) {
    content = <p>Movie List wil be here</p>;
    content = <MovieList movies={movies}>Search Results "{query}"</MovieList>;
  } else if (isLoading) {
    content = <p>Loading...</p>;
  } else if (!movie) {
    content = <p>Can not find any Result</p>;
  }

  return (
    <>
      <div style={{ marginTop: "3rem" }}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button onClick={() => handleSearch()}>Search</button>
      </div>
      {content}
      <p>sdhasohdas</p>
    </>
  );
}

export default Home;
