import RemoteControl from "./Invoker/RemoteControl";

import LivingRoomLight from "./Device/LivingRoomLight";
import LivingRoomStereo from "./Device/LivingRoomStereo";

import LightOnCommand from "./Command/LightOnCommand";
import LigthOffCommand from "./Command/LightOffCommand";
import StereoOnWithCDCommand from "./Command/StereoOnWithCDCommand";

// 리모컨 생성 (인보커)
const remoteControl = new RemoteControl();

// 리시버
const livingRoomLight = new LivingRoomLight();
const livingRoomStereo = new LivingRoomStereo();

// 커멘드 객체
const lightOnCommand = new LightOnCommand(livingRoomLight);
const lightOffCommand = new LigthOffCommand(livingRoomLight);

const stereoOnWithCDCommand = new StereoOnWithCDCommand(livingRoomStereo);

// 리모컨에 등록
remoteControl.setCommand(0, lightOnCommand, lightOffCommand);
remoteControl.setCommand(1, stereoOnWithCDCommand, stereoOnWithCDCommand);

remoteControl.onButtonWasPressed(0);
remoteControl.offButtonWasPressed(0);
remoteControl.unoButtonWasPushed();

remoteControl.onButtonWasPressed(1);
