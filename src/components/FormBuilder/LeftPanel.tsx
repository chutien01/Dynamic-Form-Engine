// Danh sách control có thể kéo thả

import DraggableControl from "../common/DraggableControl";

const LeftPanel: React.FC = () => {
  const controls = [
    { type: "input", label: "Input" },
    { type: "select", label: "Select" },
    { type: "button", label: "Button" },
  ];

  return (
    <div style={{ padding: 16 }}>
      <h4 style={{ marginBottom: 12 }}>Control list</h4>
      {controls.map(c => (
        <DraggableControl key={c.type} type={c.type} label={c.label} />
      ))}
    </div>
  );
};

export default LeftPanel;
