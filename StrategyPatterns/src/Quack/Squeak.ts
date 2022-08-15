import QuackBehavior from './QuackBehavior';

class Squeak implements QuackBehavior {
	quack() {
		console.log('삑삑 웁니다.');
	}
}

export default Squeak;
