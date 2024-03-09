import SearchBar from "./components/SearchBar/SearchBar";
import { useLocation } from "react-router-dom";
import { movies } from "./Data";
import MovieList from "./components/MovieList/MovieList";
export default function SearchPage() {
  const location = useLocation();
  const query = location.state?.query;
    // need add fetch movie from the recommandation modol



    
  return (
    <>
      <SearchBar />
      <MovieList movies={movies}>Search by "{query}"</MovieList>
    </>
  );
}
