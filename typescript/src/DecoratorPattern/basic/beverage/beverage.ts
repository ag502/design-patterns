abstract class Beverage {
    private _description = "제목 없음";

    get description() {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    abstract cost(): number;
}

export default Beverage;
