import NYPizzaIngredientFactory from "../ingredientFactory/nyPizzaIngredientFactory";
import CheesePizza from "../pizza/cheesePizza";
import PizzaStore from "./pizzaStore";

class NYPizzaStore extends PizzaStore {
    private nyIngredientFactory = new NYPizzaIngredientFactory();

    createPizza(type: string) {
        if (type === "cheese") {
            const cheesePizza = new CheesePizza(this.nyIngredientFactory);
            cheesePizza.name = "뉴욕스타일 치즈 피자";
            return cheesePizza;
        }
        return null;
    }
}

export default NYPizzaStore;
