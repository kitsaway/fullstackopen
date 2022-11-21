const Country = ({
  country: {
    name: { common },
    capital,
    area,
    languages,
    flags: { png },
  },
}) => (
  <>
    <h1>{common}</h1>
    <div>
      capital{" "}
      {capital.map((city) => (
        <span key={city}>{city}</span>
      ))}
    </div>
    <div>area {area}</div>
    <h4>Languages:</h4>
    <ul>
      {Object.values(languages).map((lang) => (
        <li key={lang}>{lang}</li>
      ))}
    </ul>
    <img src={png} alt={`${common}'s flag`} width="250" height="200" />
  </>
);

export default Country;
