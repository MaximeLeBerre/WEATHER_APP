import { useState, useEffect } from "react";
import axios from 'axios';

function Weather(){

  

  const [data, setData] = useState([]);
  const [city, setCity] = useState('Toulouse');

  const API_KEY= 'f1d392a2080d4952ba021fce20221681'


  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then((res) => {
      const data = res.data.main;
      setData(data);
    })
  }, [])


  return (
    <>
      <h1>Hello</h1>
      <h2>{city}</h2>
      <p>{data.temp_min}</p>
    </>
  )

}

export default Weather;