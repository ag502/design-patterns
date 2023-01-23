import Cheese from "../ingredient/cheese/cheese";
import Clams from "../ingredient/clams/clams";
import Dough from "../ingredient/dough/dough";
import Sauce from "../ingredient/sauce/sauce";
import Veggies from "../ingredient/veggies/veggies";

abstract class Pizza {
    private _name = "";

    protected dough: Dough | null = null;
    protected sauce: Sauce | null = null;
    protected clam: Clams | null = null;
    protected cheese: Cheese | null = null;
    protected veggies: Veggies[] = [];

    abstract prepare(): void;

    set name(name: string) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    bake() {
        console.log("175도에서 25분간 굽기");
    }

    cut() {
        console.log("피자를 사선으로 자르기");
    }

    box() {
        console.log("상자에 피자 담기");
    }
}

export default Pizza;
