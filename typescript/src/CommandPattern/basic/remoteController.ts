import Command from "./command/command";
import NoCommand from "./command/noCommand";

class RemoteController {
    private onCommands: Command[];
    private offCommands: Command[];
    private undoCommand: Command;

    constructor() {
        const noCommand = new NoCommand();

        this.undoCommand = noCommand;
        this.onCommands = Array.from({ length: 7 }, () => noCommand);
        this.offCommands = Array.from({ length: 7 }, () => noCommand);
    }

    setCommand(slot: number, onCommand: Command, offCommand: Command) {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    onButtonWasPressed(slot: number) {
        const curCommand = this.onCommands[slot];
        this.undoCommand = curCommand;
        curCommand.execute();
    }

    offButtonWasPressed(slot: number) {
        const curCommand = this.offCommands[slot];
        this.undoCommand = curCommand;
        curCommand.execute();
    }

    undoButtonWasPushed() {
        this.undoCommand.undo();
    }
}

export default RemoteController;
