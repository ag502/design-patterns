import IngredientFactory from "./ingredientFactory";

import ThickCrustDough from "../ingredient/dough/thickCrustDough";
import PlumTomatoSauce from "../ingredient/sauce/plumTomatoSauce";
import MozzarellaCheese from "../ingredient/cheese/mozzarellaCheese";
import Garlic from "../ingredient/veggies/garlic";
import Onion from "../ingredient/veggies/onion";
import FrozenClams from "../ingredient/clams/frozenClams";

class ChicagoPizzaIngredientFactory implements IngredientFactory {
    createDough() {
        return new ThickCrustDough();
    }

    createSauce() {
        return new PlumTomatoSauce();
    }

    createCheese() {
        return new MozzarellaCheese();
    }

    createVeggies() {
        return [new Garlic(), new Onion()];
    }

    createClams() {
        return new FrozenClams();
    }
}

export default ChicagoPizzaIngredientFactory;
