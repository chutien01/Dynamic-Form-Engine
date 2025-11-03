import { Form, message, Modal } from "antd"
import type { FormControl } from "../../types/form"
import { FormControlRenderer } from "../renderer/FormControlRenderer";

interface FormPreviewModalProps {
    open: boolean,
    onClose: () => void,
    formSchema: FormControl[]
}
const FormPreviewModal: React.FC<FormPreviewModalProps> = ({ open, onClose, formSchema}) => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        message.success("Submit thành công!");
        console.log("Form value:", values)
    }

    return (
        <Modal
            title=""
            open={open}
            onCancel={onClose}
            footer={null}
            width={600}
            destroyOnHidden
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                style={{ background: "#fff", padding: 16, borderRadius: 8 }}
            >
                {formSchema.map((control) => (
                    <FormControlRenderer
                        key={control.serverPayloadKey}
                        control={control}
                        preview={true}
                    />
                ))}
            </Form>
        </Modal>
    )
}

export default FormPreviewModal