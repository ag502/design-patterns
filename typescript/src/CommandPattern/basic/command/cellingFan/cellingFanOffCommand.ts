import Command from "../command";

import CellingFan from "../../device/ceilingFan";

class CellingFanOffCommand implements Command {
    private prevSpeed = 0;

    constructor(private cellingFan: CellingFan) {}

    execute() {
        this.prevSpeed = this.cellingFan.speed;
        this.cellingFan.off();
    }

    undo() {
        this.cellingFan.high();
    }
}

export default CellingFanOffCommand;
