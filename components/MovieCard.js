import Link from "next/link";

const MovieCard = ({ movie }) => {
  return (
    <Link
      href={`/movies/${movie._id}`}
      style={{
        width: "calc(100% / 5 - 110px / 5)",
        height: "100%",
        flexShrink: "0",
        position: "relative",
        boxShadow: "2px 2px 5px black",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "0",
          background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: "15px 5px 5px 5px",
          height: "70px",
          boxSizing: "border-box",
        }}
      >
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "500",
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
