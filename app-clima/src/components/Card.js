import react from 'react';
import Spinner from './Spinner';

const Card = ({loadingData, showData, weather, forecast}) => {

    if(loadingData){
       
        return <Spinner />
        
    }

 return (
        <div>

            {
                showData === true ? (
                    <div className='TempWeather'>
                        <h1>{weather.name}</h1>
                        <h2>{weather.main.temp}°C</h2>
                        <h2>1 dia{forecast.list[7].main.temp}°C</h2>
                        <h2>2 dia{forecast.list[15].main.temp}°C</h2>
                        <h2>3 dia{forecast.list[23].main.temp}°C</h2>
                        <h2>4 dia{forecast.list[31].main.temp}°C</h2>
                        <h2>5 dia{forecast.list[39].main.temp}°C</h2>
                    </div>
                ):(
                    <h2 className = "text-light">Sin datos</h2>
                )
            }


        </div>
 )

}


export default Card;