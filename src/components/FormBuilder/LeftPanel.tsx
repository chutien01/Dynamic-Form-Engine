// Danh sách control có thể kéo thả

import DraggableControl from "../common/DraggableControl";
import { ControlRegistry } from "../controls";

const LeftPanel: React.FC = () => {
  const controlEntries = Object.entries(ControlRegistry);

  return (
    <div style={{ padding: 16 }}>
      <h4 style={{ marginBottom: 12 }}>Control list</h4>
      {controlEntries.map(([key, cfg]) => (
        <DraggableControl key={key} type={key} label={cfg.label} />
      ))}
    </div>
  );
};

export default LeftPanel;
