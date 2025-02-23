import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const processedOption = weatherOptions.filter((option) => {
    console.log(option.day, weatherData.isDay, option.condition, weatherData.condition);
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  const weatherOptionUrl = processedOption[0]?.url;
  const weatherOptionCondition = processedOption[0]?.condition;

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F}&deg;F</p>
      <img src={weatherOptionUrl} alt={weatherOptionCondition} className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
