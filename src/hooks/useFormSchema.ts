import { useState } from "react";
import type { FormControl } from "../types/form";

// Quản lý JSON schema (add, update, delete control)
export const useFormSchema = () => {
  const [formSchema, setFormSchema] = useState<FormControl[]>([]);
  const [selectedControlId, setSelectedControlId] = useState<string | null>(
    null
  );
  console.log("🚀 ~ useFormSchema ~ formSchema:", formSchema)

  // Thêm
  const addControl = (control: FormControl) => {
    setFormSchema((prev) => [...prev, control]);
    setSelectedControlId(control.serverPayloadKey);
  };

  // Sửa
  const updateControl = (
    serverPayloadKey: string,
    updated: Partial<FormControl>
  ) => {
    setFormSchema((prev) =>
      prev.map((ctrl) =>
        ctrl.serverPayloadKey === serverPayloadKey
          ? { ...ctrl, ...updated }
          : ctrl
      )
    );
  };

  // Xóa
  const removeControl = (serverPayloadKey: string) => {
    setFormSchema((prev) =>
      prev.filter((ctrl) => ctrl.serverPayloadKey !== serverPayloadKey)
    );
    setSelectedControlId((prev) => (prev === serverPayloadKey ? null : prev));
  };

  // Duplicate
  const duplicatedControl = (serverPayloadKey: string) => {
    const randomNumber = Math.floor(Math.random() * 10000);
    setFormSchema(prev => {
      const targetFieldDuplicated = prev.find(
        (ctrl) => ctrl.serverPayloadKey === serverPayloadKey
      );
      if (!targetFieldDuplicated) return prev;
      const newControl = {
        ...targetFieldDuplicated,
        serverPayloadKey: `${serverPayloadKey}_${randomNumber}`,
        label: targetFieldDuplicated.label ? `${targetFieldDuplicated.label} (Copy)` : "Copy",
      };

      const insertIndex = prev.findIndex(
        (ctrl) => ctrl.serverPayloadKey === serverPayloadKey
      );
      const newSchema = [
        ...prev.slice(0, insertIndex + 1),
        newControl,
        ...prev.slice(insertIndex + 1),
      ];

      // Tự động chọn control mới
      setSelectedControlId(newControl.serverPayloadKey);
      return newSchema;
    });
  };

  return {
    formSchema,
    selectedControlId,
    setFormSchema,
    setSelectedControlId,
    addControl,
    updateControl,
    removeControl,
    duplicatedControl
  };
};
