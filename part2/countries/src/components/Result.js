import Country from "./Country";

const Result = ({ countries }) => (
  <>
    {countries.length > 10 ? (
      <p>Too many matches, specfy another filter</p>
    ) : countries.length === 1 ? (
      <Country country={countries[0]} />
    ) : (
      countries.map((country) => (
        <div key={country.name.common}>{country.name.common}</div>
      ))
    )}
  </>
);

export default Result;
