class StreamingPlayer {
    private _name = "스트리밍 플레이어";
    private movieName = "";

    get name() {
        return this._name;
    }

    on() {
        console.log(`${this.name}가 켜졌습니다.`);
    }

    off() {
        console.log(`${this.name}가 꺼졌습니다.`);
    }

    play(movie: string) {
        this.movieName = movie;
        console.log(`${this.name}에서 "${movie}"를 재생합니다.`);
    }

    stop() {
        console.log(`${this.name}에서 "${this.movieName}" 재생을 종료합니다.`);
    }
}

export default StreamingPlayer;
