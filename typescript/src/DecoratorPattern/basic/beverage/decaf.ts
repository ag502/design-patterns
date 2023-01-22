import Beverage from "./beverage";

class Decaf extends Beverage {
    constructor() {
        super();
        this.description = "디카페인";
    }

    cost() {
        return 1.05;
    }
}

export default Decaf;
