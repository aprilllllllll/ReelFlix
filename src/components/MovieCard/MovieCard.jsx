import { useNavigate } from "react-router-dom";
export default function MovieCard(movie) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/movie", { state: { movie } });
  };

  return (
    <>
      <li onClick={handleClick}>
        <p>{movie.title}</p>
        <img src={movie.Poster} />
      </li>
    </>
  );
}
