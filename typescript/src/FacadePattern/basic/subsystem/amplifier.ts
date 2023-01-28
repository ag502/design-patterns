import StreamingPlayer from "./streamingPlayer";

class Amplifier {
    on() {
        console.log("앰프가 켜졌습니다.");
    }

    setStreamingPlayer(player: StreamingPlayer) {
        console.log(`엠프를 ${player.name}와 연결합니다.`);
    }

    setSurroundSound() {
        console.log("엠프를 서라운드 모드로 설정합니다(5.1채널).");
    }

    setVolume(volume: number) {
        console.log(`엠프 볼륨읠 ${volume}로 설정합니다.`);
    }

    off() {
        console.log("앰프가 꺼졌습니다.");
    }
}

export default Amplifier;
