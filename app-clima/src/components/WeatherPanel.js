import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";
import Geolocation from "./Geolocation";
//Panel del tiempo
const WeatherPanel = () => {
  let urlWeather =
    "https://api.openweathermap.org/data/2.5/weather?appid=290a028087077883f8fb093dc10e89f5&&lang=es&units=metric";
  let cityUrl = "&q=";

  let urlForecast =
    "https://api.openweathermap.org/data/2.5/forecast?appid=290a028087077883f8fb093dc10e89f5&lang=es&units=metric";

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");

  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);

    //weather

    urlWeather = urlWeather + cityUrl + loc;

    await fetch(urlWeather)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((weatherData) => {
        setWeather(weatherData);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      });

    //Forecast

    urlForecast = urlForecast + cityUrl + loc;

    await fetch(urlForecast)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((forecastData) => {
        setForecast(forecastData);

        setLoading(false);
        setShow(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      });
  };

  return (
    <React.Fragment>
      <Form newLocation={getLocation} />

      <Card
        showData={show}
        loadingData={loading}
        weather={weather}
        forecast={forecast}
      />

      <Geolocation />
    </React.Fragment>
  );
};

export default WeatherPanel;
