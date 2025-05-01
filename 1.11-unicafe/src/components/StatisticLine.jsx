import React from "react";

export const StatisticLine = ({ statistic, value }) => {
  return <row>{`${statistic}: ${value}`}</row>;
};
