import React, { useEffect, useState } from "react";
import ChatRoomCard from "../components/ChatRoomCard";
import { ChatRoom, fetchRooms } from "../services/chatServices";
import { Flex, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Home = () => {
  const [rooms, setRooms] = useState<ChatRoom[]>([]);

  useEffect(() => {
    const getRooms = async () => {
      const rooms = await fetchRooms();
      console.log("rooms", rooms);
      setRooms(rooms);
    };
    getRooms();
  }, []);

  return (
    <Flex align="center" gap="middle">
      {rooms.length == 0 && (
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
      {rooms.map((room) => (
        <ChatRoomCard key={room.id} room={room} />
      ))}
    </Flex>
  );
};

export default Home;
