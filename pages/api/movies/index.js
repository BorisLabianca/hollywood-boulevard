import connectDB from "../../../middlewares/connectDB";
import Movie from "../../../models/Movie";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const recAll = await Movie.aggregate([{ $sample: { size: 10 } }]);
      const animations = await Movie.aggregate([
        { $match: { genre_ids: { $in: [16] } } },
        { $sample: { size: 10 } },
      ]);
      const adventures = await Movie.aggregate([
        { $match: { genre_ids: { $in: [12] } } },
        { $sample: { size: 10 } },
      ]);
      const comedies = await Movie.aggregate([
        { $match: { genre_ids: { $in: [35] } } },
        { $sample: { size: 10 } },
      ]);
      const thrillers = await Movie.aggregate([
        { $match: { genre_ids: { $in: [53] } } },
        { $sample: { size: 10 } },
      ]);
      const searchBarData = await Movie.find().select(
        "title poster_path release_date _id"
      );
      // console.log(animations);
      res.status(200).json({
        data: {
          recAll,
          animations,
          adventures,
          comedies,
          thrillers,
          searchBarData,
        },
      });
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    res.status(404).json({ message: "Route not found" });
  }
};

export default connectDB(handler);
