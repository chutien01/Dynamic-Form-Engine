import { createContext, useContext } from "react";
import type { useFormSchema } from "../hooks/useFormSchema";

export const FormBuilderContext = createContext<ReturnType<typeof useFormSchema> | null>(null);

export const useFormBuilder = () => {
  const ctx = useContext(FormBuilderContext);
  if (!ctx) throw new Error("useFormBuilder must be used within a FormBuilderProvider");
  return ctx;
};