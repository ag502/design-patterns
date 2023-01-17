import QuackBehavior from "./quackBehavior";

class MuteQuack implements QuackBehavior {
    quack() {
        console.log("<< 조용 ~ >>");
    }
}

export default MuteQuack;
