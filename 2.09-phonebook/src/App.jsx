import { useState } from "react";

const App = () => {
  const [initialData, setIitialData] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [persons, setPersons] = useState(initialData);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleSearch = (e) => {
    const result = persons.filter((person) =>
      person.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (result) {
      setPersons(result);
    }
    if (e.target.value === "") {
      setPersons(initialData);
    }
  };

  const handleTypeName = (e) => {
    setNewName(e.target.value);
  };

  const handleTypePhoneNumber = (e) => {
    setNewPhone(e.target.value);
  };

  const handleAddPerson = (e) => {
    e.preventDefault();
    const nameAlreadyExists = persons.find((person) => person.name === newName);

    if (nameAlreadyExists) {
      return alert(`${newName} is already added to phonebook`);
    }
    if (newName === "" || newPhone === "") {
      return alert("Name and phone must be provided.");
    }

    setIitialData(initialData.concat({ name: newName, number: newPhone }));
    setPersons(persons.concat({ name: newName, number: newPhone }));
    setNewName("");
    setNewPhone("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with:{" "}
        <input type="text" onChange={(e) => handleSearch(e)} />
      </div>
      <h2>Add a new</h2>
      <form>
        <div>
          name: <input onChange={(e) => handleTypeName(e)} value={newName} />
        </div>
        <div>
          number:{" "}
          <input onChange={(e) => handleTypePhoneNumber(e)} value={newPhone} />
        </div>
        <div>
          <button type="submit" onClick={(e) => handleAddPerson(e)}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(({ name, number }, index) => (
        <p key={`${name}+${number}+${index}`}>{`${name} ${number}`}</p>
      ))}
    </div>
  );
};

export default App;
