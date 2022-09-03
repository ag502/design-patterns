import DarkRoast from './Beverages/DarkRoast';
import Espresso from './Beverages/Espresso';
import Mocha from './Decorator/Mocha';
import Whip from './Decorator/Whip';

const espresso = new Espresso();
console.log(`${espresso.beverageDescription} $ ${espresso.cost()}`);

const darkRoast = new DarkRoast();
const darkRoastWithMocha = new Mocha(darkRoast);
const darkRoastWithDoubleMocha = new Mocha(darkRoastWithMocha);
const darkRoastWithDoubleMochaWithWhip = new Whip(darkRoastWithDoubleMocha);

console.log(`${darkRoastWithDoubleMochaWithWhip.beverageDescription} $ ${darkRoastWithDoubleMochaWithWhip.cost()}`);
