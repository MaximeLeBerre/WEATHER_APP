import { useState, useEffect } from "react";
import axios from 'axios';

function Weather(){

  

  const [data, setData] = useState([]);
  const [city, setCity] = useState('');
  const [icon, setIcon] = useState('');

  const API_KEY= 'f1d392a2080d4952ba021fce20221681'


  

  const handleInput = event => {
    setCity(event.target.value);
  };

  useEffect(() => {
    GetTemp();
    GetImg();
  }, [])



  const GetTemp = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&units=metric&appid=${API_KEY}`)
    .then((res) => {
      
      const data = res.data.main;
      console.log(data);
      setData(data);
    })
  }


  const GetImg = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&units=metric&appid=${API_KEY}`)
    .then((res) => {
      const data = res.data.weather[0].icon;
      console.log(data);
      setIcon(data);
    })
  }
  

  return (
    <>
    <form onSubmit={GetTemp}>
      <label htmlFor="City">City</label>
      <input type="text" onChange={handleInput}/>
      <button onClick={GetTemp}>View Meteo</button>
    </form>
      <h1>Hello</h1>
      <h2>{city}</h2>
      <p>{data.temp_min}</p>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img>
    </>
  )

}

export default Weather;