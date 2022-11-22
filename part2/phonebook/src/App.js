import { useState, useEffect } from "react";
import personsService from "./services/persons";
import Filter from "./components/Filter";
import PersonsForm from "./components/PersonsForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    personsService.getAll().then((personsData) => {
      setPersons(personsData);
      setFiltered(personsData);
    });
  }, []);

  const handleFilter = (e) => {
    if (e.target.value.length !== 0) {
      const result = persons.filter((person) =>
        person.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFiltered(result);
    } else {
      setFiltered([...persons]);
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleAddPerson = (e) => {
    e.preventDefault();
    const personExists = persons.some((p) => p.name === newName);
    if (!personExists) {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      personsService.addPerson(newPerson).then((res) => {
        setPersons([...persons, res]);
        setFiltered([...persons, res]);
        setNewName("");
        setNewNumber("");
      });
    } else {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const person = persons.filter((p) => p.name === newName);
        const updated = {
          name: person[0].name,
          number: newNumber,
          id: person[0].id,
        };
        personsService.updatePerson(person[0].id, updated).then((res) => {
          setPersons(
            persons.map((person) => person.id !== res.id ? person : res)
          );
          setFiltered(
            persons.map((person) => person.id !== res.id ? person : res)
          );
        });
      }
    }
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personsService.deletePerson(id);
      const updatedState = persons.filter((person) => person.id !== id);
      setPersons(updatedState);
      setFiltered(updatedState);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <h3>Add a new</h3>
      <PersonsForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleAddPerson={handleAddPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={filtered} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
