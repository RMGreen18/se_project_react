import { useContext } from "react";
import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";

function WeatherCard({ weatherData }) {
  const currentTempUnit = useContext(CurrentTempUnitContext).currentTempUnit;
  const processedOption = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  const weatherOptionUrl = processedOption[0]?.url;
  const weatherOptionCondition = processedOption[0]?.condition;

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp[currentTempUnit]}&deg;{currentTempUnit}</p>
      <img src={weatherOptionUrl} alt={weatherOptionCondition} className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
