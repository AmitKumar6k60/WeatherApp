import React, { useEffect, useState, useContext,createContext } from "react";
import WeatherCard from "./components/WeatherCard";
import Searchbox from "./components/Searchbox";
import Picture from "./components/Picture";




// api
const baseUrl="https://api.weatherapi.com/v1/current.json?key=d4788afb3d4c49b48cc115613241401";

const getCityWeatherData = async(city) =>{
  // console.log("fetching for city: ",city);
    const response = await fetch(`${baseUrl}&q=${city}&aqi=no`);
    // console.log('response',response);
    if(response.status===400){
      alert('Bad Request : City not present in Database');
      return null;
    }
    return await response.json();
};





// create context
const weatherContext = createContext(null);
// exporting custom hook to read the context
export const useWeather =()=>{
  return useContext(weatherContext);
}







export default function IndexComponent() {

  const [data,setData]=useState(null);

  // fetch New Delhi data when component mount for the first time
  useEffect(()=>{
    // console.log("First time mounting");

    getCityWeatherData('New Delhi')
    .then((fetchedData)=>{
        setData(fetchedData);
    })
    .catch(error=>{console.log("Error: ",error)});
    
  },[]);

  // fnc to fetch data on click of searchButton
  const fetchData = async (city)=>{
    console.log("Search Button Clicked");
    const fetchedData = await getCityWeatherData(city);   // api request
    if(fetchedData!==null)setData(fetchedData);
   
  }

  if(data===null){
    return <h2 style={{textAlign: 'center' }}>Loading...</h2>

  }




  return (
    <div className="fullscreen">
        <div className="header">
          <img className="appicon" src="./images/appicon.png" />
          <p className="appName">Weather App</p>
        </div>
      <weatherContext.Provider
        value={{data,fetchData}}>
              <Searchbox />
              <Picture />
              {data ? <WeatherCard />:<span>Loading...</span>}
      </weatherContext.Provider>
    </div>
    
  );
}