import React from "react";

export const Course = ({ course }) => {
  const { name, parts } = course;

  return (
    <div>
      <h3>{name}</h3>
      {parts.map((part) => (
        <div key={part.id}>
          <span>{`${part.name} ${part.exercises}`}</span>
        </div>
      ))}
      <h4>
        Total of {parts.reduce((acc, item) => acc + item.exercises, 0)}{" "}
        exercises
      </h4>
    </div>
  );
};
