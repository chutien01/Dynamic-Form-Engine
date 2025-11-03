import React from "react";
import { useFormSchema } from "../hooks/useFormSchema";
import { FormBuilderContext } from "./useFormBuilder";

export const FormBuilderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const formSchemaState = useFormSchema();
  return (
    <FormBuilderContext.Provider value={formSchemaState}>
      {children}
    </FormBuilderContext.Provider>
  );
};
