import react from 'react';
/*import Spinner from './Spinner';*/


const Card = ({loadingData, showData, weather, forecast}) => {
    
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = day + '/' + month + '/' + year;
    
    let url = "";
    let iconUrl = "";
 
    let iconUrl3 = "";
    let iconUrl6 = "";
    
    let forecastDate3 = "";
    let forecastDate6 = "";
    
    
    if(showData){
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";
      
        iconUrl3 = url + forecast.list[0].weather[0].icon + ".png";
        iconUrl6 = url + forecast.list[1].weather[0].icon + ".png";
       
        forecastDate3 = forecast.list[0].dt_txt.substring(8, 10) + '/' + forecast.list[0].dt_txt.substring(5, 7) + '/' + forecast.list[0].dt_txt.substring(0, 4) + ' ' +  forecast.list[0].dt_txt.substring(11, 13);
        forecastDate6 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[1].dt_txt.substring(11, 13);
       
    }


return (
    <div className='panel'> 
       
       <div className="container-weather"> 
      
            {
                showData === true ? (
                    
                    <div className='TempWeather'>
                        <h1>{weather.name}</h1>
                        <h2>{weather.main.temp}°C</h2>
                        <div className="weather-date">{date}</div>
                        <p className="weather-icon"><img src={iconUrl} alt="icon"/>{weather.weather[0].description}</p>
                       
                        <div className="col-container">
                            <div className="col">
                                <p>{forecastDate3}h</p>
                                <p className="description"><img src={iconUrl3} alt="icon"/>{forecast.list[1].weather[0].description}</p>
                                <p className="temp">{forecast.list[1].main.temp.toFixed(1)}ºC</p>
                            </div>
                            <div className="col">
                                <p>{forecastDate6}h</p>
                                <p className="description"><img src={iconUrl6} alt="icon"/>{forecast.list[2].weather[0].description}</p>
                                <p className="temp">{forecast.list[2].main.temp.toFixed(1)}ºC</p>
                            </div>   
                        </div>                    
                    </div>
               
                ):(
                    <h2 className = "text-light"></h2>
                )
            }

    </div>
</div>  
 )

}


export default Card;