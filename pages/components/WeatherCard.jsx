import React, { useContext } from 'react';
import { useWeather } from '..';


export default function WeatherCard() {

  const {data} = useWeather();
  // console.log("data in card : ", data);


  return (
    <div className='weather-card'>
      <div className='left-half'>
        <h1 className='temperature'>{data.current.temp_c}°C</h1>
        <span className='outlook'>
            <img src={data.current.condition.icon}/>
            <span>{data.current.condition.text}</span>
        </span>
        <span className='location'>{data.location.name}, {data.location.country}</span>
      </div>

      <div className='right-half'>
        <div className='humidity'>
          <img src='../images/humidity.png'/>
          <div>
            <span className='sp1'>{data.current.humidity}%</span>
            <span className='sp2'>Humidity</span>
          </div>
        </div>
        <div className='windspeed'>
          <img src='../images/wind.png'/>
          <div>
            <span className='sp1'>{data.current.wind_kph} Km/h</span>
            <span className='sp2'>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  )
}
