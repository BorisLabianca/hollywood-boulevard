import axios from "axios";
// import allMovies from "../../../assets/allMovies.json";

// let allMoviesArray = [];

const handler = async (req, res) => {
  if (req.method === "GET") {
    let allMovies = [];
    try {
      for (let i = 1; i < 441; i++) {
        const response = await axios.get(
          `https://lereacteur-bootcamp-api.herokuapp.com/api/allocine/movies/top_rated?page=${i}`,
          {
            headers: {
              authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMyZGQ0OTBlNWU5ODAwMTY5OTk5YmUiLCJlbWFpbCI6ImJvcmlzLmxhYmlhbmNhQGhvdG1haWwuZnIiLCJleHBpcmF0aW9uRGF0ZSI6IjIwMjMtMDQtMjBUMDg6Mzg6MzguODcyWiIsImlzVHJhaW5pbmciOmZhbHNlLCJpYXQiOjE2NzkzMDE1MTh9.2rgHSGp5rmUcSjLvckHgix9rtK6Q1PlbjpAy-QoTHmU`,
            },
          }
        );
        console.log(response.data.results.length);
        for (let j = 0; j < response.data.results.length; j++) {
          allMovies.push(response.data.results[j]);
        }
        // console.log(response.data.results);
      }

      res.status(200).json(allMovies);
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    res.status(404).json({ message: "Route not found" });
  }
};

export default handler;
