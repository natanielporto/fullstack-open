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
    </div>
  );
};
