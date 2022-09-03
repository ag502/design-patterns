import PizzaStore from "./AbstractPizzaStore";
import Pizza from "../Pizza/InterfacePizza";

import NYStyleCheesePizza from "../Pizza/NYStyleCheesePizza";

class NYPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza | null {
    if (type === "cheese") {
      return new NYStyleCheesePizza();
    }
    return null;
  }
}

export default NYPizzaStore;
