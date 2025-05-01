import { useState } from "react";
import Button from "./components/button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <h2>Give feedback</h2>
        <p />
        <Button text={"good"} func={() => setGood(good + 1)} />
        <Button text={"neutral"} func={() => setNeutral(neutral + 1)} />
        <Button text={"bad"} func={() => setBad(bad + 1)} />
      </div>
      <div>
        <h2>Statistics</h2>
        <h3>good {good}</h3>
        <h3>neutral {neutral}</h3>
        <h3>bad {bad}</h3>
      </div>
    </div>
  );
};

export default App;
