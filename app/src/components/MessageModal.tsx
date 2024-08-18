import { Card, Flex, Typography } from "antd";
import { Message } from "../services/chatServices";

type MessageModalProps = {
  message: Message;
};

const MessageModal = ({ message }: MessageModalProps) => {
  return (
    <Card
      size="small"
      //   title={room.name}
      style={{ width: 300 }}
    >
      <Flex gap="large">
        <Typography.Text>{message.date}:</Typography.Text>
        <Typography.Text>{message.data}</Typography.Text>
      </Flex>
    </Card>
  );
};

export default MessageModal;
