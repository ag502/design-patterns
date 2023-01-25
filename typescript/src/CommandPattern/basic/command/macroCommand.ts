import Command from "./command";

class MacroCommand implements Command {
    constructor(private commands: Command[]) {}

    execute() {
        this.commands.forEach((command) => command.execute());
    }

    undo() {
        this.commands.forEach((command) => command.undo());
    }
}

export default MacroCommand;
