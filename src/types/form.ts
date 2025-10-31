import type { ControlType } from "../components/controls";

// Kiểu dữ liệu FormSchema, FormControl
export interface FormControl  {
    id: string;
    type: ControlType;
    label?: string;
    fieldName?: string;
    serverPayloadKey: string;
    placeholder?: string;
    required?: boolean;
    options?:string[];
    [key: string]: any,
} 