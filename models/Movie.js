import { Schema, model, models } from "mongoose";

const movie = new Schema({
  title: String,
  original_title: String,
  release_date: String,
  original_language: String,
  poster_path: String,
  overview: String,
  backdrop_path: String,
  reviews: Array,
});

const Movie = models.Movie || model("Movie", movie);

export default Movie;
