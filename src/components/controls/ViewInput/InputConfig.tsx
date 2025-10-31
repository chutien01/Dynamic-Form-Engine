import { Input } from "antd";
import type { FormControl } from "../../../types/form";

export const InputConfig = {
  type: "INPUT",
  label: "Input",
  icon: "InputOutlined",
  defaultSchema: (): FormControl => ({
    id: crypto.randomUUID(),
    type: "INPUT",
    fieldName: "INPUT",
    label: `INPUT_${Math.floor(Math.random() * 100)}`,
    serverPayloadKey: "",
    placeholder: "Nhập...",
    required: false,
  }),
  render: (control: FormControl, preview: boolean) => (
    <Input placeholder={control.placeholder} disabled={!preview} />
  ),
  settings: [
    { key: "label", label: "Label", component: "input" },
    { key: "serverPayloadKey", label: "ServerPayloadKey", component: "input" },
    { key: "placeholder", label: "Placeholder", component: "input" },
    { key: "required", label: "Required", component: "switch" },
  ],
};
