import { useState } from "react";
import { Button } from "./components/Button";

const App = () => {
  const anecdotes = [
    { text: "If it hurts, do it more often.", votes: 0 },
    {
      text: "Adding manpower to a late software project makes it later!",
      votes: 0,
    },
    {
      text: "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      votes: 0,
    },
    {
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      votes: 0,
    },
    { text: "Premature optimization is the root of all evil.", votes: 0 },
    {
      text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      votes: 0,
    },
    {
      text: "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      votes: 0,
    },
    { text: "The only way to go fast, is to go well.", votes: 0 },
  ];

  const [data, setData] = useState(anecdotes);
  const [selected, setSelected] = useState(0);

  const randomizeAnecdote = () => {
    setSelected(Math.floor(Math.random() * data.length));
  };

  const voteAnecdote = () => {
    setData(
      data.map((item, index) =>
        index === selected ? { ...item, votes: item.votes + 1 } : item
      )
    );
  };

  return (
    <div>
      <p>Anecdote: {data[selected].text}</p>
      <p>Votes: {data[selected].votes}</p>
      <Button onClick={randomizeAnecdote} text="Randomize anecdote" />
      <Button onClick={voteAnecdote} text="Vote" />
    </div>
  );
};

export default App;
