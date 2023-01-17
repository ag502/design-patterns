import QuackBehavior from "./quackBehavior";

class Squeak implements QuackBehavior {
    quack() {
        console.log("삑");
    }
}

export default Squeak;
