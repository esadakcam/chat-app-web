import { ChatRoom } from "../services/chatServices";
import { Card, Typography } from "antd";
import { Link } from "react-router-dom";
type ChatRoomModalProps = {
  room: ChatRoom;
};

const ChatRoomCard = ({ room }: ChatRoomModalProps) => {
  return (
    <Card
      size="small"
      title={room.name}
      extra={<Link to={`/chat/${room.id}`}> Go to Room </Link>}
      style={{ width: 300 }}
    >
      <Typography.Text>{room.info}</Typography.Text>
    </Card>
  );
};

export default ChatRoomCard;
