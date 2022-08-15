import FlyBehavior from './FlyBehavior';

class FlyWithWings implements FlyBehavior {
	fly() {
		console.log('날개로 날 수 있습니다.');
	}
}

export default FlyWithWings;
