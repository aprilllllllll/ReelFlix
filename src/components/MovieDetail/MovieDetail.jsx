export default function MovieDetail({movie}){


return (
    <>
    <img src={movie.Poster}></img>
    <p>{movie.Title}</p>
    <p>{movie.Year}</p>

    </>
);


}