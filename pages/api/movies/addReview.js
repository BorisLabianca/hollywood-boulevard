import connectDB from "../../../middlewares/connectDB";
import Movie from "../../../models/Movie";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { id, author, rate, text } = req.body;
    try {
      if (id && author && rate && text) {
        const review = {
          author: author,
          rate: rate,
          text: text,
        };
        const movie = await Movie.findById(id);
        if (movie) {
          movie.reviews.push(review);
          movie.number_of_votes = movie.reviews.length;
          let totalRating = 0;
          for (let i = 0; i < movie.reviews.length; i++) {
            totalRating = Number(totalRating) + Number(movie.reviews[i].rate);
          }
          movie.rating = (Number(totalRating) / movie.reviews.length).toFixed(
            1
          );
          await movie.save();
          res.status(200).json(movie);
        } else {
          res.status(400).json({ message: "No movie with this id was found." });
        }
      } else {
        res.status(401).json("Missing parameters");
      }
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    res.status(404).json({ message: "Route not found" });
  }
};

export default connectDB(handler);
