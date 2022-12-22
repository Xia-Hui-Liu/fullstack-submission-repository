import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNumber] = useState('');
  const [search, setSearch] = useState({
    query: '',
    list: []
  })
  
useEffect(() => {
    axios
    .get('http://localhost:4000/persons')
    .then(response => {
        console.log(response.data)
        setPersons(response.data)
    })
}, [])

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
    };
    setNewName('');
    setNumber('');
    setPersons(persons.concat(personObject))
  };
 
  const handleName = (event) => {
        persons
        .map(n=>n.name)
        .includes(event.target.value)
        ? alert(`${event.target.value} is already added to phonebook`)
        : setNewName(event.target.value);
  }

  const handleNumber = (event) => {
    setNumber(event.target.value)
  }

  const handleSearch = (e) => {
    const results = persons.filter(person => {
        if(e.target.value === "") return persons
         return person.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setSearch({
        query: e.target.value,
        list: results
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm addName={addName} newName={newName} handleName={handleName} newNumber={newNumber} handleNumber={handleNumber} />
      <h3>Numbers</h3>
      <Persons search={search} newName={newName} persons={persons} />
    </div>
  )
}

export default App