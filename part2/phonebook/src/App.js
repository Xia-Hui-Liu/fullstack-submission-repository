
import { useState, useEffect } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNumber] = useState('');
  const [search, setSearch] = useState({
    query: '',
    list: []
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('')

  
  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
      .catch(error => {
        setError(error.message)
      })
  }, [])

  const addName = (e, id) => {
    e.preventDefault();
    const personObject = {
        name: newName,
        number: newNumber,
    };
  //   const name = persons.map(n => n.name.toString().toLowerCase());
  //   const person = persons.find(n => n.id === id);
  //  if (name === newName) {
  //    axios.put(`http://localhost:4000/persons/5`, {
  //       name: name,
  //       number: newNumber, 
  //       id: id
  //     })}
      
    personService
      .create(personObject)
      .then(res => {
        setPersons(persons.concat(res.data))
        setNewName('')
        setNumber('')
        setMessage(`Added ${newName}`)
      }).catch((error) => setError(error.response))
   
      // personService
      //    .update(id, changedPerson)
      //    .then(returnedPerson => {
      //     const person = persons.find(n => n.id === id);
      //      setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
      //    })
      //    .catch(error => {
      //      setError(
      //        error.message
      //      )
      //    })

      setTimeout(() => {
        setMessage(null)
      }, 3000)
  };

  const handleName = (e) => {
    const input = e.target.value;
    const name = persons.map(n => n.name.toString().toLowerCase());
    name
    .includes(input.toLowerCase())
    ? alert(`${input} is already added to phonebook, replacethe old number with a new one?`) 
    :setNewName(input) 
  }

  const handleNumber = (e) => {
    setNumber(e.target.value)
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

  // const updatePerson = (id) => {
  //  const person = persons.find(n => n.id === id);
  //  const changedPerson = { ...person, number: !person.number};

  //  personService
  //     .update(id, changedPerson)
  //     .then(returnedPerson => {
  //       setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
  //     })
  //     .catch(error => {
  //       setError(
  //         error.message
  //       )
  //     })
  // }

  const deletePerson = (id) => {
    const newPersons = persons.filter((person) => {
      return person.id !== id;
      });
   const deleted = persons.filter((person) => {
    return person.id === id;
    });
    personService
        .dele(id)
        .then(res => {
          return res.data
        }).catch(error => {
          alert(
            `the person '${deleted}' was already deleted from server`)
          })
    
      setPersons(newPersons)
      setMessage(`Deleted ${deleted[0].name}`)
      setTimeout(() => {
        setMessage(null)
      }, 3000)
      
        }
        
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter search={search} handleSearch={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm addName={addName} newName={newName} handleName={handleName} newNumber={newNumber} handleNumber={handleNumber} />
      <h3>Numbers</h3>
      <Persons search={search} newName={newName} persons={persons} deletePerson={deletePerson} />
    </div>
  )
}


export default App