import Command from "../Command/InterfaceCommand";

import NoCommand from "../Command/NoCommand";

class RemoteControl {
  private onCommands: Command[];
  private offCommands: Command[];

  constructor() {
    const noCommand = new NoCommand();

    this.onCommands = Array.from({ length: 7 }, () => noCommand);
    this.offCommands = Array.from({ length: 7 }, () => noCommand);
  }

  setCommand(slot: number, onCommands: Command, offCommands: Command) {
    this.onCommands[slot] = onCommands;
    this.offCommands[slot] = offCommands;
  }

  onButtonWasPressed(slot: number) {
    this.onCommands[slot].execute();
  }

  offButtonWasPressed(slot: number) {
    this.offCommands[slot].execute();
  }
}

export default RemoteControl;
