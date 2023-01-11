import axios from 'axios';
import { useState, useEffect } from 'react';

const Weather = ({la, ln}) => {
    const [weather, setWeather] = useState({
      temp:[],
      wind:[],
      icon: ''
    });
    
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${ln}&units=metric&appid=${apiKey}`;

    useEffect(() => {
      axios
        .get(url)
        .then((response) => {
          setWeather({
            temp: response.data.main.temp,
            wind: response.data.wind.speed,
            icon: response.data.weather.icon,
          });
    })}, [url]);
    
    const temp = Math.round(parseFloat(weather.temp))
    const wind = weather.wind;
    return(
      <div>
        <p>Temperature {temp} Celcius</p>
        <img src={`http://openweathermap.org/img/w/${weather.icon}@2x.png`} alt='weather' /> 
        <p>Wind {wind} m/s</p>
      </div>
      
    )
  }

  export default Weather