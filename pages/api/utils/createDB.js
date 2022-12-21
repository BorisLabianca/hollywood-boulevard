import connectDB from "../../../middlewares/connectDB";
import Movie from "../../../models/Movie";
import data from "../../../assets/data.json";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      Movie.insertMany(data, function (error, docs) {});
      res.status(200).json({ message: "Movies added to the database" });
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    res.status(404).json("Route not found");
  }
};

export default connectDB(handler);
