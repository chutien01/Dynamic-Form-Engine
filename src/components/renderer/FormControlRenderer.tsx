import React from "react";
import { InputControl } from "../controls/ViewInput/InputControl";
import { SelectControl } from "../controls/ViewSelect/SelectControl";
import { ButtonControl } from "../controls/ViewButton/ButtonControl";
import type { FormControl } from "../../types/form";

export const FormControlRenderer: React.FC<{
  control: FormControl;
  preview?: boolean;
}> = ({ control, preview }) => {
  switch (control.type) {
    case "INPUT":
      return <InputControl control={control} preview={preview} />;
    case "SELECT":
      return <SelectControl control={control} preview={preview} />;
    case "BUTTON":
      return <ButtonControl control={control} preview={preview} />;
    default:
      return null;
  }
};
