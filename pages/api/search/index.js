import connectDB from "../../../middlewares/connectDB";
import Movie from "../../../models/Movie";

const handler = async (req, res) => {
  const { title } = req.query;
  //   console.log(title);
  if (req.method === "GET") {
    const searchResponse = await Movie.find({ title: new RegExp(title, "i") });
    // console.log(searchResponse);
    res.status(200).json(searchResponse);
  } else {
    res.status(404).json({ message: "Route not found." });
  }
};

export default connectDB(handler);
