import { Fragment } from "react";

const List = ({ activities, isGoodWeather }) => {
  const goodWeatherString = "The Weather is Awesome! Go outside and:";
  const badWeatherString = "Bad Weather outside! Here's what you can do now:";

  return (
    <Fragment>
      {isGoodWeather ? (
        <h2>{goodWeatherString}</h2>
      ) : (
        <h2>{badWeatherString}</h2>
      )}
      <ul>
        {activities?.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default List;
