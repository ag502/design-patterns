import Stereo from "./InterfaceStereo";

class LivingRoomStereo implements Stereo {
  private radio = "";
  private cd = "";
  private dvd = "";
  private volume = 1;

  on() {
    console.log("거실 스테레오가 켜졌습니다");
  }

  off() {
    console.log("거실 스테레오가 꺼졌습니다");
  }

  setRadio(radio: string) {
    this.radio = radio;
  }

  setCd(cd: string) {
    this.cd = cd;
    console.log(`현재 CD는 ${cd} 입니다`);
  }

  setDvd(dvd: string) {
    this.dvd = dvd;
  }

  setVolume(volume: number) {
    this.volume = volume;
    console.log(`현재 볼륨은 ${volume} 입니다`);
  }
}

export default LivingRoomStereo;
