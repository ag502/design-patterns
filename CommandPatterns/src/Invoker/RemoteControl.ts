import Command from "../Command/InterfaceCommand";

import NoCommand from "../Command/NoCommand";

class RemoteControl {
  private onCommands: Command[];
  private offCommands: Command[];
  private undoCommand: Command;

  constructor() {
    const noCommand = new NoCommand();

    this.onCommands = Array.from({ length: 7 }, () => noCommand);
    this.offCommands = Array.from({ length: 7 }, () => noCommand);

    this.undoCommand = noCommand;
  }

  setCommand(slot: number, onCommands: Command, offCommands: Command) {
    this.onCommands[slot] = onCommands;
    this.offCommands[slot] = offCommands;
  }

  onButtonWasPressed(slot: number) {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  offButtonWasPressed(slot: number) {
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  unoButtonWasPushed() {
    this.undoCommand.undo();
  }
}

export default RemoteControl;
