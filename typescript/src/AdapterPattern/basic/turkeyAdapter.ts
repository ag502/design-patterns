import Turkey from "./adaptee/turkey";
import Duck from "./target/duck";

class TurkeyAdapter implements Duck {
    constructor(private turkey: Turkey) {}

    quack() {
        this.turkey.gobble();
    }

    fly() {
        Array.from({ length: 5 }, () => {
            this.turkey.fly();
        });
    }
}

export default TurkeyAdapter;
