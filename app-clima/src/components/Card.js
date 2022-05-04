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
 
    if(showData){
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";
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