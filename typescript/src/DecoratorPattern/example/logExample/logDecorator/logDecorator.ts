import Logging from "../interface/logging";

abstract class LogDecorator implements Logging {
    constructor(public logging: Logging) {}

    abstract log(msg: string): void;
}

export default LogDecorator;
