import Command from "./InterfaceCommand";

import Fan from "../Device/InterfaceFan";
import { FanSpeed } from "../Device/CellingFan";

class CellingFanHighCommand implements Command {
  private cellingFan: Fan;
  prevSpeed: number;

  constructor(cellingFan: Fan) {
    this.cellingFan = cellingFan;
  }

  execute() {
    this.prevSpeed = this.cellingFan.fanSpeed;
    this.cellingFan.high();
  }

  undo() {
    if (this.prevSpeed === FanSpeed.HIGH) {
      this.cellingFan.high();
    } else if (this.prevSpeed === FanSpeed.MEDIUM) {
      this.cellingFan.medium();
    } else if (this.prevSpeed === FanSpeed.LOW) {
      this.cellingFan.low();
    } else if (this.prevSpeed === FanSpeed.OFF) {
      this.cellingFan.off();
    }
  }
}

export default CellingFanHighCommand;
