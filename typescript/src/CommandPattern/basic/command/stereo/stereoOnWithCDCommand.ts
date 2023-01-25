import Command from "../command";

import Stereo from "../../device/stereo";

class StereoOnWithCDCommand implements Command {
    constructor(private stereo: Stereo) {}

    execute() {
        this.stereo.on();
        this.stereo.setCd();
        this.stereo.setVolume(11);
    }

    undo() {
        this.stereo.off();
    }
}

export default StereoOnWithCDCommand;
