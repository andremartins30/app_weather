import React from 'react'
import './InfoWeather5days.css'

const InfoWeather5days = ({weatherCity5days}) => {

    if (!weatherCity5days?.list) {
        return null
    }

    let dailyForecast = {

    }

    for(let forecast of weatherCity5days.list){
        const date = new Date(forecast.dt *1000).toLocaleDateString('pt-BR')

        if(!dailyForecast[date]){
            dailyForecast[date] = forecast
        }

    }

    const next5days = Object.values(dailyForecast).slice(1,6)

    console.log(next5days)

    const convertDate = (date) => {
        const newDate = new Date(date.dt*1000).toLocaleDateString('pt-BR', {weekday:'long', day: '2-digit'})

        return newDate
        
    }

    return (
        <div className='weather-container'>
            <h3>Previsão próximos 5 dias</h3>
            <div className='weather-list'>
            {next5days.map(forecast => (
                <div key={forecast.dt} className='weather-item'>
                    <p className='forecast-day'>{convertDate(forecast)}</p>
                    <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} />
                    <p className='forecast-description'>{forecast.weather[0].description}</p>
                    <p>{Math.round(forecast.main.temp_min)}°C min. /{Math.round(forecast.main.temp_max)}°C max.</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default InfoWeather5days