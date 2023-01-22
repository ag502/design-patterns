import Beverage from "./beverage";

class DarkRoast extends Beverage {
    constructor() {
        super();
        this.description = "다크 로스트";
    }

    cost() {
        return 0.99;
    }
}

export default DarkRoast;
