import Pizza from "./pizza";
import IngredientFactory from "../ingredientFactory/ingredientFactory";

class CheesePizza extends Pizza {
    constructor(private ingredient: IngredientFactory) {
        super();
    }

    prepare() {
        console.log(`준비 중: ${this.name}`);
        this.dough = this.ingredient.createDough();
        this.sauce = this.ingredient.createSauce();
        this.cheese = this.ingredient.createCheese();
        this.clam = this.ingredient.createClams();
    }
}

export default CheesePizza;
