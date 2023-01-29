import Duck from "./duck";

class MallardDuck implements Duck {
    quack() {
        console.log("꽥");
    }

    fly() {
        console.log("날고 있어요!!");
    }
}

export default MallardDuck;
