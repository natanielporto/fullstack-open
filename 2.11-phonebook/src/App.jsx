import { useState } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { People } from "./components/People";

const App = () => {
  const [initialData, setIitialData] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [people, setPeople] = useState(initialData);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleSearch = (e) => {
    const result = people.filter((person) =>
      person.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (result) {
      setPeople(result);
    }
    if (e.target.value === "") {
      setPeople(initialData);
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
    const nameAlreadyExists = people.find((person) => person.name === newName);

    if (nameAlreadyExists) {
      return alert(`${newName} is already added to phonebook`);
    }
    if (newName === "" || newPhone === "") {
      return alert("Name and phone must be provided.");
    }

    setIitialData(initialData.concat({ name: newName, number: newPhone }));
    setPeople(people.concat({ name: newName, number: newPhone }));
    setNewName("");
    setNewPhone("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter text="Filter shown with:" onChange={(e) => handleSearch(e)} />
      <h2>Add a new</h2>
      <PersonForm
        onChangeName={(e) => handleTypeName(e)}
        nameValue={newName}
        onChangeNumber={(e) => handleTypePhoneNumber(e)}
        numberValue={newPhone}
        onSubmit={(e) => handleAddPerson(e)}
      />
      <h2>Numbers</h2>
      <People data={people} />
    </div>
  );
};

export default App;
