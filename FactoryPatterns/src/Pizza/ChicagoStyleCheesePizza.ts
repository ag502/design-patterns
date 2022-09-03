import Pizza from "./InterfacePizza";

class ChicagoPizzaStore extends Pizza {
  protected name = "시카고 스타일 딥 디쉬 치즈 피자";
  protected dough = "아주 두꺼운 크러스트 도우";
  protected sauce = "플럼토마토 소스";

  constructor() {
    super();
    this.toppings.push("잘게 조각낸 모짜렐라 치즈");
  }

  cut() {
    console.log("네모난 모양으로 피자 자르기");
  }
}

export default ChicagoPizzaStore;
