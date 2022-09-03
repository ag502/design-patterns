import Light from "./InterfaceLight";

class LivingRoomLight implements Light {
  on() {
    console.log("거실주방 불이 켜졌습니다");
  }

  off() {
    console.log("거실주방 불이 꺼졌습니다");
  }
}

export default LivingRoomLight;
