import Logging from "../interface/logging";
import LogDecorator from "./logDecorator";

class LowerCaseDecorator extends LogDecorator {
    constructor(logging: Logging) {
        super(logging);
    }

    log(msg: string) {
        const lowerCaseOutput = msg.toLowerCase();
        this.logging.log(lowerCaseOutput);
    }
}

export default LowerCaseDecorator;
