import Pizza from "./InterfacePizza";

class NYPizzaStore extends Pizza {
  protected name = "뉴욕 스타일 소스와 치즈 피자";
  protected dough = "씬 크러스트 도우";
  protected sauce = "마리나라 소스";

  constructor() {
    super();
    this.toppings.push("잘게 썬 레지아노 치즈");
  }
}

export default NYPizzaStore;
