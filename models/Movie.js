import { Schema, model, models } from "mongoose";

const movie = new Schema({
  title: String,
  original_title: String,
  release_date: String,
  original_language: String,
  genre_ids: Array,
  poster_path: String,
  overview: String,
  backdrop_path: String,
  reviews: Array,
  rating: Number,
  number_of_votes: Number,
});

const Movie = models.Movie || model("Movie", movie);

export default Movie;
