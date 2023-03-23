import ratings from "../functions/ratings";

const ReviewCard = ({ author, rate, text }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        alignSelf: "center",
      }}
    >
      <p>
        <span>Auteur : </span> {author}
      </p>
      <p>
        <span>Note : </span>
        {ratings(rate)}
      </p>
      <p>
        <span>Commentaire : </span> {text}
      </p>
    </div>
  );
};

export default ReviewCard;
