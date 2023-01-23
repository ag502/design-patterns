import Pizza from "../pizza/pizza";

abstract class PizzaStore {
    orderPizza(type: string): Pizza | null {
        const curPizza = this.createPizza(type);

        if (!curPizza) {
            console.log("존재하지 않는 메뉴입니다");
            return curPizza;
        }

        curPizza.prepare();
        curPizza.bake();
        curPizza.cut();
        curPizza.box();

        return curPizza;
    }

    protected abstract createPizza(type: string): Pizza | null;
}

export default PizzaStore;
