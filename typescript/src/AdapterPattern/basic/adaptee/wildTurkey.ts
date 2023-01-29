import Turkey from "./turkey";

class WildTurkey implements Turkey {
    gobble() {
        console.log("골골");
    }

    fly() {
        {
            console.log("짧은 거리를 날고 있어요!");
        }
    }
}

export default WildTurkey;
