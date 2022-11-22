import Country from "./Country";

const Result = ({ countries, country, weather, handleClick }) => (
  <>
    {countries.length > 10 ? (
      <p>Too many matches, specfy another filter</p>
    ) : countries.length === 1 ? (
      <Country country={countries[0]} weather={weather} />
    ) : (
      <>
        {countries.map((country) => {
          return (
            <div key={country.name.common}>
              {country.name.common}{" "}
              <button onClick={() => handleClick(country)}>show</button>
            </div>
          );
        })}
        {Object.entries(country).length !== 0 ? (
          <Country country={country} weather={weather} />
        ) : (
          ""
        )}
      </>
    )}
  </>
);

export default Result;
