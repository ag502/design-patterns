import { Amplifier, PopcornPopper, Projector, StreamingPlayer, TheaterLights, Screen } from "./subsystem";

class HomeTheaterFacade {
    constructor(
        private amplifier: Amplifier,
        private streamingPlayer: StreamingPlayer,
        private projector: Projector,
        private screen: Screen,
        private theaterLights: TheaterLights,
        private popper: PopcornPopper
    ) {}

    watchMovie(movie: string) {
        console.log("영화 볼 준비 중");

        this.popper.on();
        this.popper.pop();

        this.theaterLights.dim(10);

        this.screen.down();

        this.projector.on();
        this.projector.wideScreenMode();

        this.amplifier.on();
        this.amplifier.setStreamingPlayer(this.streamingPlayer);
        this.amplifier.setSurroundSound();
        this.amplifier.setVolume(5);

        this.streamingPlayer.on();
        this.streamingPlayer.play(movie);
    }

    endMovie() {
        console.log("홈시어터를 끄는 중");

        this.popper.off();

        this.theaterLights.on();

        this.screen.up();

        this.projector.off();

        this.amplifier.off();

        this.streamingPlayer.stop();

        this.streamingPlayer.off();
    }
}

export default HomeTheaterFacade;
