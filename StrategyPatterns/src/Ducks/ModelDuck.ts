import Duck from '../Duck';

import FlyNoWay from '../Fly/FlyNoWay';
import Quack from '../Quack/Quack';

class ModelDuck extends Duck {
	protected flyBehavior = new FlyNoWay();
	protected quackBehavior = new Quack();

	display() {
		console.log('저는 모형 오리입니다.');
	}
}

export default ModelDuck;
