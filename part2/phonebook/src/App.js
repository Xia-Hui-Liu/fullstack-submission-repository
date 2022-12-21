import { useState} from 'react'


const Filter = ({search, handleSearch}) => {
  return(
    <div>
        filter shown with <input type='search' name='filter' value={search} onChange={handleSearch} />
    </div>
  )
}

const PersonForm = ({addName, newName,newNumber, handleNameChange, handleNumberChange}) => {
return(
    <>
     <form onSubmit={addName}>
        <div>
          name: <input type='text' name='name' required value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input type='tel' name='phone' placeholder='39-44-5323523'required value={newNumber} onChange={handleNumberChange} /> 
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
)
}

const Persons =({persons,search}) => {
   return(
    <div>
        {(search.query ? search.list.map((person, i) => {
            return <p key={i}>{person.name} {person.number}</p>
        }) : persons.map((person, i) => { return <p key={i}>{person.name} {person.number}</p>}))
       }
      </div>
   )

}

const App = () => {
  const [persons, setPersons] = useState(
    [
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
      ]
  ) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNumber] = useState('');
  const [search, setSearch] = useState({
    query: '',
    list: [ ]
  });

  const addName = (event) => {
    event.preventDefault();
    setNewName('')
    setNumber('')
    setPersons([...persons, {name:newName, number:newNumber}])
  };
 
  const handleNameChange = (event) => {
    if([...persons].map(n=>n.name).includes(event.target.value)){
        alert(`${event.target.value} is already added to phonebook`)
    } else {
    setNewName(event.target.value);
    setPersons([...persons, {name:newName}])
  }
}

const handleNumberChange = (event) => {  
    setNumber(event.target.value);
    setPersons([...persons, {number:newNumber}])
}
const handleSearch = (event) => {
    const filter = persons.filter(person => {
        if(event.target.value === '') return persons
        return (person.name.toLowerCase()).includes((event.target.value).toLowerCase())
    })
    setSearch({
        query: event.target.value,
        list: filter
    })
}
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search.query} handleSearch={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h3>Numbers</h3>
      <Persons persons={persons}  search={search}  />
    </div>
  )
}

export default App