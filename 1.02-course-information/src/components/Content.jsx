import React from "react";
import { Part } from "./Part";

export const Content = ({ data }) => {
  return (
    <div>
      <Part part={data[0].part} exercise={data[0].exercises} />
      <Part part={data[1].part} exercise={data[1].exercises} />
      <Part part={data[2].part} exercise={data[2].exercises} />
    </div>
  );
};
