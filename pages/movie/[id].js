import axios from "axios";
import genres from "../../assets/genres.json";
import ratings from "../../functions/ratings";
import AddReview from "../../components/AddReview";

const movie = ({ data }) => {
  const genresConverter = () => {
    let movieGenres = [];
    for (let i = 0; i < data.genre_ids.length; i++) {
      // console.log(data.genre_ids[i]);
      for (let j = 0; j < genres.length; j++) {
        if (
          data.genre_ids[i] === genres[j].id &&
          i < data.genre_ids.length - 1
        ) {
          movieGenres.push(
            <span key={data.genre_ids[i]}>{`${genres[j].name}, `}</span>
          );
        } else if (
          data.genre_ids[i] === genres[j].id &&
          i === data.genre_ids.length - 1
        ) {
          movieGenres.push(
            <span key={data.genre_ids[i]}>{`${genres[j].name}.`}</span>
          );
        }
      }
    }
    // console.log(movieGenres);
    return movieGenres;
  };
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
        flexDirection: "column",
        gap: "40px",
        // backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
      }}
    >
      <div className="top-div" style={{ display: "flex", gap: "50px" }}>
        <div className="poster-container" style={{ width: "20%" }}>
          <img
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt={`Affiche du film ${data.title}`}
            style={{ width: "100%" }}
          />
        </div>
        <div
          className="info-container"
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <h2
            style={{
              fontSize: "38px",
              fontWeight: "700",
              marginTop: "0px",
              marginBottom: "20px",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            {data.title}
          </h2>
          <div>
            <span style={{ fontSize: "16px", fontWeight: "700" }}>
              Titre original :{" "}
            </span>{" "}
            <span>{data.original_title}</span>
          </div>
          <div>
            <span style={{ fontSize: "16px", fontWeight: "700" }}>
              Date de sortie :{" "}
            </span>{" "}
            <span>{data.release_date}</span>
          </div>
          <div>
            <span style={{ fontSize: "16px", fontWeight: "700" }}>
              Genres :{" "}
            </span>{" "}
            <span>{genresConverter()}</span>
          </div>
          {data.rating && (
            <div className="ratings-div" style={{ marginTop: "5px" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ display: "flex" }} key={data._id}>
                  {ratings(data.rating)}
                </div>
                <div style={{ color: "#FECC01", fontWeight: "700" }}>
                  {String(data.rating).split(".")[0]}
                  {String(data.rating).split(".")[1] &&
                    `,${String(data.rating).split(".")[1]}`}
                </div>
              </div>
              <div
                style={{ fontSize: "14px" }}
              >{`${data.number_of_votes} commentaires`}</div>{" "}
            </div>
          )}

          <p>{data.overview}</p>
        </div>
      </div>
      <div className="add-review">
        <AddReview id={data._id} />
      </div>
      <div className="reviews">
        {data.reviews.map((review, index) => {
          return (
            <div key={index}>
              <h2>
                <span>Auteur : </span> {review.author}
              </h2>
              <p>
                <span>Note : </span>
                {ratings(review.rate)}
              </p>
              <p>
                <span>Commentaire : </span> {review.text}
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default movie;

export async function getServerSideProps(context) {
  // console.log(context.paramas.id);
  const id = context.params.id;

  let dataToSend = [];
  try {
    const { data } = await axios.get(`http://localhost:3000/api/movies/${id}`);
    // console.log(data);
    dataToSend = data;
  } catch (error) {
    console.log("catch movie/id>>", error);
  }
  return {
    props: { data: dataToSend },
  };
}
