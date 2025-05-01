import React from "react";

export const Statistics = ({ good, neutral, bad, all, average }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <h3>good {good}</h3>
      <h3>neutral {neutral}</h3>
      <h3>bad {bad}</h3>
      <h3>all {all}</h3>
      <h3>average {average}</h3>
      <h3>positive {all > 0 ? (good * 100) / all : 0}%</h3>
    </div>
  );
};
