import { Button, Tooltip } from "antd";
import { MessageOutlined } from "@ant-design/icons";

interface IconButtonCommentSendProps {
  comment?: string | null;
  onClick: () => void;
}

const IconButtonCommentSend: React.FC<IconButtonCommentSendProps> = ({
  comment,
  onClick,
}) => {
  const tooltipContent = comment ? comment : null;

  return comment ? (
    <Tooltip title={tooltipContent}>
      <Button
        type="link"
        onClick={onClick}
        style={{
          border: "none",
          padding: 8,
        }}
      >
        <MessageOutlined />
      </Button>
    </Tooltip>
  ) : (
    <Button
      type="link"
      onClick={onClick}
      style={{
        border: "none",
        padding: 8,
      }}
    >
      <MessageOutlined />
    </Button>
  );
};

export default IconButtonCommentSend;
