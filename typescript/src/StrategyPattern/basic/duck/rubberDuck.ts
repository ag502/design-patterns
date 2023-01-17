import Duck from "./duck";

import FlyNoWay from "../strategy/fly/flyNoWay";
import Squeak from "../strategy/quack/squeak";

class RubberDuck extends Duck {
    protected flyBehavior = new FlyNoWay();
    protected quackBehavior = new Squeak();

    display() {
        console.log("저는 고무 오리 입니다.");
    }
}

export default RubberDuck;
