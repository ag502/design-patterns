import ContimentDecorator from "./contimentDecorator";
import Beverage from "../beverage/beverage";

class Whip extends ContimentDecorator {
    protected beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    get description() {
        return `${this.beverage.description} 휘핑크림`;
    }

    cost() {
        return this.beverage.cost() + 0.1;
    }
}

export default Whip;
