import QuackBehavior from './QuackBehavior';

class MuteQuack implements QuackBehavior {
	quack() {
		console.log('울지 못 합니다.');
	}
}

export default MuteQuack;
