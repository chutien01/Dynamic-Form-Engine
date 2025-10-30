// Kiểu dữ liệu FormSchema, FormControl
export type ControlType = 'input' | 'select' | 'button'

export interface FormControl  {
    id: string;
    type: ControlType;
    label?: string;
    fieldName: string;
    serverPayloadKey: string;
    placeholder?: string;
    required?: boolean;
    options?:string[];
} 