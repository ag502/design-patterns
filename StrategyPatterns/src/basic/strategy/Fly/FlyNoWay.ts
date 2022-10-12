import FlyBehavior from './FlyBehavior';

class FlyNoWay implements FlyBehavior {
	fly() {
		console.log('날 수 없습니다.');
	}
}

export default FlyNoWay;
