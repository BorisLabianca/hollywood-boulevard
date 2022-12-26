import axios from "axios";
// import allMovies from "../../../assets/allMovies.json";

// let allMoviesArray = [];

const handler = async (req, res) => {
  if (req.method === "GET") {
    let allMovies = [];
    try {
      for (let i = 1; i <= 427; i++) {
        const response = await axios.get(
          `https://lereacteur-bootcamp-api.herokuapp.com/api/allocine/movies/top_rated?page=${i}`,
          {
            headers: {
              authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMyZGQ0OTBlNWU5ODAwMTY5OTk5YmUiLCJlbWFpbCI6ImJvcmlzLmxhYmlhbmNhQGhvdG1haWwuZnIiLCJleHBpcmF0aW9uRGF0ZSI6IjIwMjMtMDMtMDlUMDA6MDA6MDAuMDAwWiIsImlzVHJhaW5pbmciOnRydWUsImlhdCI6MTY3MDY1OTM3MH0.O_6BPy8Y7tdhvdbhNHdp4B2ytOyMk5XRiPTpN5Xp780`,
            },
          }
        );
        // console.log(response.data.results);
        allMovies.push(response.data.results[0]);
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
