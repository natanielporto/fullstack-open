import React from "react";

export const People = ({ data, deleteFunction }) => {
  console.log("🚀 ~ People ~ data:", data);
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
      <button onClick={() => deleteFunction(id, name)}>Delete</button>
    </div>
  ));
};
