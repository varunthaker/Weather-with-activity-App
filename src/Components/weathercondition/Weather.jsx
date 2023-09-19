import "./weather.css";
const Weather = ({ temperature, condition, weatherMood }) => {
  const weatherMoodClass = weatherMood ? "weather-good" : "weather-bad";

  return (
    <div className={`weather ${weatherMoodClass}`}>
      <div className="weather-content">
        {temperature === "Loading..." ? temperature : `${temperature}°C`}
      </div>
      <div className="weather-content">{condition}</div>
    </div>
  );
};

export default Weather;
