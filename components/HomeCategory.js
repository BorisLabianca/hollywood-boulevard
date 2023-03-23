import Link from "next/link";
import genres from "../assets/genres.json";
import MovieCard from "./MovieCard";

const HomeCategory = ({ movieGenre, category }) => {
  // console.log(category);
  let categoryName = "";
  if (category) {
    if (category[category.length - 1] === "s") {
      categoryName = `${category.split("")[0].toUpperCase()}${category.slice(
        1,
        category.length - 1
      )}`;
    } else {
      categoryName = `${category.split("")[0].toUpperCase()}${category.slice(
        1
      )}`;
    }
  }

  const genreId =
    category && genres.find((elem) => elem.name === categoryName).id;

  // console.log(genreId());
  return (
    <div style={{ marginBottom: "40px", width: "100%", height: "fit-content" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          {category
            ? category === "animation" || category === "aventure"
              ? `Recommandations films d'${category}`
              : `Recommandations ${category}`
            : "Recommandations"}
        </h2>
        {category && <Link href={`/genres/${genreId}`}>Voir plus</Link>}
      </div>
      <div
        style={{
          display: "flex",
          overflow: "scroll",
          gap: "25px",
          width: "100%",
          height: "350px",
          overflowY: "hidden",
          paddingTop: "5px",
          paddingBottom: "10px",
        }}
      >
        {movieGenre.map((movie) => {
          return <MovieCard key={movie._id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default HomeCategory;
