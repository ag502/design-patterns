import Stereo from "../../device/stereo";
import Command from "../command";

class StereoOffWithCDCommand implements Command {
    constructor(private stereo: Stereo) {}

    execute() {
        this.stereo.off();
    }

    undo() {
        this.stereo.on();
        this.stereo.setCd();
        this.stereo.setVolume(11);
    }
}

export default StereoOffWithCDCommand;
