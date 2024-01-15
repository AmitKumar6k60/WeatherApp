import React from 'react'
import { useWeather } from '..';

export default function Picture() {

  const {data} = useWeather();

  return (
    <div className='picture'>
      <img src="./images/1.png"/>
      <img src="./images/2.png"/>
      <img src="./images/3.png"/>
      <img src="./images/4.png"/>
      {/* <img src="./images/5.png"/> */}
    </div>
  )
}
