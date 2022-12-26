import connectDB from "../../../middlewares/connectDB";
import Movie from "../../../models/Movie";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const movies = await Movie.find().limit(40);
      // console.log(movies);
      res.status(200).json({ data: movies });
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    res.status(404).json({ message: "Route not found" });
  }
};

export default connectDB(handler);
