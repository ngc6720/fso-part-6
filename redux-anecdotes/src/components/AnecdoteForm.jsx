import { useDispatch } from "react-redux";
import { createAnecdote } from "/src/reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const onNewNote = (e) => {
    e.preventDefault();
    dispatch(createAnecdote(e.target["new"].value));
    e.target["new"].value = "";
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={onNewNote}>
        <div>
          <input name="new" autoComplete="off" />
        </div>
        <button>create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
