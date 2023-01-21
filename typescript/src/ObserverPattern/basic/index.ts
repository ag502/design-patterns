import WeatherData from "./weatherData";

import CurrentConditionDisplay from "./display/currentConditionDisplay";
import StatisticsDisplay from "./display/statisticsDisplay";

const weatherData = new WeatherData();

const currentConditionDisplay = new CurrentConditionDisplay(weatherData);
const statisticsDisplay = new StatisticsDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);
console.log("~~~~~~~~~~~~~~");
weatherData.setMeasurements(82, 70, 29.2);
console.log("~~~~~~~~~~~~~~");
weatherData.setMeasurements(-45, 70, 29.2);
