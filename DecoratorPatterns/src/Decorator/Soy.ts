import Beverage from '../Beverage';
import CondimentDecorator from './CondimentDecorator';

class Soy extends CondimentDecorator {
	protected beverage: Beverage;

	constructor(beverage: Beverage) {
		super();
		this.beverage = beverage;
	}

	get condimentDecorator() {
		return `${this.beverage.description} 두유`;
	}

	cost() {
		return this.beverage.cost() + 0.15;
	}
}

export default Soy;
