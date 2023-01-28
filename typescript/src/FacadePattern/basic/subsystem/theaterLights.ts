class TheaterLights {
    on() {
        console.log("조명이 켜졌습니다.");
    }

    dim(brightness: number) {
        console.log(`조명 밝기를 ${brightness}%로 설정합니다.`);
    }
}

export default TheaterLights;
