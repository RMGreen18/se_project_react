export const getWeather = ({ lat, lon }, apiKey) => {
  return fetch(
    ` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`,
    { method: "GET" }
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const processWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = {
    F: Math.round(data.main.temp),
    C: Math.round(((data.main.temp - 32) * 5) / 9),
  };
  result.type = getWeatherType(data.main.temp.F);
  result.condition = data.weather[0].main.toLowerCase();
  result.isDay = isDay(data.dt, data.sys);
  return result;
};

const isDay = (currentTime, { sunrise, sunset }) => {
  return currentTime >= sunrise && currentTime <= sunset;
};

const getWeatherType = (temp) => {
  if (temp >= 86) {
    return "hot";
  } else if (temp >= 66 && temp < 86) {
    return "warm";
  } else {
    return "cold";
  }
};
