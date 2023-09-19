import { Fragment } from "react";
import "./list.css";

const List = ({ activities, isGoodWeather, onDelete }) => {
  const goodWeatherString =
    "The Weather is Awesome 🕶️ ! Go outside and 🚵 ⚽: ";
  const badWeatherString =
    "Bad Weather outside 👎 ! Here's what you can do now: 📖 🎥";

  return (
    <Fragment>
      {isGoodWeather ? (
        <h3>{goodWeatherString}</h3>
      ) : (
        <h3>{badWeatherString}</h3>
      )}
      <div>
        <ul>
          {activities?.map((activity) => (
            <div key={activity.id}>
              <li>
                {activity.name}
                <button
                  className="delete"
                  type="submit"
                  onClick={() => onDelete(activity.id)}
                >
                  ❌
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default List;
