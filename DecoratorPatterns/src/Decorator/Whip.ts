import Beverage from '../Beverage';
import CondimentDecorator from './CondimentDecorator';

class Whip extends CondimentDecorator {
	protected beverage: Beverage;

	constructor(beverage: Beverage) {
		super();
		this.beverage = beverage;
	}

	get condimentDecorator() {
		return `${this.beverageDescription} 휘핑크림`;
	}

	cost() {
		return this.beverage.cost() + 0.1;
	}
}

export default Whip;
