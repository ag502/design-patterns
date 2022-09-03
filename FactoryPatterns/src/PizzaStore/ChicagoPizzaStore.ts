import PizzaStore from "./AbstractPizzaStore";
import Pizza from "../Pizza/InterfacePizza";

import ChicagoStyleCheesePizza from "../Pizza/ChicagoStyleCheesePizza";

class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza | null {
    if (type === "chees") {
      return new ChicagoStyleCheesePizza();
    }
    return null;
  }
}

export default ChicagoPizzaStore;
