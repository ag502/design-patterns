class Stereo {
    private volume = 0;

    constructor(private location: string) {}

    on() {
        console.log(`${this.location}의 stereo가 켜집니다.`);
    }

    off() {
        console.log(`${this.location}의 stereo가 꺼집니다.`);
    }

    setCd() {
        console.log(`${this.location}의 stereo의 CD가 재생됩니다.`);
    }

    setVolume(volume: number) {
        this.volume = volume;
    }
}

export default Stereo;
