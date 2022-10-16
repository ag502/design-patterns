import CaffeineBeverage from "./CaffeineBeverage";

class Tea extends CaffeineBeverage {
  brew() {
    console.log("찻잎을 우려내는 중");
  }

  addCondiments() {
    console.log("레몬을 추가하는 중");
  }
}

export default Tea;
