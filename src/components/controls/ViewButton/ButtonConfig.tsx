import type { FormControl } from "../../../types/form";
import { ButtonControl } from "./ButtonControl";

export const ButtonConfig = {
  type: "BUTTON",
  label: "Button",
  defaultSchema: (): FormControl => ({
    id: crypto.randomUUID(),
    type: "BUTTON",
    label: `BUTTON_${Math.floor(Math.random() * 100)}`,
    serverPayloadKey: "",
  }),
  render: ButtonControl,
  settings: [{ key: "label", label: "Label", component: "input" }],
};
