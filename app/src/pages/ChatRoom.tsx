import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMessages } from "../services/chatServices";
import { Flex, Spin, Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const ChatRoom = () => {
  const { id } = useParams<{ id: string }>();
  const [messages, setMessages] = React.useState<string[]>([]);
  useEffect(() => {
    const getMessages = async () => {
      if (!id) return;
      const response = await fetchMessages(id);
      setMessages(response);
    };
    getMessages();
  }, []);
  return (
    <Flex align="center" gap="middle" vertical={true}>
      {messages.length == 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
          }}
        >
          <Spin indicator={<LoadingOutlined spin />} size="large" />
        </div>
      )}
      {messages.map((message, index) => (
        <Typography.Text key={index}>{message}</Typography.Text>
      ))}
    </Flex>
  );
};

export default ChatRoom;
