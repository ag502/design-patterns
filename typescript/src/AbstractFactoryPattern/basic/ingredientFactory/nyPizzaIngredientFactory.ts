import IngredientFactory from "./ingredientFactory";

import ThinCrustDough from "../ingredient/dough/thinCrustDough";
import MarinaraSuace from "../ingredient/sauce/marinaraSauce";
import Garlic from "../ingredient/veggies/garlic";
import Onion from "../ingredient/veggies/onion";
import Mushroom from "../ingredient/veggies/mushroom";
import RedPepper from "../ingredient/veggies/redPepper";
import FreshClams from "../ingredient/clams/freshClams";
import ReggianoCheese from "../ingredient/cheese/reggianoCheese";

class NYPizzaIngredientFactory implements IngredientFactory {
    createDough() {
        return new ThinCrustDough();
    }

    createSauce() {
        return new MarinaraSuace();
    }

    createCheese() {
        return new ReggianoCheese();
    }

    createVeggies() {
        return [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
    }

    createClams() {
        return new FreshClams();
    }
}

export default NYPizzaIngredientFactory;
