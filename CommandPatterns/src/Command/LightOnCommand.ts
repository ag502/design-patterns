import Command from "./InterfaceCommand";

import Light from "../Device/InterfaceLight";

class LightOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute() {
    this.light.on();
  }
}

export default LightOnCommand;
