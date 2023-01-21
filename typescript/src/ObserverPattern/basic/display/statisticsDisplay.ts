import Observer from "../interface/observer";
import WeatherData from "../weatherData";
import DisplayElement from "./displayElement";

class StatisticsDisplay implements Observer, DisplayElement {
    private maxTemp = 0.0;
    private minTemp = 0.0;

    constructor(private weatherData: WeatherData) {
        this.weatherData.registerObserver(this);
    }

    update(temperature: number, pressure: number, humidity: number) {
        if (temperature > this.maxTemp) {
            this.maxTemp = temperature;
        }

        if (temperature < this.minTemp) {
            this.minTemp = temperature;
        }

        this.display();
    }

    display() {
        console.log(`최고/최저 온도 = ${this.maxTemp}/${this.minTemp}`);
    }
}

export default StatisticsDisplay;
