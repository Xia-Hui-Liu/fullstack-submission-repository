import { useState} from 'react';
import Country from './components/Country';

const App = () => {
  const [search, setSearch] = useState("");
 
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  
  return (
    <div>
    Find countries
    <input type='text' value={search} onChange={handleSearch}/>
    {search && <Country search={search} />}
    </div>
  );
 }


export default App