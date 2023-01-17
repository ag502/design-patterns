import MallardDuck from "./duck/mallardDuck";
import RubberDuck from "./duck/rubberDuck";

const mallardDuck = new MallardDuck();
const rubberDuck = new RubberDuck();

mallardDuck.display();
mallardDuck.swim();
mallardDuck.performFly();
mallardDuck.performQuack();

console.log("~~~~~~~~~~~~~~~");

rubberDuck.display();
rubberDuck.swim();
rubberDuck.performFly();
rubberDuck.performQuack();
