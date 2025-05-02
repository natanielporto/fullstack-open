import React from "react";

export const People = ({ data }) => {
  return data.map(({ name, number, id }) => (
    <p key={`${name}+${number}+${id}`}>{`${name} ${number}`}</p>
  ));
};
