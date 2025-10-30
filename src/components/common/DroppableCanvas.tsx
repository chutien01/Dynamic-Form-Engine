import { useDroppable } from "@dnd-kit/core";

interface DroppableCanvasProps {
  children?: React.ReactNode;
}
// Component nhận thả control
const DroppableCanvas: React.FC<DroppableCanvasProps> = ({children}) => {
  const { setNodeRef, isOver } = useDroppable({ id: "canvas" });

  return (
    <div
      ref={setNodeRef}
      style={{
        flex: 1,
        padding: 16,
        minHeight: "80vh",
        border: "2px dashed #d9d9d9",
        borderRadius: 8,
        background: isOver ? "#e6f7ff" : "#fafafa",
        transition: "background 0.2s",
        overflowY: "auto",
      }}
    >
      {children}
    </div>
  );
};
export default DroppableCanvas;
