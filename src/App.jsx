import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviePage from "./MoviePage";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie" element={<MoviePage/>} />
        <Route path="/search" element={<SearchPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
