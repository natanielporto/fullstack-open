import React from "react";

export const Courses = ({ courses }) => {
  return courses.map((course) => (
    <div key={`${course.id} + $1{course.name}`}>
      <h3>{course.name}</h3>
      {course.parts.map((part) => (
        <div key={`${part.name} + ${part.id}`}>
          <span>{`${part.name} ${part.exercises}`}</span>
        </div>
      ))}
      <h4>
        Total of {course.parts.reduce((acc, item) => acc + item.exercises, 0)}{" "}
        exercises
      </h4>
    </div>
  ));
};
