import { useEffect, useState } from "react";
import axios from "axios";
import Find from "./components/Find";
import Result from "./components/Result";

const App = () => {
  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    if (Object.entries(country).length !== 0) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => {
          setWeather(response.data);
        });
    }
  }, [country]);

  const handleFind = (e) => {
    const foundCountries = data.filter((country) =>
      country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCountries(foundCountries);
    if (foundCountries.length === 1) {
      setCountry(foundCountries[0]);
    }
  };

  const handleClick = (countryObj) => {
    setCountry(countryObj);
  };

  return (
    <>
      <Find handleFind={handleFind} />
      <Result
        countries={countries}
        country={country}
        handleClick={handleClick}
        weather={weather}
      />
    </>
  );
};

export default App;
