import LogDecorator from "./logDecorator";
import Logging from "../interface/logging";

class AddWaveDecorator extends LogDecorator {
    constructor(logging: Logging) {
        super(logging);
    }

    log(msg: string) {
        const wavedOutput = `~~~~~~ ${msg} ~~~~~~`;
        this.logging.log(wavedOutput);
    }
}

export default AddWaveDecorator;
