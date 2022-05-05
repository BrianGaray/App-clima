import axios from "axios";
import { useEffect, useState } from "react";

function Geolocation() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [cityName, setCityName] = useState("");
  const [Icon, setIcon] = useState([]);
  const [Description, setDescription] = useState("");
 //Temperatura del pronostico
  const [TempForecast, setTempForecast] = useState(0);
  const [TempForecast2, setTempForecast2] = useState(0);
  const [TempForecast3, setTempForecast3] = useState(0);
  const [TempForecast4, setTempForecast4] = useState(0);
  const [TempForecast5, setTempForecast5] = useState(0);
 //Fecha del pronostico
  const [ForecastDate, setForecastDate] = useState(0);
  const [ForecastDate2, setForecastDate2] = useState(0);
  const [ForecastDate3, setForecastDate3] = useState(0);
  const [ForecastDate4, setForecastDate4] = useState(0);
  const [ForecastDate5, setForecastDate5] = useState(0);
  //Descripcion del pronostico
  const [DescForecast, setDescForecast] = useState("");
  const [DescForecast2, setDescForecast2] = useState("");
  const [DescForecast3, setDescForecast3] = useState("");
  const [DescForecast4, setDescForecast4] = useState("");
  const [DescForecast5, setDescForecast5] = useState("");
  //Icono del pronostico
  const  [IconForecast, setIconForecast] = useState([]);
  const  [IconForecast2, setIconForecast2] = useState([]);
  const  [IconForecast3, setIconForecast3] = useState([]);
  const  [IconForecast4, setIconForecast4] = useState([]);
  const  [IconForecast5, setIconForecast5] = useState([]);
  


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
      
      let url = "http://openweathermap.org/img/w/";
     //Temperatura del pronostico
      setTempForecast(resforecast.data.list[7].main.temp)
      setTempForecast2(resforecast.data.list[15].main.temp)
      setTempForecast3(resforecast.data.list[23].main.temp)  
      setTempForecast4(resforecast.data.list[31].main.temp)
      setTempForecast5(resforecast.data.list[39].main.temp)
     //fecha del pronostico
     setForecastDate(resforecast.data.list[7].dt_txt.substring(8, 10) + '/' + resforecast.data.list[7].dt_txt.substring(5, 7) + '/' + resforecast.data.list[7].dt_txt.substring(0, 4));
     setForecastDate2(resforecast.data.list[15].dt_txt.substring(8, 10) + '/' + resforecast.data.list[15].dt_txt.substring(5, 7) + '/' + resforecast.data.list[15].dt_txt.substring(0, 4));
     setForecastDate3(resforecast.data.list[23].dt_txt.substring(8, 10) + '/' + resforecast.data.list[23].dt_txt.substring(5, 7) + '/' + resforecast.data.list[23].dt_txt.substring(0, 4));
     setForecastDate4(resforecast.data.list[31].dt_txt.substring(8, 10) + '/' + resforecast.data.list[31].dt_txt.substring(5, 7) + '/' + resforecast.data.list[31].dt_txt.substring(0, 4));
     setForecastDate5(resforecast.data.list[39].dt_txt.substring(8, 10) + '/' + resforecast.data.list[39].dt_txt.substring(5, 7) + '/' + resforecast.data.list[39].dt_txt.substring(0, 4));
      //Descripcion del pronostico
      setDescForecast(resforecast.data.list[7].weather[0].description)
      setDescForecast2(resforecast.data.list[15].weather[0].description)
      setDescForecast3(resforecast.data.list[23].weather[0].description)
      setDescForecast4(resforecast.data.list[31].weather[0].description)
      setDescForecast5(resforecast.data.list[39].weather[0].description)
     //Icono del pronostico
      setIconForecast(url + resforecast.data.list[7].weather[0].icon + ".png")
      setIconForecast2(url + resforecast.data.list[15].weather[0].icon + ".png")
      setIconForecast3(url + resforecast.data.list[23].weather[0].icon + ".png")
      setIconForecast4(url + resforecast.data.list[31].weather[0].icon + ".png")
      setIconForecast5(url + resforecast.data.list[39].weather[0].icon + ".png")
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
        
        <div className="columns">
      
          <div className="col_1">
            <div className="Forecast-date">{ForecastDate}</div>
            <div className="Forecast-icon"><img src={IconForecast} alt="icon"/>{DescForecast}</div>
            <p>{TempForecast}°C</p>
          </div>
        
          <div className="col_2">
            <div className="Forecast-date">{ForecastDate2}</div>
            <div className="Forecast-icon"><img src={IconForecast2} alt="icon"/>{DescForecast2}</div>
            <p>{TempForecast2}°C</p>
          </div>

          <div className="col_3">
            <div className="Forecast-date">{ForecastDate3}</div>
            <div className="Forecast-icon"><img src={IconForecast3} alt="icon"/>{DescForecast3}</div>
            <p>{TempForecast3}°C</p>
          </div>

          <div className="col_4">
            <div className="Forecast-date">{ForecastDate4}</div>
            <div className="Forecast-icon"><img src={IconForecast4} alt="icon"/>{DescForecast4}</div>
            <p>{TempForecast4}°C</p>
          </div>

          <div className="col_5">
            <div className="Forecast-date">{ForecastDate5}</div>
            <div className="Forecast-icon"><img src={IconForecast5} alt="icon"/>{DescForecast5}</div>
            <p>{TempForecast5}°C</p>
          </div>

      </div>
  </div>
</div> 
  );
}

export default Geolocation;