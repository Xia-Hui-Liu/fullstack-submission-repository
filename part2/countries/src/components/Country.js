import Weather from './Weather';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Country = ({search}) => {
    const [countries, setCountries] = useState([]);

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

    if (filter.length > 10) {
      return(
        <div>
          too many countries, specify a filter.
        </div>
      )
    }
    if (filter.length === 1) {
      let la = filter[0].capitalInfo.latlng[0];
      let ln = filter[0].capitalInfo.latlng[1];
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

  export default Country