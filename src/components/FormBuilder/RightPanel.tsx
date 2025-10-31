import { Form, Input, Switch } from "antd";
import type { FormControl } from "../../types/form";
import { ControlRegistry } from "../controls";

interface RightPanelProps {
  formSchema: FormControl[];
  selectedControlId: string | null;
  updateControl: (id: string, updated: Partial<FormControl>) => void;
}
// Cấu hình control được chọn
const RightPanel: React.FC<RightPanelProps> = ({ formSchema, selectedControlId, updateControl }) => {
  const selected = formSchema.find(c => c.id === selectedControlId);
  if (!selected) return <div style={{ padding: 16 }}>Chọn control để cấu hình</div>;

  const config = ControlRegistry[selected.type];
  return (
    <div style={{ padding: 16 }}>
      <h4>Cấu hình {selected.type}</h4>
      <Form layout="vertical">
        {config.settings.map(setting => {
          const value = selected[setting.key];
          const onChange = (val: any) => updateControl(selected.id, { [setting.key]: val });

          switch (setting.component) {
            case "switch":
              return (
                <Form.Item key={setting.key} label={setting.label}>
                  <Switch checked={!!value} onChange={checked => onChange(checked)} />
                </Form.Item>
              );
            default:
              return (
                <Form.Item key={setting.key} label={setting.label}>
                  <Input value={value} onChange={e => onChange(e.target.value)} />
                </Form.Item>
              );
          }
        })}
      </Form>
    </div>
  );
};

export default RightPanel;
