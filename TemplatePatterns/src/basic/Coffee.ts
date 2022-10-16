import CaffeineBeverage from "./CaffeineBeverage";

class Coffee extends CaffeineBeverage {
  brew() {
    console.log("필터로 커피를 우려내는 중");
  }

  addCondiments() {
    console.log("설탕과 우유를 추가하는 중");
  }
}

export default Coffee;
