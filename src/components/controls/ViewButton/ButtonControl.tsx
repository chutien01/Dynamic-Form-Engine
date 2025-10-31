import React from "react";
import { Form, Button } from "antd";
import type { FormControl } from "../../../types/form";

interface Props {
  control: FormControl;
  preview?: boolean;
}

export const ButtonControl: React.FC<Props> = ({ control, preview }) => {
  return (
    <Form.Item>
      <Button type="primary" htmlType="submit" disabled={!preview}>
        {control.label}
      </Button>
    </Form.Item>
  );
};
