import Beverage from '../Beverage';

class Decaf extends Beverage {
	description = '디카페인';

	cost() {
		return 1.05;
	}
}

export default Decaf;
