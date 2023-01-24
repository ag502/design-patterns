import ChocolateBoiler from "./chocolateBolier";

const chocolateBolier1 = ChocolateBoiler.getInstance();
const chocolateBolier2 = ChocolateBoiler.getInstance();

console.log(chocolateBolier1 === chocolateBolier2);
