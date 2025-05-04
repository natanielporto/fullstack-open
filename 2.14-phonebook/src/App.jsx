import { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { People } from "./components/People";
import { deletePerson, getPeople, postPerson } from "./api";

const App = () => {
  const [initialData, setInitialData] = useState([]);
  const [people, setPeople] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  useEffect(() => {
    getPeople().then((response) => {
      setInitialData(response);
      setPeople(response);
    });
  }, []);

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

    const person = { newName, newPhone };
    postPerson(person).then((returnedNote) => {
      setInitialData(initialData.concat(returnedNote));
      setPeople(people.concat(returnedNote));
    });
    setNewName("");
    setNewPhone("");
  };

  const handleDeletePerson = (id) => {
    deletePerson(id).then((data) => {
      setInitialData(initialData.filter((person) => person.id !== data.id));
      setPeople(initialData.filter((person) => person.id !== data.id));
    });
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
      {people.length > 0 && (
        <People data={people} deleteFunction={handleDeletePerson} />
      )}
    </div>
  );
};

export default App;
