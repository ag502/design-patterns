import Command from "./InterfaceCommand";
import Light from "../Device/InterfaceLight";

class LigthOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute() {
    this.light.off();
  }

  undo() {
    this.light.on();
  }
}

export default LigthOffCommand;
