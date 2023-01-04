import logo from './logo.svg';
import './App.css';
import {Search} from './components/Search'
import {CurrentWeather} from './components/currentweather'
import { WEATHER_API_KEY, WEATHER_API_URL } from './components/api';
function App() {
  WEATHER_API_URL='https://api.openweathermap.org/data/2.5';
  WEATHER_API_KEY='';

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
      })
  }
  return (
    
    <div className='container'>
    < Search onSearchChange={handleOnSearchChange}/>
    <CurrentWeather/>
    </div>
    
  );
}

export default App;
 