import logo from './logo.svg';
import './App.css';
import {Search} from './components/Search'
import {Forecast} from './components/forecast'
import { useState } from 'react';
import {CurrentWeather} from './components/currentweather'
let WEATHER_API_URL='https://api.openweathermap.org/data/2.5';
let WEATHER_API_KEY='';
function App() {
  
  
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange=(searchData)=>{
    const[lat,lon]=searchData.value.split(" ")
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const currentWeatherForcast = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
      Promise.all([currentWeatherFetch,currentWeatherForcast])
      .then(async(response)=>{
        const weatherRes=await response[0].json()
        const forcastRes=await response[1].json()
        setCurrentWeather({ city: searchData.label, ...weatherRes });
        setForecast({ city: searchData.label, ...forcastRes });

      })
  }
  console.log(currentWeather)
  console.log(forecast)
  return (
    
    <div className='container'>
    < Search onSearchChange={handleOnSearchChange}/>
    {currentWeather&& <CurrentWeather data={currentWeather}/>}
    {forecast&&<Forecast data={forecast} />}
    </div>
    
  );
}

export default App;
 