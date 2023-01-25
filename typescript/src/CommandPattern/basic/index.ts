import RemoteController from "./remoteController";

import CellingFan from "./device/ceilingFan";
import Light from "./device/light";
import Stereo from "./device/stereo";

import { LightOnCommand, LightOffCommand } from "./command/light";
import { CellingFanOnCommand, CellingFanOffCommand } from "./command/cellingFan";
import { StereoOnWithCDCommand, StereoOffWithCDCommand } from "./command/stereo";

const remoteController = new RemoteController();

const livingLight = new Light("Living Room");
const kitchenLight = new Light("Kitchen");
const cellingFan = new CellingFan("LivingRoom");
const stereo = new Stereo("Living Room");

const livingRoomLightOnCommand = new LightOnCommand(livingLight);
const livingRoomLightOffCommand = new LightOffCommand(livingLight);
const kitchenLightOnCommand = new LightOnCommand(kitchenLight);
const kitchenLightOffCommand = new LightOffCommand(kitchenLight);

const livingRoomCellinFanOnCommand = new CellingFanOnCommand(cellingFan);
const livingRoomCellingFanOffCommand = new CellingFanOffCommand(cellingFan);

const livingRoomStereoOnCommand = new StereoOnWithCDCommand(stereo);
const livingRoomStereoOffCommand = new StereoOffWithCDCommand(stereo);

remoteController.setCommand(0, livingRoomLightOnCommand, livingRoomLightOffCommand);
remoteController.setCommand(1, kitchenLightOnCommand, kitchenLightOffCommand);
remoteController.setCommand(2, livingRoomCellinFanOnCommand, livingRoomCellingFanOffCommand);
remoteController.setCommand(3, livingRoomStereoOnCommand, livingRoomStereoOffCommand);

remoteController.onButtonWasPressed(0);
remoteController.offButtonWasPressed(0);

remoteController.undoButtonWasPushed();

console.log("~~~~~~~~~~~~~~~");

remoteController.onButtonWasPressed(1);
remoteController.offButtonWasPressed(1);

console.log("~~~~~~~~~~~~~~~");

remoteController.onButtonWasPressed(2);
remoteController.offButtonWasPressed(2);

console.log("~~~~~~~~~~~~~~~");

remoteController.onButtonWasPressed(3);
remoteController.offButtonWasPressed(3);
