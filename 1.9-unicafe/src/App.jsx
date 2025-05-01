import { useState } from "react";
import Button from "./components/button";
import { Statistics } from "./components/Statistics";

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
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
      />
    </div>
  );
};

export default App;
