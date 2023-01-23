import Pizza from "./pizza";
import IngredientFactory from "../ingredientFactory/ingredientFactory";

class CheesePizza extends Pizza {
    constructor(private ingredientFactory: IngredientFactory) {
        super();
    }

    prepare() {
        console.log(`준비 중: ${this.name}`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
    }
}

export default CheesePizza;
