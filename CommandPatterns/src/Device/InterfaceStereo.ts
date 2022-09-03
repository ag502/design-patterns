interface Stereo {
  on(): void;
  off(): void;
  setCd(cd: string): void;
  setDvd(dvd: string): void;
  setRadio(radio: string): void;
  setVolume(volume: number): void;
}

export default Stereo;
