import Observer from "../interface/observer";
import DisplayElement from "./displayElement";

import WeatherData from "../weatherData";

class CurrentConditionDisplay implements Observer, DisplayElement {
    private temperature = -1;
    private humidity = -1;

    constructor(private weatherData: WeatherData) {
        this.weatherData.registerObserver(this);
    }

    update(temperature: number, _: number, humidity: number) {
        this.temperature = temperature;
        this.humidity = humidity;

        this.display();
    }

    display() {
        console.log(`현재 상태: 온도 ${this.temperature}F, 습도: ${this.humidity}%`);
    }
}

export default CurrentConditionDisplay;
