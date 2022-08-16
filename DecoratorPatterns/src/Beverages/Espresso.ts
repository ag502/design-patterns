import Beverage from '../Beverage';

class Espresso extends Beverage {
	description = '에스프레소';

	cost() {
		return 1.99;
	}
}

export default Espresso;
