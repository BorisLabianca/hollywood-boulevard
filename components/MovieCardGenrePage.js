import Link from "next/link";

const MovieCardGenrePage = ({ movie }) => {
  return (
    <Link
      href={`/movies/${movie._id}`}
      key={movie._id}
      className=" sm:w-[calc(100%/2-60px/2)] md:w-[calc(100%/4-120px/4)] h-fit shrink-0 w-full"
    >
      <h3
        style={{
          fontSize: "20px",
          fontWeight: "500",
          marginBottom: "10px",
        }}
      >
        {movie.title}
      </h3>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={`Affiche du film ${movie.original_title}`}
        width="100%"
      />
    </Link>
  );
};

export default MovieCardGenrePage;
