/** @format */
import { useEffect, useState } from "react";
function WeathetCards({ locname }) {
  const [loc, setloc] = useState({});
  useEffect(() => {
    if (locname.length > 0) {
      const weatherKey = process.env.weatherkey;
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${locname}&aqi=yes`
      )
        .then((res) => res.json())
        .then((data) => setloc(data));
    }
  }, []);
  if (loc.location) {
    return (
      <div className="p-5 border-2 border-gray-100 bg-gray-700  transition duration-200 text-red-400 font-semibold text-center rounded-2xl hover:cursor-pointer hover:bg-gray-600 hover:text-red-100 hover:scale-105 hover:-translate-y-1">
        <p className="text-lg italic">
          {loc.location.name} ({loc.location.region})
        </p>
        <p className="text-lg">{loc.location.country}</p>
        <img className="mx-auto" src={loc.current.condition.icon} alt="" />
        <div className="flex flex-row items-center justify-center">
          <img
            src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-thermometer-weather-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
            className="h-8 w-8"
          />
          <p className="text-lg">{loc.current.temp_c}</p>
        </div>
        <p className="text-lg italic">
          (Feels like - {loc.current.feelslike_c})
        </p>
        <p className="text-lg">Partly Cloudy</p>
        <div className="flex flex-row items-center justify-center">
          <img
            src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-humidity-weather-justicon-lineal-color-justicon-1.png"
            className="w-8 h-8"
          />
          <p className="text-lg">
            Humidity: <span className="italic">{loc.current.humidity}</span>
          </p>
        </div>
        <p className="text-lg">
          AQI :{" "}
          <span className="italic">
            {parseInt(loc.current.air_quality.pm10)} (pm10)
          </span>
        </p>
        <div className="flex flex-row items-center justify-center">
          <img
            src="https://img.icons8.com/nolan/64/wind.png"
            className="h-8 w-8"
          />
          <p className="text-lg">{loc.current.wind_kph} kph </p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p className="text-white text-xl font-semibold font-serif">
          Error in getting the details. Please refresh the page or try again
          later..
        </p>
      </div>
    );
  }
}

export default WeathetCards;
