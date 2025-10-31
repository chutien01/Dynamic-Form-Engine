import type { FormControl } from "../../../types/form";
import { SelectControl } from "./SelectControl";

export const SelectConfig = {
  type: "SELECT",
  label: "Select",
  defaultSchema: (): FormControl => ({
    id: crypto.randomUUID(),
    type: "SELECT",
    label: `SELECT_${Math.floor(Math.random() * 100)}`,
    serverPayloadKey: "",
    options: ["Option 1", "Option 2"],
    required: false,
  }),
  render: SelectControl,
  settings: [
    { key: "label", label: "Label", component: "input" },
    { key: "serverPayloadKey", label: "Server Payload Key", component: "input" },
    { key: "required", label: "Required", component: "switch" },
  ],
};
