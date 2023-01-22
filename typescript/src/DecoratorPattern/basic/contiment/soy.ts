import ContimentDecorator from "./contimentDecorator";
import Beverage from "../beverage/beverage";

class Soy extends ContimentDecorator {
    protected beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    get description() {
        return `${this.beverage.description} 두유`;
    }

    cost() {
        return this.beverage.cost() + 0.15;
    }
}

export default Soy;
