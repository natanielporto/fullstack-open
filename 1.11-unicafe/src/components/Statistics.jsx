import React from "react";
import { StatisticLine } from "./StatisticLine";

export const Statistics = ({ good, neutral, bad, all, average }) => {
  return (
    <table style={{ marginTop: "2rem" }}>
      <thead>
        <strong>Statistics</strong>
      </thead>
      {all > 0 ? (
        <row style={{ display: "flex", flexDirection: "column" }}>
          <StatisticLine statistic="good" value={good} />
          <StatisticLine statistic="neutral" value={neutral} />
          <StatisticLine statistic="bad" value={bad} />
          <StatisticLine statistic="all" value={all} />
          <StatisticLine statistic="average" value={average} />
          <StatisticLine
            statistic="positive"
            value={all > 0 ? (good * 100) / all : 0}
          />
        </row>
      ) : (
        <row>No feedback given</row>
      )}
    </table>
  );
};
