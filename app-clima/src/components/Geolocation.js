import axios from "axios";
import { useEffect, useState } from "react";

function Geolocation() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [cityName, setCityName] = useState("");
  const [TempForecast, setTempForecast] = useState(0);
  const [TempForecast2, setTempForecast2] = useState(0);
  const [TempForecast3, setTempForecast3] = useState(0);
  const [TempForecast4, setTempForecast4] = useState(0);
  const [TempForecast5, setTempForecast5] = useState(0);
  const [Icon, setIcon] = useState([]);
  const [Description, setDescription] = useState("");

  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = day + '/' + month + '/' + year;
  
  
  
  
    const savePositionToState = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const fetchWeather = async () => {
    try {
      await window.navigator.geolocation.getCurrentPosition(
        savePositionToState
      );
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f9cb55b3f2666f289fa6a01d90ade1a3&lang=es&units=metric`
      );
     
      
      let url = "http://openweathermap.org/img/w/";
      setIcon(url + res.data.weather[0].icon + ".png") ;
      setDescription(res.data.weather[0].description)
      
      setTemperature(res.data.main.temp.toFixed(0));
      setCityName(res.data.name);
      
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWeather();
  });


  const fetchforecast = async () => {
    try {
      await window.navigator.geolocation.getCurrentPosition(
        savePositionToState
      );
      const resforecast = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=f9cb55b3f2666f289fa6a01d90ade1a3&lang=es&units=metric`
      );
      
      setTempForecast(resforecast.data.list[7].main.temp)
      setTempForecast2(resforecast.data.list[15].main.temp)
      setTempForecast3(resforecast.data.list[23].main.temp)  
      setTempForecast4(resforecast.data.list[31].main.temp)
      setTempForecast5(resforecast.data.list[39].main.temp)
    
      console.log(resforecast.data);
      


    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchforecast();
  });

  return (
    <div className="TempForecast"> 
    <div className="container"> 
      <div className="city-time">
      
      <h1 className="temp">{temperature}ºC</h1>
      <h1 className="name">{cityName}</h1>
      
      <div className="date">{date}</div>

      <div className="weather"><img src={Icon} alt="icon"/>{Description}</div>
      </div>
      </div>  
      <div className="columns">
      <div className="col">
      <p>1 dia{TempForecast}°C</p>
      </div>
      <div className="col2">
      <p>2 dia{TempForecast2}°C</p>
      </div>
      <div className="col3">
      <p>3 dia{TempForecast3}°C</p>
      </div>
      <div className="col4">
      <p>4 dia{TempForecast4}°C</p>
      </div>
      <div className="col5">
      <p>5 dia{TempForecast5}°C</p>
      </div>
    </div>
    </div>
  );
}

export default Geolocation;