import React, { useState } from "react";
import { Button, Card, Divider, Tooltip } from "antd";
import type { FormControl } from "../../types/form";
import { FormControlRenderer } from "../renderer/FormControlRenderer";
import { ArrowsAltOutlined, ExpandOutlined } from "@ant-design/icons";
import FormPreviewModal from "./FormPreviewModal";
import "./style.css";
import SchemaModal from "../SchemaModal/SchemaModal";
import CardExtraAction from "../ActionEachControl/CardExtraAction";

interface Props {
  formSchema: FormControl[];
  selectedControlId: string | null;
  setFormSchema: (schema: FormControl[]) => void;
  setSelectedControlId: (id: string) => void;
  removeControl: (serverPayloadKey: string) => void;
  duplicatedControl: (serverPayloadKey: string) => void;
}

export const CenterCanvas: React.FC<Props> = ({
  formSchema,
  selectedControlId,
  setFormSchema,
  setSelectedControlId,
  removeControl,
  duplicatedControl
}) => {
  const [preview, setPreview] = useState(false);
  const [schemaOpen, setSchemaOpen] = useState(false);
  // const { setFormSchema } = useFormSchema();

  const handleImportSchema = (newSchema: FormControl[]) => {
    // cập nhật schema từ modal
    setFormSchema(newSchema);
  };


  return (
      <div>
        <div style={{ textAlign: "right", marginBottom: 12, display: "flex", justifyContent: "flex-end", gap: 16 }}>
          <Button onClick={() => setSchemaOpen(true)}>📜 Xem Schema</Button>
          <a href="">
            <Tooltip title="Mode UI">
              <ArrowsAltOutlined style={{ fontSize: "30px" }}/>
            </Tooltip>
          </a>
          <a onClick={() => setPreview(true)} style={{ color: "#1677ff" }}>
            <Tooltip title="Chế độ xem/Mode View">
              <ExpandOutlined style={{ fontSize: "30px" }} />
            </Tooltip>
          </a>
        </div>
        <Divider />
        <div className="container_mode_centercanvas">
          {formSchema.length === 0 ? (
            <p style={{ textAlign: "center", color: "#999", marginTop: 120}}>
              Kéo control từ sidebar trái vào đây
            </p>
          ) : (
            formSchema.map((control) => (
              <Card
                key={control.serverPayloadKey}
                size="small"
                style={{
                  marginBottom: 8,
                  cursor: "pointer",
                  border:
                    control.serverPayloadKey === selectedControlId
                      ? "2px solid #1677ff"
                      : "1px solid #e0e0e0",
                  position: 'relative'
                }}
                onClick={() => setSelectedControlId(control.serverPayloadKey)}
                extra={
                  <CardExtraAction
                    onDelete={() => removeControl(control.serverPayloadKey)}
                    duplicatedControl={() => duplicatedControl(control.serverPayloadKey)}
                  />
                }
              >
                <FormControlRenderer control={control} preview={preview} />
              </Card>
            ))
          )}
        </div>

        {/* Modal Preview */}
        <FormPreviewModal
          open={preview}
          onClose={() => setPreview(false)}
          formSchema={formSchema}
        />

        {/* Json schema */}
        <SchemaModal
          open={schemaOpen}
          onClose={() => setSchemaOpen(false)}
          formSchema={formSchema}
          onImport={handleImportSchema}
        />
      </div>
  );
};
