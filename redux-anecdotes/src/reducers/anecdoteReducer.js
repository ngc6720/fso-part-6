import { createSlice } from "@reduxjs/toolkit";
import anecdotesService from "/src/services/anecdotes";
import { notify } from "/src/reducers/notificationReducer";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    setAnecdotes(state, action) {
      return action.payload;
    },
    addAnecdote(state, action) {
      return [...state, action.payload];
    },
    updateAnecdote(state, action) {
      return state.map((anecdote) =>
        anecdote.id === action.payload.id
          ? { ...anecdote, ...action.payload }
          : anecdote
      );
    },
  },
});

const { updateAnecdote, addAnecdote, setAnecdotes } = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const notes = await anecdotesService.getAll();
    dispatch(setAnecdotes(notes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdotesService.createNew(content);
    dispatch(addAnecdote(newAnecdote));
  };
};

export const vote = (id) => {
  return async (dispatch) => {
    const notes = await anecdotesService.getAll();
    const note = notes.find((a) => a.id === id);
    const updatedAnecdote = await anecdotesService.update(note.id, {
      ...note,
      votes: note.votes + 1,
    });
    dispatch(updateAnecdote(updatedAnecdote));
    dispatch(
      notify({
        message: "You voted for : " + updatedAnecdote.content,
        type: "success",
        duration: 5,
      })
    );
  };
};

export default anecdoteSlice.reducer;
