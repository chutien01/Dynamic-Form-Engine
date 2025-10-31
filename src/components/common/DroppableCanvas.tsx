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
        height: '100%',
        padding: 20,
        boxShadow: "0px 8px 16px rgba(62, 81, 181, 0.2)",
        borderRadius: 8,
        backgroundColor: isOver ? "#e6f7ff" : "#fffff",
        transition: "background-color 0.2s",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};
export default DroppableCanvas;
