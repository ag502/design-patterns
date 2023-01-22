import Beverage from "../beverage/beverage";

abstract class ContimentDecorator extends Beverage {
    protected abstract beverage: Beverage;

    abstract get description(): string;
}

export default ContimentDecorator;
