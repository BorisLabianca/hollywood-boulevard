import connectDB from "../../../middlewares/connectDB";
import Movie from "../../../models/Movie";

const handler = async (req, res) => {
  if (req.method === "GET") {
    // console.log(req.query);
    const { id } = req.query;
    try {
      const movie = await Movie.findById(id);
      //   console.log(movie);
      res.status(200).json(movie);
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    res.status(404).json({ message: "Route not found" });
  }
};

export default connectDB(handler);
