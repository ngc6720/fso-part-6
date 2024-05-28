import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { vote } from "/src/reducers/anecdoteReducer";

const Anecdote = ({ anecdote, onVote }) => {
  return (
    <li key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={onVote}>vote</button>
      </div>
    </li>
  );
};

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filterStr = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const sortedAnecdotes = useMemo(
    () => anecdotes.toSorted((a, b) => b.votes - a.votes),
    [anecdotes]
  );

  const filteredAnecdotes = useMemo(
    () =>
      sortedAnecdotes.filter((a) =>
        a.content.toLowerCase().includes(filterStr.toLowerCase())
      ),
    [sortedAnecdotes, filterStr]
  );

  return (
    <>
      <h2>Anecdotes</h2>
      <ul>
        {filteredAnecdotes.map((anecdote) => (
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            onVote={() => dispatch(vote(anecdote.id))}
          />
        ))}
      </ul>
    </>
  );
};

export default AnecdoteList;
