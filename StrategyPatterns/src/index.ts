import MallarDuck from './Ducks/MallarDuck';
import ModelDuck from './Ducks/ModelDuck';

import FlyRocketPowered from './Fly/FlyRocketPowered';

const mallarDuck = new MallarDuck();
mallarDuck.performQuack();
mallarDuck.performFly();

const modelDuck = new ModelDuck();
modelDuck.performFly();
modelDuck.setFlyBehavior = new FlyRocketPowered();
modelDuck.performFly();
