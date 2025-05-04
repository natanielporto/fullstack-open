import React from "react";

export const People = ({ data, deleteFunction }) => {
  return data.map(({ name, number, id }) => (
    <div
      key={`${name}+${number}+${id}`}
      style={{
        display: "flex",
        alignItems: "center",
        gap: ".5rem",
        marginBottom: ".5rem",
      }}
    >
      <div>{`${name} ${number}`}</div>
      <button onClick={() => deleteFunction(id)}>Delete</button>
    </div>
  ));
};
