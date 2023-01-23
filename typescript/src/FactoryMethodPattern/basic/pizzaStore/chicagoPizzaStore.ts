import PizzaStore from "./pizzaStore";

import ChicagoCheesePizza from "../pizza/chicagoStyle/chicagoStyleCheesePizza";

class ChicagoStore extends PizzaStore {
    protected createPizza(type: string) {
        if (type === "cheese") {
            return new ChicagoCheesePizza();
        }

        return null;
    }
}

export default ChicagoStore;
