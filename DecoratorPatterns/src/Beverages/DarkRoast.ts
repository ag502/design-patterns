import Beverage from '../Beverage';

class DarkRoast extends Beverage {
	description = '다크 로스트';

	cost() {
		return 0.99;
	}
}

export default DarkRoast;
