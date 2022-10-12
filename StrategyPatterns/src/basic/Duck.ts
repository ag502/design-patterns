import FlyBehavior from './strategy/Fly/FlyBehavior';
import QuackBehavior from './Quack/QuackBehavior';

abstract class Duck {
	protected abstract flyBehavior: FlyBehavior;
	protected abstract quackBehavior: QuackBehavior;

	set setFlyBehavior(fb: FlyBehavior) {
		this.flyBehavior = fb;
	}

	set setQuackBehavior(qb: QuackBehavior) {
		this.quackBehavior = qb;
	}

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
