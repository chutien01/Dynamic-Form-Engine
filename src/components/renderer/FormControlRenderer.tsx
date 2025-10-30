import React from "react";
import { InputControl } from "../controls/InputControl";
import { SelectControl } from "../controls/SelectControl";
import { ButtonControl } from "../controls/ButtonControl";
import type { FormControl } from "../../types/form";

export const FormControlRenderer: React.FC<{
  control: FormControl;
  preview?: boolean;
}> = ({ control, preview }) => {
  switch (control.type) {
    case "input":
      return <InputControl control={control} preview={preview} />;
    case "select":
      return <SelectControl control={control} preview={preview} />;
    case "button":
      return <ButtonControl control={control} preview={preview} />;
    default:
      return null;
  }
};
