import connectDB from "../../../middlewares/connectDB";
import Movie from "../../../models/Movie";

const handler = async (req, res) => {
  const { genreId } = req.query;
  // console.log(genreId);
  if (req.method === "GET") {
    const genre = await Movie.find({ genre_ids: { $in: [Number(genreId)] } });
    // console.log(genre);
    res.status(200).json(genre);
  } else {
    res.status(404).json({ message: "Route not found." });
  }
};

export default connectDB(handler);
