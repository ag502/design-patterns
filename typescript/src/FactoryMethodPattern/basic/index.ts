import NYPizzaStore from "./pizzaStore/nyPizzaStore";
import ChicagoStore from "./pizzaStore/chicagoPizzaStore";

const nyPizzaStore = new NYPizzaStore();
const chicagoPizzaStore = new ChicagoStore();

nyPizzaStore.orderPizza("cheese");

console.log("~~~~~~~~~~");

chicagoPizzaStore.orderPizza("cheese");
