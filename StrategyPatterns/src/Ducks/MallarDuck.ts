import Duck from '../Duck';

import FlyWithWings from '../Fly/FlyWithWings';
import Quack from '../Quack/Quack';

class MallarDuck extends Duck {
	protected flyBehavior = new FlyWithWings();
	protected quackBehavior = new Quack();

	display() {
		console.log('저는 물 오리 입니다.');
	}
}

export default MallarDuck;
