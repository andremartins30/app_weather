import React from 'react'
import './InfoWeather.css'

const InfoWeather = ({ weatherCity }) => {

    if (!weatherCity?.weather) {
        return null
    }

    return (
        <div className='weather-container'>
            <h2>{weatherCity.name}</h2>
            <div className='weather-info'>
            <img src={`http://openweathermap.org/img/wn/${weatherCity.weather[0].icon}.png`} />
                <p className='temperature'>{Math.round(weatherCity.main.temp)}°C</p>
            </div>
            <p className='description'>{weatherCity.weather[0].description}</p>
            <div className='details'>
                <p>Sensação Térmica: {Math.round(weatherCity.main.feels_like)}°C</p>
                <p>Umidade: {weatherCity.main.humidity}%</p>
                <p>Pressão: {weatherCity.main.pressure}hPa</p>
            </div>
        </div>
    )
}

export default InfoWeather