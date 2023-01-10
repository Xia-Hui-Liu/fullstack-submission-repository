import { useState, useEffect } from 'react';
import axios from 'axios';

const Country = ({filter}) => {
  if (filter.length > 10) {
    return(
      <div>
        too many countries, specify a filter.
      </div>
    )
  }
  if (filter.length === 1) {
    let la = filter[0].latlng[0];
    let ln = filter[0].latlng[1];
    return(
      <div>
        <h2>{filter[0].name.common}</h2>
        <span>
          <p>capital {filter[0].capital}</p>
          <p>area {filter[0].area}</p>
        </span>
        <h3>Languages:</h3> 
        {Object.keys(filter[0].languages).map((e, i) => <ul key={i}><li>{filter[0].languages[e]}</li></ul>)}
        <img src={filter[0].flags.png} alt={filter[0].name.common} />
        <div>
          <h3>Weather in {filter[0].capital}</h3>
          <Weather la={la} ln={ln}/>
        </div>
      </div>
    )
  }
    return(
        <div>
        {
        filter.map((country,i) =>
          <p key={i}>
            {country.name.common}<button>Show</button>
          </p>)
        }
        
      </div>
    )
}

const Weather = ({la, ln}) => {
  const [weather, setWeather] = useState([])
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${ln}&units=metric&appid=${apiKey}`;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.json())
      .then((data) => setWeather({
        temp: data.weather[0].main.temp,
        wind: data.weather[0].wind
      }));
  }, [url]);
  
  const kToF = (weather) => {
    return (weather.temp - 273.15).toFixed(2);
  };

  return(
    <>
     <p>Temperature {kToF} Celcius</p>
     <p>Wind {weather.wind}</p>
    </>
    
  )
}
const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  // const [weather, setWeather] = useState('');
 
  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(res => {
      setCountries(res.data);
    })
  }, []);

  const filter = countries.filter(country =>
    country.name.common.toLowerCase().includes(search.toLowerCase()) 
    );
  
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  
  return (
    <div>
    Find countries
    <input type='text' value={search} onChange={handleSearch}/>
    {search && <Country filter={filter} />}
    </div>
  );

 }


export default App