const PersonForm = ({addName, newName, handleName, newNumber, handleNumber}) => {
    return(
        <form onSubmit={addName}>
        <div>
          name: <input type='name' value={newName} onChange={handleName} />
        </div>
        <div>
          number: <input type='tel' value={newNumber} onChange={handleNumber} placeholder='39-44-5323523' />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}
export default PersonForm