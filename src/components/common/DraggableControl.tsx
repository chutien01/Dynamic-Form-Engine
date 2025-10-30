import { useDraggable } from "@dnd-kit/core";
import { Button } from "antd";

interface DraggableControlProps {
  type: string;
  label?: string;
}
// Component hỗ trợ kéo thả control
const DraggableControl: React.FC<DraggableControlProps> = ({ type, label }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: `drag-${type}`,
      data: { type },
    });

  const style: React.CSSProperties = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    opacity: isDragging ? 0.5 : 1,
    cursor: "grab",
    marginBottom: 8,
  };

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={style}>
      <Button block>{label || type}</Button>
    </div>
  );
};
export default DraggableControl;
