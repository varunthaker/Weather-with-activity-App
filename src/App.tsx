import "./App.css";
import { useEffect, useState } from "react";
import Form from "./Components/form/Form";
import { uid } from "uid";
import List from "./Components/list/List";
import useLocalStorage from "use-local-storage";
import Weather from "./Components/weathercondition/Weather";
import { WeatherData } from "./types";
import { Activity } from "./types";

function App() {
  const [activities, setActivities] = useLocalStorage<Activity[]>(
    "activities",
    []
  );
  const [weather, setWeather] = useState<boolean>();
  const [weatherData, setWeatherData] = useState<WeatherData>({
    location: "",
    temperature: "Loading...",
    condition: "⏳",
    isGoodWeather: true,
  });

  const apiURL = "https://example-apis.vercel.app/api/weather";

  async function fetchWeatherData() {
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      setWeatherData(data);
      setWeather(data.isGoodWeather);
    } catch (error) {
      console.log("error");
    }
  }

  useEffect(() => {
    const intervalId = setInterval(fetchWeatherData, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const goodWeatherList = activities.filter(
    (activity) => activity.isForGoodWeather === weather
  );

  function handleAddActivities(activity: Activity) {
    setActivities([...activities, { ...activity }]);
  }

  function handleDeleteActivities(id: string) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  return (
    <>
      <header>
        <Weather
          temperature={weatherData.temperature}
          condition={weatherData.condition}
          weatherMood={weatherData.isGoodWeather}
        />
      </header>
      <List
        activities={goodWeatherList}
        isGoodWeather={weather}
        onDelete={handleDeleteActivities}
      />
      <Form onAddActivities={handleAddActivities} />
    </>
  );
}

export default App;
