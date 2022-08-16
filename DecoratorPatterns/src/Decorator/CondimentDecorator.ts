import Beverage from '../Beverage';

abstract class CondimentDecorator extends Beverage {
	protected abstract beverage: Beverage;

	abstract get condimentDecorator(): string;
}

export default CondimentDecorator;
