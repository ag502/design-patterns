import ContimentDecorator from "./contimentDecorator";
import Beverage from "../beverage/beverage";

class Mocha extends ContimentDecorator {
    protected beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    get description() {
        return `${this.beverage.description} 모카`;
    }

    cost() {
        return this.beverage.cost() + 0.2;
    }
}

export default Mocha;
