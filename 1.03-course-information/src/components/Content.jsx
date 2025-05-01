import React from "react";
import { Part } from "./Part";

export const Content = ({ data }) => {
  return (
    <div>
      <Part part={data[0].name} exercise={data[0].exercises} />
      <Part part={data[1].name} exercise={data[1].exercises} />
      <Part part={data[2].name} exercise={data[2].exercises} />
    </div>
  );
};
