import MallardDuck from "./target/mallardDuck";
import WildTurkey from "./adaptee/wildTurkey";

import TurkeyAdapter from "./turkeyAdapter";

const mallardDuck = new MallardDuck();

const wildTurkey = new WildTurkey();

const turkeyAdapter = new TurkeyAdapter(wildTurkey);

console.log("칠면조가 말하길");
wildTurkey.gobble();
wildTurkey.fly();

console.log("~~~~~~~~~~~");

console.log("오리가 말하길");
mallardDuck.quack();
mallardDuck.fly();

console.log("~~~~~~~~~~~");

console.log("칠면조 어댑터가 말하길");
turkeyAdapter.quack();
turkeyAdapter.fly();
