import axios from "axios";

const movie = ({ data }) => {
  // console.log(data);

  return (
    <main
      style={{
        margin: "0 auto",
        maxWidth: "1200px",
        padding: "35px",
        boxSizing: "border-box",
        display: "flex",
        gap: "40px",
        // backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
      }}
    >
      <div className="poster-container" style={{ width: "50%" }}>
        <img
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt={`Affiche du film ${data.title}`}
          style={{ width: "100%" }}
        />
      </div>
      <div className="info-container" style={{ width: "50%" }}>
        <h2 style={{ fontSize: "38px", fontWeight: "700" }}>{data.title}</h2>
        <h2 style={{ fontSize: "38px", fontWeight: "700" }}>
          {data.original_title}
        </h2>
        <p>{`Année de sortie : ${data.release_date.split("-")[0]}`}</p>

        <p>{data.overview}</p>
      </div>
      <div className="reviews">
        {data.reviews.map((review, index) => {
          return (
            <div key={index}>
              <h2>
                <span>Auteur : </span> {review.author}
              </h2>
              <p>
                <span>Note : </span> {review.rate}
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
  console.log(context.paramas);
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
