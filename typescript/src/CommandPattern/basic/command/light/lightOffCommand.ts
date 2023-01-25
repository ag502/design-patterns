import Command from "../command";

import Light from "../../device/light";

class LightOffCommand implements Command {
    constructor(private light: Light) {}

    execute() {
        this.light.off();
    }

    undo() {
        this.light.on();
    }
}

export default LightOffCommand;
