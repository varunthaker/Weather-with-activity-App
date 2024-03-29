/* eslint-disable react/prop-types */
import { FormEvent } from "react";
import { Activity } from "../../types";
import { WeatherData } from "../../types";

interface FormProps {
  onAddActivities: (activitity: Activity) => void;
}

import "./form.css";
import { uid } from "uid";
export default function Form({ onAddActivities }: FormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const data: Activity = {
      name: formElement.activity_text.value,
      isForGoodWeather: formElement.isGoodWeather.checked,
      id: uid(),
    };
    onAddActivities(data);
    formElement.reset();
  }
  return (
    <div className="form-component">
      <h2>Activities</h2>
      <form className="form" onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="activity_text">Activity Name:</label>
        <input id="activity_text" name="activity_text" type="text"></input>
        <label htmlFor="isGoodWeather">Good weather activity:</label>
        <input name="isGoodWeather" id="isGoodWeather" type="checkbox"></input>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
