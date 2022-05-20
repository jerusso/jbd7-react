import { useEffect, useState, Fragment} from "react";

const ICONS_DATA = [
  { number: "01d", name: "/weatherIcons/clear-day.svg" },
  { number: "01n", name: "/weatherIcons/clear-night.svg" },
  { number: "02d", name: "/weatherIcons/partly-cloudy-day.svg" },
  { number: "02n", name: "/weatherIcons/partly-cloudy-night.svg" },
  { number: "03d", name: "/weatherIcons/clouds.svg" },
  { number: "03n", name: "/weatherIcons/clouds.svg" },
  { number: "04d", name: "/weatherIcons/partly-cloudy-day.svg" },
  { number: "04n", name: "/weatherIcons/partly-cloudy-night.svg" },
  { number: "09d", name: "/weatherIcons/rainy-day.svg" },
  { number: "09n", name: "/weatherIcons/rainy-night.svg" },
  { number: "10d", name: "/weatherIcons/rainy-day.svg" },
  { number: "10n", name: "/weatherIcons/rainy-night.svg" },
  { number: "11d", name: "/weatherIcons/thunderstorm-day.svg" },
  { number: "11n", name: "/weatherIcons/thunderstorm-night.svg" },
  { number: "13n", name: "/weatherIcons/snow.svg" },
  { number: "13d", name: "/weatherIcons/snow.svg" },
  { number: "50d", name: "/weatherIcons/mist.svg" },
  { number: "50n", name: "/weatherIcons/mist.svg" },
];


const Weather = () => {
    const [weatherInfo, setWeatherInfo] = useState('');
    const [error,setError] = useState(null);

    async function fetchWeather() {
      setError(null)
      try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?id=1111111&appid=1111111111111111111111111&units=imperial");
        const data = await response.json();

        if(!response.ok) {
          throw new Error('Error getting weather');
        }

        const weatherData = {
          message: data.weather[0].main,
          temp: Math.round(data.main.temp),
          icon: ICONS_DATA.find((el) => el.number === data.weather[0].icon).name,
        };

        setWeatherInfo(weatherData);

      } catch(error) {
        setError(error.message);
      }

    };

    useEffect(() => {
      fetchWeather();
    }, []);

    return (
      <Fragment>
        {!error && (
          <div className="weather-wrapper gray-80 body-sm">
            <p className="weather-title">Current weather in Portland, OR</p>
            <div>
              <div className="weather-icon-wrapper d-inline-block">
                <img src={weatherInfo.icon} alt="weather icon" />
              </div>
              <p>
                {weatherInfo.message}. {weatherInfo.temp}ºF
              </p>
            </div>
          </div>
        )}
      </Fragment>
    );
}

export default Weather;
