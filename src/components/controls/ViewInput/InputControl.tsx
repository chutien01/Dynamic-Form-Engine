import React from "react";
import { Form, Input } from "antd";
import type { FormControl } from "../../../types/form";

interface Props {
  control: FormControl;
  preview?: boolean;
}

export const InputControl: React.FC<Props> = ({ control, preview }) => {
  return (
    <Form.Item
      label={control.label}
      name={control.serverPayloadKey}
      rules={
        control.required
          ? [{ required: true, message: `${control.label} là bắt buộc` }]
          : []
      }
    >
      <Input placeholder={control.placeholder} disabled={!preview} />
    </Form.Item>
  );
};
