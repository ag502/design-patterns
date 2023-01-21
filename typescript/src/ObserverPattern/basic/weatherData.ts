import Subject from "./interface/subject";
import Observer from "./interface/observer";

class WeatherData implements Subject {
    private observers = new Set<Observer>();

    private temperature = -1;
    private humidity = -1;
    private pressure = -1;

    registerObserver(observer: Observer) {
        this.observers.add(observer);
    }

    removeObserver(observer: Observer) {
        this.observers.delete(observer);
    }

    notifyObservers() {
        this.observers.forEach((observer) => observer.update(this.temperature, this.pressure, this.humidity));
    }

    measurementsChanged() {
        this.notifyObservers();
    }

    setMeasurements(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;

        this.measurementsChanged();
    }
}

export default WeatherData;
