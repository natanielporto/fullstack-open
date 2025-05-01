import React from "react";

export const StatisticLine = ({ statistic, value }) => {
  return <h3>{`${statistic}: ${value}`}</h3>;
};
