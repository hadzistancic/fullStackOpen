/* eslint-disable react/prop-types */
import { useState } from "react";

const Anecdotes = ({
  anecdotes,
  handleVote,
  handleNextAnecdote,
  selected,
  votes,
}) => {
  return (
    <div>
      <h2>Anectode of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>
    </div>
  );
};

const PopularAnecdote = ({ popularAnecdoteIndex, anecdotes, votes }) => {
  return (
    <div>
      <h2>Anecdote with most votes</h2>
      {Number.isInteger(popularAnecdoteIndex) ? (
        <>
          <p>{anecdotes[popularAnecdoteIndex]}</p>
          <p>has {votes[popularAnecdoteIndex]} votes</p>
        </>
      ) : null}
    </div>
  );
};
function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const votesArr = Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(votesArr);
  const [popularAnecdoteIndex, setPopularAnecdoteIndex] = useState(null);

  const handleNextAnecdote = () => {
    const randomIndex = Math.round(Math.random() * (anecdotes.length - 1));
    setSelected(randomIndex);
  };
  const handleVote = () => {
    const newVotesArr = [...votes];
    newVotesArr[selected] = ++newVotesArr[selected];
    const newPopularAnecdoteIndex = newVotesArr.findIndex(
      (vote) => vote === Math.max(...newVotesArr)
    );
    setPopularAnecdoteIndex(newPopularAnecdoteIndex);
    setVotes(newVotesArr);
  };

  return (
    <>
      <Anecdotes
        handleVote={handleVote}
        handleNextAnecdote={handleNextAnecdote}
        anecdotes={anecdotes}
        selected={selected}
        votes={votes}
      />
      <PopularAnecdote
        popularAnecdoteIndex={popularAnecdoteIndex}
        anecdotes={anecdotes}
        votes={votes}
      />
    </>
  );
}

export default App;
