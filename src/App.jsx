import "./App.css";
import { useEffect, useState } from "react";
import Form from "./Components/form/Form";
import { uid } from "uid";
import List from "./Components/list/List";
import useLocalStorage from "use-local-storage";
import Weather from "./Components/weathercondition/Weather";

function App() {
  const [activities, setActivities] = useLocalStorage("activities", []);
  const [weather, setWeather] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const apiURL = "https://example-apis.vercel.app/api/weather";

  async function fetchWeatherData() {
    const response = await fetch(apiURL);
    const data = await response.json();
    setWeatherData(data);
    setWeather(data.isGoodWeather);
  }

  useEffect(() => {
    fetchWeatherData();
    const intervalId = setTimeout(fetchWeatherData, 2000);
    () => {
      setInterval(intervalId);
    };
  });

  const goodWeatherList = activities.filter(
    (activity) => activity.isForGoodWeather === weather
  );

  function handleAddActivities(activity) {
    setActivities([...activities, { ...activity, id: uid() }]);
  }

  function handleDeleteActivities(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  return (
    <>
      <Weather
        temperature={weatherData.temperature}
        condition={weatherData.condition}
      />
      <List
        activities={goodWeatherList}
        isGoodWeather={weather}
        onDelete={handleDeleteActivities}
      />
      <Form OnAddActvities={handleAddActivities} />
    </>
  );
}

export default App;
