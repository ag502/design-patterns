import AddWaveDecorator from "./logExample/logDecorator/addWaveDecorator";
import LowerCaseDecorator from "./logExample/logDecorator/lowerCaseDecorator";
import NormalLogging from "./logExample/normalLogging";

const newLogging = new AddWaveDecorator(new LowerCaseDecorator(new NormalLogging()));

newLogging.log("DECORATOR PATTERN EXAMPLE");
newLogging.log("THIS IS DECORATOR PATTERN");
newLogging.log("DECORATOR PATTERN EXAMPLE");
