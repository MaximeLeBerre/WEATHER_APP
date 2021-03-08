import './style/App.scss';
import {useState, useEffect} from 'react';
import axios from 'axios';



function App() {

  const [apiData, setApiData] = useState({});
  const [getCity, setGetCity] = useState('');
  const [city, setCity] = useState('');

  const apiKey = 'f1d392a2080d4952ba021fce20221681';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&units=metric&appid=${apiKey}`


  useEffect(() => {
    axios.get(apiUrl)
      .then((res) => setApiData(res.data))
  }, [apiUrl]);


  const handleInput = (event) => {
    setGetCity(event.target.value);
  }

  const onSubmit = () => {
    setCity(getCity);
  }

  return (
    <div className="container">
      <h1>REACT WEATHER APP</h1>
      <div className="container_form">
        <label for="location-name">
          Enter Location :
        </label>
        <div>
            <input
              type="text"
              id="location-name"
              onChange={handleInput}
              value={getCity}
            />
          <button onClick={onSubmit}>
            Search
          </button>
        </div>
      </div>
      <div className="container_informations">
            
        {
          apiData.main 
          ? (
            <div className="container_informations">
              <img alt ="weather icon" src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}/>
              <h1>{apiData.name}</h1>
              <h1>{apiData.weather[0].description}</h1>
              <h1>Temparature : {apiData.main.temp} °</h1>

            </div>
            
          ) : (
          <h1>Loading</h1> 
          )}
      </div>
    </div>
  );
}

export default App;
