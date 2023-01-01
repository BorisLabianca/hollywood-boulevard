import axios from "axios";
import Link from "next/link";

const genre = ({ data }) => {
  // console.log(data);
  return (
    <main
      style={{
        margin: "0 auto",
        maxWidth: "1200px",
        minHeight: "calc(100vh - 178px)",
        padding: "35px",
        boxSizing: "border-box",
        display: "flex",
        flexWrap: "wrap",
        gap: "40px",
        // backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
      }}
    >
      {data.map((movie) => {
        return (
          <Link
            href={`/movies/${movie._id}`}
            key={movie._id}
            style={{
              width: "calc(100% / 4 - 120px / 4)",
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
    </main>
  );
};

export default genre;

export async function getServerSideProps(context) {
  const genreId = context.params.genreId;

  let dataToSend = [];
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/genres/${genreId}`
    );
    dataToSend = data;
  } catch (error) {
    console.log("catch genres/genreId>> ", error);
  }
  return { props: { data: dataToSend } };
}
