import { ButtonConfig } from "./ViewButton/ButtonConfig";
import { InputConfig } from "./ViewInput/InputConfig";
import { SelectConfig } from "./ViewSelect/SelectConfig";

export const ControlRegistry = {
  INPUT: InputConfig,
  SELECT: SelectConfig,
  BUTTON: ButtonConfig,
};

export type ControlType = keyof typeof ControlRegistry;
