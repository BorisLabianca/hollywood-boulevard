import Link from "next/link";

const MovieCard = ({ movie }) => {
  return (
    <Link
      href={`/movies/${movie._id}`}
      className="md:w-[calc(100%/4-83px/4)] lg:w-[calc(100%/5-110px/5)] h-full flex-shrink-0 relative shadow-[2px_2px_5px_rgba(0,0,0,1)]"
    >
      <div
        className="absolute bottom-0 flex items-center justify-center w-full h-[200px] box-border p-[100px_5px_5px_5px]"
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
        }}
      >
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "700",
            textAlign: "center",
            color: "white",
          }}
        >
          {movie.title}
        </h3>
      </div>

      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={`Affiche du film ${movie.original_title}`}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </Link>
  );
};

export default MovieCard;
