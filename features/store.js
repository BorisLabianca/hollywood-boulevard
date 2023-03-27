import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "./searchBar/searchBarSlice";

const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
  },
});

export default store;
