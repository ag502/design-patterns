import FlyBehavior from "../strategy/fly/flyBehavior";
import QuackBehavior from "../strategy/quack/quackBehavior";

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
        console.log("모든 오리는 물에 뜹니다. 가짜 오리도 뜨죠.");
    }

    setFlyBehavior(flyBehavior: FlyBehavior) {
        this.flyBehavior = flyBehavior;
    }

    setQuackBehavor(quackBehavor: QuackBehavior) {
        this.quackBehavior = quackBehavor;
    }

    abstract display(): void;
}

export default Duck;
