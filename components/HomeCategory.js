import Link from "next/link";

const HomeCategory = ({ movieGenre, category }) => {
  return (
    <div style={{ marginBottom: "40px", width: "100%", height: "fit-content" }}>
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        {`Recommandations ${category}`}
      </h2>
      <div
        style={{
          display: "flex",
          overflow: "scroll",
          gap: "25px",
          width: "100%",
          height: "fit-content",
          overflowY: "hidden",
        }}
      >
        {movieGenre.map((movie) => {
          return (
            <Link
              href={`/movie/${movie._id}`}
              key={movie._id}
              style={{
                width: "calc(100% / 4 - 75px / 4)",
                height: "fit-content",
                flexShrink: "0",
              }}
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
        })}
      </div>
    </div>
  );
};

export default HomeCategory;
