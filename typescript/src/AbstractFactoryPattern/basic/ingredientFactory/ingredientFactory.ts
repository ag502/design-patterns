import Cheese from "../ingredient/cheese/cheese";
import Clams from "../ingredient/clams/clams";
import Dough from "../ingredient/dough/dough";
import Sauce from "../ingredient/sauce/sauce";
import Veggies from "../ingredient/veggies/veggies";

interface IngredientFactory {
    createDough(): Dough;
    createSauce(): Sauce;
    createCheese(): Cheese;
    createVeggies(): Veggies[];
    createClams(): Clams;
}

export default IngredientFactory;
