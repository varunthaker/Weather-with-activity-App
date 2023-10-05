import "./weather.css";

interface WeatherProps {
  temperature: number | string;
  condition: string;
  weatherMood: boolean;
}

const Weather = ({ temperature, condition, weatherMood }: WeatherProps) => {
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
