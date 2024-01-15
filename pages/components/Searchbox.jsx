import React,{useState} from 'react';
import { useWeather } from '../IndexComponent';

export default function Searchbox() {
  const {fetchData}=useWeather();
  const [city,setCity] = useState("");

  const clickHandler=()=>{
    fetchData(city);
    setCity("");
  }

  return (
    <div className="searchBox">
      <input type="text" className="searchInput" placeholder="Search Famous Cities..."
        value={city} onChange={(e)=>{setCity(e.target.value)}} />
      <button className="searchButton" onClick={clickHandler}>Search</button>
    </div>
  )
}