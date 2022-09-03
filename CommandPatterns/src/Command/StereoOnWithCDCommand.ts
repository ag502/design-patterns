import Command from "./InterfaceCommand";
import Stereo from "../Device/InterfaceStereo";

class StereoOnWithCDCommand implements Command {
  private stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  execute() {
    this.stereo.on();
    this.stereo.setCd("깊은 밤을 날아서");
    this.stereo.setVolume(11);
  }

  undo() {
    this.stereo.off();
  }
}

export default StereoOnWithCDCommand;
