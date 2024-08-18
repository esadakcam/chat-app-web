export type ChatRoom = {
    id: string;
    name: string;
    info: string;
}
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
const rooms: ChatRoom[] = [{id: "1", name: "Room 1", info: "Chat room for nerds"}, {id: "2", name: "Room 2", info: "Chat room for geeks"}]
const messages: Record<string, string[]> = {
    "1": ["Hello", "World"],
    "2": ["Foo", "Bar"]
};

export const fetchRooms: () => Promise<ChatRoom[]> = async () => {
    await delay(1000);
    return rooms;
};

export const fetchRoom: (id: string) => Promise<ChatRoom | undefined> = async (id: string) => {
    await delay(1000);
    return rooms.find((room) => room.id === id);
};

export const fetchMessages: (id: string) => Promise<string[]> = async (id: string) => {
    await delay(1000);
    return messages[id] || [];
};