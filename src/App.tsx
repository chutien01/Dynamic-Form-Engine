import "./App.css";
import { useFormSchema } from "./hooks/useFormSchema";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { Button, Layout, message } from "antd";
import LeftPanel from "./components/FormBuilder/LeftPanel";
import DroppableCanvas from "./components/common/DroppableCanvas";
import RightPanel from "./components/FormBuilder/RightPanel";
import { useEffect } from "react";
import { CenterCanvas } from "./components/FormBuilder/CenterCanvas";
import { ControlRegistry, type ControlType } from "./components/controls";

function App() {
  const { Sider, Content } = Layout;
  const {
    formSchema,
    selectedControlId,
    setSelectedControlId,
    addControl,
    updateControl,
    removeControl,
  } = useFormSchema();

  const handleDragEnd = (event: DragEndEvent) => {
    const type = event.active.data.current?.type as ControlType | undefined;
    const over = event.over?.id;
    if (over === "canvas" && type) {
      const randomSuffix = Math.floor(Math.random() * 100);
      const label = `${type}_${randomSuffix}`;
       const controlInitial = ControlRegistry[type].defaultSchema();
       const controlSchemaFinal = {
          ...controlInitial,
          label: label,
          serverPayloadKey: label
       }
       addControl(controlSchemaFinal);
    }
  };

  const handleSave = () => {
    const json = JSON.stringify(formSchema, null, 2);
    console.log("Schema:", json);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "form-schema.json";
    a.click();
    URL.revokeObjectURL(url);
    message.success("Đã lưu schema");
  };

  useEffect(() => {
    // add class to body
    document.body.classList.add('dynamic-form-builder');

    return (() => {
      document.body.classList.remove('dynamic-form-builder');
    });
  }, []);

  return (
      <DndContext onDragEnd={handleDragEnd}>
        <Layout style={{ height: "100vh"}}>
          <Sider
            width={220}
            theme="light"
            style={{ background: "white", borderRight: "1px solid #eee" }}
          >
            <LeftPanel />
          </Sider>

          <Content style={{ padding: 16, display: "flex", gap: 16 }}>
            <div style={{ flex: 1, border: "1px solid #eee", borderRadius: 6 }}>
              <DroppableCanvas>
                <CenterCanvas
                  formSchema={formSchema}
                  selectedControlId={selectedControlId}
                  setSelectedControlId={setSelectedControlId}
                  removeControl={removeControl}
                />
              </DroppableCanvas>
            </div>
            <div
              style={{
                width: 340,
                borderLeft: "1px solid #eee",
                background: "white",
                borderRadius: 6,
              }}
            >
              <RightPanel
                formSchema={formSchema}
                selectedControlId={selectedControlId}
                updateControl={updateControl}
              />
            </div>
          </Content>

          <div style={{ position: "fixed", right: 16, bottom: 16 }}>
            <Button type="primary" onClick={handleSave}>
              Lưu Schema
            </Button>
          </div>
        </Layout>
      </DndContext>
  );
}

export default App;
