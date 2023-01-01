import Link from "next/link";
import genres from "../assets/genres.json";

const HomeCategory = ({ movieGenre, category }) => {
  // console.log(category);
  let categoryName = "";
  if (category[category.length - 1] === "s") {
    categoryName = `${category.split("")[0].toUpperCase()}${category.slice(
      1,
      category.length - 1
    )}`;
  } else {
    categoryName = `${category.split("")[0].toUpperCase()}${category.slice(1)}`;
  }
  const genreId = genres.find((elem) => elem.name === categoryName).id;

  // console.log(genreId());
  return (
    <div style={{ marginBottom: "40px", width: "100%", height: "fit-content" }}>
      <div>
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          {category === "animation" || category === "aventure"
            ? `Recommandations films d'${category}`
            : `Recommandations ${category}`}
        </h2>
        <Link href={`/genres/${genreId}`}>Voir plus</Link>
      </div>

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
              href={`/movies/${movie._id}`}
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
