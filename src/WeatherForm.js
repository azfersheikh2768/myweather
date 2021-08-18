import React from "react";
import './WeatherForm.css';

const WeatherForm = ({ info }) => {

    var week = {
        0 : "Sunday",
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday",
        4 : "Thursday",
        5 : "Friday",
        6 : "Saturday"

    }


  return (
    <div className="weather-main">
      <div className="today-forecast">
        <p>Today</p>
        <div className="weather-icon"><div>  <img src={`http://openweathermap.org/img/w/${info[0].weather[0].icon}.png`} ></img></div>
            <p> {info[0].main.temp_max}°C</p>
            </div>
        <p>{info[0].weather[0].description}</p>
      
      </div>

      <div className="remaining-forecast">
      <div className="remaining">
        <p>{week[JSON.stringify((new Date(info[8].dt_txt)).getDay())]}</p>
        <div className="weather-icon"><div>  <img src={`http://openweathermap.org/img/w/${info[8].weather[0].icon}.png`} ></img></div>
            <p> {info[8].main.temp_max}°C</p>
            </div>
                    <p>{info[8].weather[0].description}</p>
        </div>
       

        <div className="remaining">
        <p>{week[JSON.stringify((new Date(info[16].dt_txt)).getDay())]}</p>
        <div className="weather-icon"><div>  <img src={`http://openweathermap.org/img/w/${info[16].weather[0].icon}.png`} ></img></div>
            <p> {info[16].main.temp_max}°C</p>
            </div>
                    <p>{info[16].weather[0].description}</p>
        </div>
        <div className="remaining">
        <p>{week[JSON.stringify((new Date(info[24].dt_txt)).getDay())]}</p>
        <div className="weather-icon"><div>  <img src={`http://openweathermap.org/img/w/${info[24].weather[0].icon}.png`} ></img></div>
            <p> {info[24].main.temp_max}°C</p>
            </div>
                    <p>{info[24].weather[0].description}</p>
        </div>
        <div className="remaining">
        <p>{week[JSON.stringify((new Date(info[32].dt_txt)).getDay())]}</p>
        <div className="weather-icon"><div>  <img src={`http://openweathermap.org/img/w/${info[32].weather[0].icon}.png`} ></img></div>
            <p> {info[32].main.temp_max}°C</p>
            </div>
                     <p>{info[32].weather[0].description}</p>
        </div>
        <div className="remaining">
        <p>{week[JSON.stringify((new Date(info[39].dt_txt)).getDay())]}</p>
        <div className="weather-icon"><div>  <img src={`http://openweathermap.org/img/w/${info[39].weather[0].icon}.png`} ></img></div>
            <p> {info[39].main.temp_max}°C</p>
            </div>
                   <p>{info[39].weather[0].description}</p>
        </div>
      </div>
    </div>
    
  );
};

export default WeatherForm;
