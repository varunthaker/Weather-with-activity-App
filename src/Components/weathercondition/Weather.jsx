const Weather = ({ temperature, condition }) => {
  return (
    <div>
      {temperature}°C <span>{condition}</span>
    </div>
  );
};

export default Weather;
