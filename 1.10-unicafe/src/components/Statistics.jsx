import React from "react";
import { StatisticLine } from "./StatisticLine";

export const Statistics = ({ good, neutral, bad, all, average }) => {
  return (
    <div>
      <h2>Statistics</h2>
      {all > 0 ? (
        <>
          <StatisticLine statistic="good" value={good} />
          <StatisticLine statistic="neutral" value={neutral} />
          <StatisticLine statistic="bad" value={bad} />
          <StatisticLine statistic="all" value={all} />
          <StatisticLine statistic="average" value={average} />
          <StatisticLine
            statistic="positive"
            value={all > 0 ? (good * 100) / all : 0}
          />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};
