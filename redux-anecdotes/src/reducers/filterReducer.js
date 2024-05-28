import { createSlice } from "@reduxjs/toolkit";

const anecdoteSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    set(state, action) {
      return action.payload;
    },
  },
});

export default anecdoteSlice.reducer;
export const { set } = anecdoteSlice.actions;
