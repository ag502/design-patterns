export enum CellingFanStatus {
    OFF = 0,
    LOW,
    MEDIUM,
    HIGH,
}

class CellingFan {
    private _speed = CellingFanStatus.OFF;

    constructor(private location: string) {}

    get speed() {
        return this._speed;
    }

    high() {
        this._speed = CellingFanStatus.HIGH;
        console.log(`${this.location}의 celling fan이 HIGH로 설정 되었습니다.`);
    }

    medium() {
        this._speed = CellingFanStatus.MEDIUM;
        console.log(`${this.location}의 celling fan이 MEDIUM으로 설정 되었습니다.`);
    }

    low() {
        this._speed = CellingFanStatus.LOW;
        console.log(`${this.location}의 celling fan이 LOW로 설정 되었습니다.`);
    }

    off() {
        this._speed = CellingFanStatus.OFF;
        console.log(`${this.location}의 celling fan이 꺼졌습니다.`);
    }
}

export default CellingFan;
