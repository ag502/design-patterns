import Pizza from "../pizza/pizza";

abstract class PizzaStore {
    orderPizza(type: string) {
        const curPizza = this.createPizza(type);

        if (!curPizza) {
            console.log("존재하지 않는 메뉴입니다");
            return null;
        }

        curPizza.prepare();
        curPizza.bake();
        curPizza.cut();
        curPizza.box();

        return curPizza;
    }

    abstract createPizza(type: string): Pizza | null;
}

export default PizzaStore;
