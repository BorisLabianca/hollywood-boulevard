import connectDB from "../../../middlewares/connectDB";
import Movie from "../../../models/Movie";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const allMovies = await Movie.find();
      //   console.log(allMovies);
      let allGenres = [];
      for (let i = 0; i < allMovies.length; i++) {
        for (let j = 0; j < allMovies[i].genre_ids.length; j++) {
          if (allGenres.includes(allMovies[i].genre_ids[j]) === false) {
            allGenres.push(allMovies[i].genre_ids[j]);
          }
        }
      }
      allGenres.sort((a, b) => a - b);
      //   console.log(allGenres);
      res.status(200).json(allGenres);
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    res.status(404).json("Route not found");
  }
};

export default connectDB(handler);
