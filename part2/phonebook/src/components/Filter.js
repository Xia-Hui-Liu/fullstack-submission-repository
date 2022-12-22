const Filter = ({search, handleSearch}) => {
return(
<form>
  filter shown with <input type='search' value={search.query} onChange={handleSearch} /> 
</form>
)
}

export default Filter