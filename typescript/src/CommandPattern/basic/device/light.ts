class Light {
    constructor(private location: string) {}

    on() {
        console.log(`${this.location}의 불이 켜졌습니다.`);
    }

    off() {
        console.log(`${this.location}의 불이 꺼졌습니다.`);
    }
}

export default Light;
