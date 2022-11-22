const Weather = ({
  weather: {
    name,
    main: { temp },
    wind: { speed },
    weather,
  },
}) => (
  <>
    <h2>Weather in {name}</h2>
    <p>temperature {temp}Celcius</p>
    <img
      src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
      alt={weather[0].description}
    />
    <p>wind {speed}m/s</p>
  </>
);

export default Weather;
