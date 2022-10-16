abstract class CaffeineBeverage {
   prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  abstract brew(): void;

  abstract addCondiments(): void;

  boilWater() {
    console.log("물 끓이는 중");
  }

  pourInCup() {
    console.log("컵에 따르는 중");
  }
}

export default CaffeineBeverage;
