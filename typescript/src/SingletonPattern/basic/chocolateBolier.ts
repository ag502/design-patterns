class ChocolateBoiler {
    private static uniqueInstance: ChocolateBoiler;

    private empty = false;
    private boiled = false;

    private constructor() {
        //
    }

    static getInstance() {
        if (!this.uniqueInstance) {
            this.uniqueInstance = new ChocolateBoiler();
        }
        return this.uniqueInstance;
    }

    fill() {
        if (this.empty) {
            this.empty = false;
            this.boiled = false;
        }
    }

    drain() {
        if (!this.empty && this.boiled) {
            this.empty = true;
        }
    }

    boil() {
        if (!this.empty && !this.boiled) {
            this.boiled = true;
        }
    }
}

export default ChocolateBoiler;
