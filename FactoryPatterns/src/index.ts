import NYPizzaStore from "./PizzaStore/NYPizzaStore";
import ChicagoPizzaStore from "./PizzaStore/ChicagoPizzaStore";

const nyStore = new NYPizzaStore();
const chicagoStore = new ChicagoPizzaStore();

let pizza = nyStore.orderPizza("cheese");
console.log(`에단이 주문한 ${pizza.pizzaName}`);

pizza = chicagoStore.orderPizza("cheese");
console.log(`조엘이 주문한 ${pizza.pizzaName}`);
