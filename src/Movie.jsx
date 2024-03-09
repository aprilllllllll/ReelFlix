import { useLocation } from "react-router-dom";
import React, { useEffect,useState } from "react";
// import SearchBar from "./components/SearchBar/SearchBar";
import MovieList from "./components/MovieList/MovieList";
import MovieDetail from "./components/MovieDetail/MovieDetail";
export default function Movie() {
  const location = useLocation();
  // const movie = location.state?.movie || "No input provided";
 console.log(location.state?.movie);
  return (
    <>
    <MovieDetail movie={location.state?.movie}/>      
    </>
  );
}
