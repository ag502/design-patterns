import Fan from "./InterfaceFan";

class CellingFan implements Fan {
  static readonly HIGH = 3;
  static readonly MEDIUM = 2;
  static readonly LOW = 1;
  static readonly OFF = 0;

  private speed = CellingFan.OFF;

  get fanSpeed() {
    return this.speed;
  }

  high() {
    this.speed = CellingFan.HIGH;
  }

  medium() {
    this.speed = CellingFan.MEDIUM;
  }

  low() {
    this.speed = CellingFan.LOW;
  }

  off() {
    this.speed = CellingFan.OFF;
  }
}

export default CellingFan;
