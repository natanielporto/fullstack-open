import React from "react";
import { Filter } from "./Filter";

export const PersonForm = ({
  onChangeName,
  onChangeNumber,
  onSubmit,
  nameValue,
  numberValue,
}) => {
  return (
    <form>
      <Filter text="Name:" onChange={onChangeName} value={nameValue} />
      <Filter text="Number:" onChange={onChangeNumber} value={numberValue} />
      <div>
        <button type="submit" onClick={onSubmit}>
          add
        </button>
      </div>
    </form>
  );
};
