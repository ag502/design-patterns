import Logging from "./interface/logging";

class NormalLogging implements Logging {
    log(msg: string) {
        console.log(msg);
    }
}

export default NormalLogging;
