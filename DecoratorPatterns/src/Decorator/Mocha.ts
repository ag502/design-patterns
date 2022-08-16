import Beverage from '../Beverage';
import CondimentDecorator from './CondimentDecorator';

class Mocha extends CondimentDecorator {
	protected beverage: Beverage;

	constructor(beverage: Beverage) {
		super();
		this.beverage = beverage;
	}

	get condimentDecorator() {
		return `${this.beverage.beverageDescription} 모카`;
	}

	cost() {
		return this.beverage.cost() + 0.2;
	}
}

export default Mocha;
