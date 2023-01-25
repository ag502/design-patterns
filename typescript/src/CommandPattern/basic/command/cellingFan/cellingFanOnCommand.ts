import Command from "../command";

import CellingFan from "../../device/ceilingFan";

class CellingFanOnCommand implements Command {
    constructor(private cellingFan: CellingFan) {}

    execute() {
        this.cellingFan.high();
    }

    undo() {
        this.cellingFan.off();
    }
}

export default CellingFanOnCommand;
