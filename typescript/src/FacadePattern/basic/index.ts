import HomeTheaterFacade from "./homeTheaterFacade";

import { Amplifier, StreamingPlayer, Projector, Screen, TheaterLights, PopcornPopper } from "./subsystem";

const homeTheaterFacade = new HomeTheaterFacade(
    new Amplifier(),
    new StreamingPlayer(),
    new Projector(),
    new Screen(),
    new TheaterLights(),
    new PopcornPopper()
);

homeTheaterFacade.watchMovie("인디아나 존스:레이더스");
console.log("~~~~~~~~~~~~~");
homeTheaterFacade.endMovie();
