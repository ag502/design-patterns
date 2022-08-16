import Beverage from '../Beverage';

class HouseBlend extends Beverage {
	description = '하우스 블렌드 커피';

	cost() {
		return 0.89;
	}
}

export default HouseBlend;
