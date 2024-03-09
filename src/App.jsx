import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Movie from "./Movie";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie/>} />
      </Routes>
    </Router>
  );
}

export default App;
