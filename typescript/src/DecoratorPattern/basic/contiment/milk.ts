import ContimentDecorator from "./contimentDecorator";
import Beverage from "../beverage/beverage";

class Milk extends ContimentDecorator {
    protected beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    get description() {
        return `${this.beverage.description} 밀크`;
    }

    cost() {
        return this.beverage.cost() + 0.1;
    }
}

export default Milk;
