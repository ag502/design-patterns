import FlyBehavior from './Fly/FlyBehavior';
import QuackBehavior from './Quack/QuackBehavior';

abstract class Duck {
	protected abstract flyBehavior: FlyBehavior;
	protected abstract quackBehavior: QuackBehavior;

	performFly() {
		this.flyBehavior.fly();
	}

	performQuack() {
		this.quackBehavior.quack();
	}

	swim() {
		console.log('모든 오리는 뜹니다.');
	}

	abstract display(): void;
}

export default Duck;
