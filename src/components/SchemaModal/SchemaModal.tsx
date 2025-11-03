import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, message } from "antd";
import type { FormControl } from "../../types/form";
import { Editor, type OnMount } from "@monaco-editor/react";

interface SchemaModalProps {
  open: boolean;
  onClose: () => void;
  formSchema: FormControl[];
  onImport?: (schema: FormControl[]) => void;
}

const SchemaModal: React.FC<SchemaModalProps> = ({ open, onClose, formSchema, onImport }) => {
  const [code, setCode] = useState(""); 
  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (open) {
      setCode(JSON.stringify(formSchema, null, 2));
    }
  }, [open, formSchema]);

  const handleImport = () => {
    try {
      const parsed = JSON.parse(code);
      if (Array.isArray(parsed)) {
        onImport?.(parsed);
        message.success("Đã import schema!");
        onClose();
      } else {
        message.error("Schema phải là một mảng JSON hợp lệ!");
      }
    } catch (e: any) {
      message.error("JSON không hợp lệ: " + e.message);
    }
  };

  const handleFormat = async () => {
    if (editorRef.current) {
      await editorRef.current.getAction("editor.action.formatDocument").run();
      message.success("Đã format JSON!");
    }
  };

  const handleEditorMount: OnMount = (editor) => {
    editorRef.current = editor;
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      title="Form Schema (JSON)"
      width={800}
      okText="Save"
      // onOk={handleImport}
      footer={[
        <Button key="format" onClick={handleFormat}>
          🧹 Format JSON
        </Button>,
        <Button key="cancel" onClick={onClose}>
          Hủy
        </Button>,
        <Button key="import" type="primary" onClick={handleImport}>
          Import Schema
        </Button>,
      ]}
      destroyOnHidden
      styles={{
        body: {
          height: "70vh",
          padding: 0
        }
      }}
    >
      <Editor
        height="100%"
        defaultLanguage="json"
        value={code}
        onChange={(v) => setCode(v ?? "")}
        onMount={handleEditorMount}
        options={{
          minimap: { enabled: false },
          wordWrap: "on",
          fontSize: 14,
          tabSize: 2,
          automaticLayout: true,
          scrollBeyondLastLine: false,
          formatOnPaste: true,
          formatOnType: true,
        }}
      />
    </Modal>
  );
};

export default SchemaModal;
