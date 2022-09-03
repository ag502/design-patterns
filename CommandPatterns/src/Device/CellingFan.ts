import Fan from "./InterfaceFan";

export enum FanSpeed {
  HIGH = 3,
  MEDIUM = 2,
  LOW = 1,
  OFF = 0,
}

class CellingFan implements Fan {
  private speed = FanSpeed.OFF;

  get fanSpeed() {
    return this.speed;
  }

  high() {
    this.speed = FanSpeed.HIGH;
  }

  medium() {
    this.speed = FanSpeed.MEDIUM;
  }

  low() {
    this.speed = FanSpeed.LOW;
  }

  off() {
    this.speed = FanSpeed.OFF;
  }
}

export default CellingFan;
