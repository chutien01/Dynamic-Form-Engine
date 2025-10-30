import React, { useState } from "react";
import { Card, Form, message } from "antd";
import type { FormControl } from "../../types/form";
import { FormControlRenderer } from "../renderer/FormControlRenderer";

interface Props {
  formSchema: FormControl[];
  selectedControlId: string | null;
  setSelectedControlId: (id: string) => void;
  removeControl: (id: string) => void;
}

export const CenterCanvas: React.FC<Props> = ({
  formSchema,
  selectedControlId,
  setSelectedControlId,
  removeControl,
}) => {
  const [form] = Form.useForm();
  const [preview, setPreview] = useState(false);

  const onFinish = (values: unknown) => {
    message.success("Submit thành công!");
    console.log("Form values:", values);
  };
  return (
    <div style={{ padding: 12 }}>
      <div style={{ textAlign: "right", marginBottom: 12 }}>
        <a
          onClick={() => setPreview(!preview)}
          style={{ color: preview ? "#1677ff" : "#999" }}
        >
          {preview ? "🔁 Thoát Preview" : "👁 Xem Preview"}
        </a>
      </div>
      <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          disabled={!preview}
          style={{
            background: preview ? "#fff" : "#fafafa",
            padding: 16,
            borderRadius: 8,
          }}
      >
      {formSchema.length === 0 ? (
        <p style={{ textAlign: "center", color: "#999", marginTop: 120 }}>
          Kéo control từ sidebar trái vào đây
        </p>
      ) : (
        formSchema.map(control => (
          <Card
            key={control.id}
            size="small"
            style={{
              marginBottom: 8,
              cursor: "pointer",
              border:
                control.id === selectedControlId
                  ? "2px solid #1677ff"
                  : "1px solid #e0e0e0",
            }}
            onClick={() => setSelectedControlId(control.id)}
            extra={
              <a
                onClick={e => {
                  e.stopPropagation();
                  removeControl(control.id);
                }}
              >
                Xóa
              </a>
            }
          >
            <FormControlRenderer control={control} preview={preview} />
          </Card>
        ))
      )}
      </Form>
    </div>
  );
};
