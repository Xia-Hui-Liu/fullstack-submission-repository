const Persons = ({search, newName, persons}) => {
    const personsToShow = search.query
    ? search.list.filter(person => person.name.includes(newName)===true)
    : persons
    return(
        <>
        {personsToShow.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
        </>
    )
}

export default Persons