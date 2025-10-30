import { Form, Input, Switch } from "antd";
import type { FormControl } from "../../types/form";

interface RightPanelProps {
  formSchema: FormControl[];
  selectedControlId: string | null;
  updateControl: (id: string, updated: Partial<FormControl>) => void;
}
// Cấu hình control được chọn
const RightPanel: React.FC<RightPanelProps> = ({ formSchema, selectedControlId, updateControl }) => {
   const selected = formSchema.find(c => c.id === selectedControlId);
  if (!selected) return <div style={{ padding: 16 }}>Chọn control để cấu hình</div>;

  return (
    <div style={{ padding: 16 }}>
      <h4>Cấu hình {selected.type}</h4>
      <Form layout="vertical">
        <Form.Item label="Label">
          <Input
            value={selected.label}
            onChange={e => updateControl(selected.id, { label: e.target.value })}
          />
        </Form.Item>
        {selected.type === "input" && (
          <Form.Item label="Placeholder">
            <Input
              value={selected.placeholder}
              onChange={e =>
                updateControl(selected.id, { placeholder: e.target.value })
              }
            />
          </Form.Item>
        )}
        <Form.Item label="ServerPayloadKey">
          <Input
            value={selected.serverPayloadKey}
            onChange={e => updateControl(selected.id, { label: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="Required">
          <Switch
            checked={selected.required}
            onChange={checked => updateControl(selected.id, { required: checked })}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default RightPanel;
