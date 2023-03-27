import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataToSearchFrom: [],
  searchQueries: "",
};

const searchBarSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    setDataToSearchFrom: (state, action) => {
      const { payload } = action;
      const newData = payload;
      state.dataToSearchFrom = newData;
    },
    setSearchQueries: (state, action) => {
      const { payload } = action;
      state.searchQueries = payload;
    },
  },
});

export const { setDataToSearchFrom, setSearchQueries } = searchBarSlice.actions;
export default searchBarSlice.reducer;
