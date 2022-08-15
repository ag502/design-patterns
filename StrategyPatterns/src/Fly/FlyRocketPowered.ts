import FlyBehavior from './FlyBehavior';

class FlyRocketPowered implements FlyBehavior {
	fly() {
		console.log('로켓 추진으로 날아갑니다.');
	}
}

export default FlyRocketPowered;
