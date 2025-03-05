import { useState, useRef } from 'react'
import axios from 'axios'
import React from 'react'

import InfoWeather from './InfoWeather'
import InfoWeather5days from './InfoWeather5days'
import './Weather.css'

const Weather = () => {

    const inputRef = useRef()

    const [weatherCity, setWeatherCity] = useState({})
    const [weatherCity5days, setWeatherCity5days] = useState({})

    const searchCity = async () => {


        const city = inputRef.current.value
        const key = import.meta.env.VITE_WEATHER_API_KEY
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
        const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

        const apiInfo5days = await axios.get(url5days)
        const apiInfo = await axios.get(url)

        setWeatherCity(apiInfo.data)
        setWeatherCity5days(apiInfo5days.data)
    }

    return (
        <div className='container'>
            <h1>Previsão do tempo</h1>

            <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
            <button onClick={searchCity}>Buscar</button>

            <InfoWeather weatherCity={weatherCity} />
            <InfoWeather5days weatherCity5days={weatherCity5days} />
        </div>

    )
}

export default Weather

