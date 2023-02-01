
const Persons = ({search, newName, persons, deletePerson}) => {
    const personsToShow = search.query
    ? search.list.filter(person => person.name.includes(newName)===true)
    : persons
    return(
        <div>
            {
            personsToShow
            .map(person => 
            <p key={person.id}>
                {person.name} {person.number}
                <button type="button" onClick={() => {if(window.confirm(`Delete ${person.name}?`)) return deletePerson(person.id)}}>
                 delete
                </button>
            </p>)
            } 
        </div>
    )
}

export default Persons