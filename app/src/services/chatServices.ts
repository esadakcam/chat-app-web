export type ChatRoom = {
    id: string;
    name: string;
    info: string;
}

export type Message = {
    date : string;
    data : string;
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
const rooms: ChatRoom[] = [{id: "1", name: "Room 1", info: "Chat room for nerds"}, {id: "2", name: "Room 2", info: "Chat room for geeks"}]
const messages: Record<string, Message[]> = {
    "1": [{data: "Hello", date:"21.00"}, {data: "World", date:"21.01"}],
    "2": [{data: "Nerds", date:"11.00"}, {data: "World", date:"11.01"}],
};

export const fetchRooms: () => Promise<ChatRoom[]> = async () => {
    await delay(1000);
    return rooms;
};

export const fetchRoom: (id: string) => Promise<ChatRoom | undefined> = async (id: string) => {
    await delay(1000);
    return rooms.find((room) => room.id === id);
};

export const fetchMessages: (id: string) => Promise<Message[]> = async (id: string) => {
    await delay(1000);
    return messages[id] || [];
};