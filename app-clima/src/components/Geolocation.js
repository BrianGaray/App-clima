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
      setTemperature(res.data.main.temp);
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
      <h1>{cityName}</h1>
      <h2>{temperature}ºC</h2>
      <h2>1 dia{TempForecast}°C</h2>
      <h2>2 dia{TempForecast2}°C</h2>
      <h2>3 dia{TempForecast3}°C</h2>
      <h2>4 dia{TempForecast4}°C</h2>
      <h2>5 dia{TempForecast5}°C</h2>
    </div>
  );
}

export default Geolocation;