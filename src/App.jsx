import "./App.css";
import { useState } from "react";
import Form from "./Components/form/Form";
import { uid } from "uid";
import List from "./Components/list/List";
import useLocalStorage from "use-local-storage";

function App() {
  const [activities, setActivities] = useLocalStorage("activities", []);
  const [isGoodWeather, setIsGoodWeather] = useState(true);

  const goodWeatherList = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  function handleAddActivities(activity) {
    setActivities([...activities, { ...activity, id: uid() }]);
  }

  return (
    <>
      <List activities={goodWeatherList} isGoodWeather={isGoodWeather} />
      <Form OnAddActvities={handleAddActivities} />
    </>
  );
}

export default App;
