import React from "react";

export const Filter = ({ text, onChange, value }) => {
  return (
    <div>
      {text} <input onChange={onChange} value={value} />
    </div>
  );
};
