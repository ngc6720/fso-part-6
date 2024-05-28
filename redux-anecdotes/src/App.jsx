import AnecdoteForm from "/src/components/AnecdoteForm";
import AnecdoteList from "/src/components/AnecdoteList";
import Filter from "/src/components/Filter";
import { useDispatch } from "react-redux";
import { initializeAnecdotes } from "/src/reducers/anecdoteReducer";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, []);

  return (
    <main>
      <h2>Anecdotes</h2>
      <AnecdoteForm />
      <Filter />
      <AnecdoteList />
    </main>
  );
};

export default App;
