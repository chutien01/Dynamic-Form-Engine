import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import React from "react";
import './style.css'

interface CardExtraActionProps {
  onDelete: (e: React.MouseEvent) => void;
  duplicatedControl: (e: React.MouseEvent) => void;
}

const CardExtraAction: React.FC<CardExtraActionProps> = ({ onDelete, duplicatedControl }) => {
  return (
    <div className="wrapper_action_each_control">
      <a
        onClick={(e) => {
          e.stopPropagation();
          duplicatedControl(e);
        }}
      >
        <CopyOutlined style={{ color: "blue", fontSize: "20px" }} />
      </a>
      <a
        onClick={(e) => {
          e.stopPropagation();
          onDelete(e);
        }}
      >
        <DeleteOutlined style={{ color: "red", fontSize: "20px" }} />
      </a>
    </div>
  );
};

export default CardExtraAction;
