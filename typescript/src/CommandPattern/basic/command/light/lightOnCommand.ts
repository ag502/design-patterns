import Command from "../command";

import Light from "../../device/light";

class LightOnCommand implements Command {
    constructor(private light: Light) {}

    execute() {
        this.light.on();
    }

    undo() {
        this.light.off();
    }
}

export default LightOnCommand;
