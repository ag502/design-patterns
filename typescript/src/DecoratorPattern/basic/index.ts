import DarkRoast from "./beverage/darkRoast";
import Espresso from "./beverage/espresso";
import HouseBlend from "./beverage/houseBlend";

import Mocha from "./contiment/mocha";
import Soy from "./contiment/soy";
import Whip from "./contiment/whip";

const beverage1 = new Espresso();

console.log(`${beverage1.description} $${beverage1.cost()}`);

let beverage2 = new DarkRoast();
beverage2 = new Mocha(beverage2);
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);

console.log(`${beverage2.description} $${beverage2.cost()}`);

let beverage3 = new HouseBlend();
beverage3 = new Soy(beverage3);
beverage3 = new Mocha(beverage3);
beverage3 = new Whip(beverage3);

console.log(`${beverage3.description} $${beverage3.cost()}`);
