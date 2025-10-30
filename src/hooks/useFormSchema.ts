import { useState } from "react"
import type {FormControl } from "../types/form"

// Quản lý JSON schema (add, update, delete control)
export const useFormSchema = () => {
    const [formSchema, setFormSchema] = useState<FormControl[]>([]);
    const [selectedControlId, setSelectedControlId] = useState<string | null>(null);

    // Thêm
    const addControl = (control: FormControl) => {
        setFormSchema(prev => [...prev, control])
        setSelectedControlId(control.id)
    }

    // Sửa 
    const updateControl = (id: string, updated: Partial<FormControl>) => {
        setFormSchema(prev =>
            prev.map(ctrl => (ctrl.id === id ? { ...ctrl, ...updated } : ctrl))
        );
    }

    // Xóa
    const removeControl = (id: string) => {
        setFormSchema(prev => prev.filter(ctrl => ctrl.id !== id));
        setSelectedControlId(prev => (prev === id ? null : prev))
    }

    return {
        formSchema,
        selectedControlId,
        setSelectedControlId,
        addControl,
        updateControl,
        removeControl
    }
}