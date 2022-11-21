import { useEffect, useState } from "react";
import axios from "axios";
import Find from "./components/Find";
import Result from "./components/Result";

const App = () => {
  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setData(response.data);
    });
  }, []);

  const handleFind = (e) => {
    const foundCountries = data.filter((country) =>
      country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCountries(foundCountries);
  };

  return (
    <>
      <Find handleFind={handleFind} />
      <Result countries={countries} />
    </>
  );
};

export default App;
