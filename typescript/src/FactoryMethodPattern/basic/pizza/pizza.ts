abstract class Pizza {
    protected abstract name: string;
    protected abstract dough: string;
    protected abstract sauce: string;

    protected toppings: string[] = [];

    prepare() {
        console.log(`준비 중: ${this.name}`);
        console.log("도우를 돌리는 중...");
        console.log("소스를 뿌리는 중...");

        const curToppings = this.toppings.map((topping) => topping).join(" ");
        console.log(`토핑을 올리는 중: ${curToppings}`);
    }

    bake() {
        console.log("175도에서 25분 간 굽기");
    }

    cut() {
        console.log("피자를 사선으로 자르기");
    }

    box() {
        console.log("상자에 피자 담기");
    }
}

export default Pizza;
