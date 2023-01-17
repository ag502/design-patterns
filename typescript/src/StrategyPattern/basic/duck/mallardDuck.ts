import Duck from "./duck";

import FlyWithWings from "../strategy/fly/flyWithWings";

import Quack from "../strategy/quack/quack";

class MallardDuck extends Duck {
    protected flyBehavior = new FlyWithWings();
    protected quackBehavior = new Quack();

    display() {
        console.log("저는 물 오리 입니다.");
    }
}

export default MallardDuck;
