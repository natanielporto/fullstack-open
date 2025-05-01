import { useState } from "react";
import Button from "./components/button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);

  const handleGoodVote = () => {
    setGood(good + 1);
    setAll(all + 1);
    setAverage(average + 1);
  };

  const handleNeutralVote = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  const handleBadVote = () => {
    setBad(bad + 1);
    setAll(all + 1);
    setAverage(average - 1);
  };

  return (
    <div>
      <div>
        <h2>Give feedback</h2>
        <p />
        <Button text={"good"} func={() => handleGoodVote()} />
        <Button text={"neutral"} func={() => handleNeutralVote()} />
        <Button text={"bad"} func={() => handleBadVote()} />
      </div>
      <div>
        <h2>Statistics</h2>
        <h3>good {good}</h3>
        <h3>neutral {neutral}</h3>
        <h3>bad {bad}</h3>
        <h3>all {all}</h3>
        <h3>average {average}</h3>
        <h3>positive {all > 0 ? (good * 100) / all : 0}%</h3>
      </div>
    </div>
  );
};

export default App;
