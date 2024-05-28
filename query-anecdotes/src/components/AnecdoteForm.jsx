import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAnecdote } from "/src/requests";
import { useNotificationDispatcher } from "/src/NotificationContext";

const AnecdoteForm = () => {
  const notify = useNotificationDispatcher();

  const queryClient = useQueryClient();

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (newA) => {
      const anecdotes = queryClient.getQueryData(["anecdotes"]);
      queryClient.setQueryData(["anecdotes"], anecdotes.concat(newA));
      notify({ type: "success", msg: `anecdote '${newA.content}' added` });
    },
    onError: ({
      response: {
        data: { error },
      },
    }) => {
      notify({ type: "error", msg: error });
    },
  });

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    newAnecdoteMutation.mutate({ content, votes: 0 });
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
