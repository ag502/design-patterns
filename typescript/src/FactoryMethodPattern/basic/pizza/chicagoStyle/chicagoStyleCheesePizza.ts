import Pizza from "../pizza";

class ChicagoCheesePizza extends Pizza {
    protected name: string;
    protected dough: string;
    protected sauce: string;

    constructor() {
        super();
        this.name = "시키고 스타일 딥 디쉬 치즈 피자";
        this.dough = "아주 두꺼운 크러스트 도우";
        this.sauce = "플럼 토마토 소스";

        this.toppings.push("잘게 조각낸 모짜렐라 치즈");
    }

    cut() {
        console.log("네모난 모양으로 피자 자르기");
    }
}

export default ChicagoCheesePizza;
