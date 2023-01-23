import PizzaStore from "./pizzaStore";

import NYStyleCheesePizza from "../pizza/nyStyle/nyStyleCheesePizza";

class NYPizzaStore extends PizzaStore {
    protected createPizza(type: string) {
        if (type === "cheese") {
            return new NYStyleCheesePizza();
        }
        return null;
    }
}

export default NYPizzaStore;
