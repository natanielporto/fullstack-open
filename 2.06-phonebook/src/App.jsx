import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleTypeName = (e) => {
    setNewName(e.target.value);
  };

  const addName = (e) => {
    e.preventDefault();
    setPersons(persons.concat({ name: newName }));
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={(e) => handleTypeName(e)} value={newName} />
        </div>
        <div>
          <button type="submit" onClick={(e) => addName(e)}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(({ name }, index) => (
        <p key={`${name}+${index}`}>{name}</p>
      ))}
    </div>
  );
};

export default App;
