/* eslint-disable react/prop-types */
import { Fragment } from "react";
export default function Form({ OnAddActvities }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formElement = event.target;
    const data = {
      name: formElement.activity_text.value,
      isForGoodWeather: formElement.isGoodWeather.checked,
    };
    OnAddActvities(data);

    event.target.reset();
    event.target.elements.activity_text.focus();
  }
  return (
    <Fragment>
      <h2>Activities</h2>
      <form onSubmit={() => handleSubmit(event)}>
        <label htmlFor="activity_text">Activity Name:</label>
        <br />
        <input id="activity_text" name="activity_text" type="text"></input>
        <br />
        <label htmlFor="isGoodWeather">Good weather activity:</label>
        <input name="isGoodWeather" id="isGoodWeather" type="checkbox"></input>
        <br />
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
}
