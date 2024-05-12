import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "./SocketProvider";
import RoomPage from "./Room";

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const [joined, setJoined] = useState(false);
  

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      if (socket) {
        socket.emit("room:join", { email, room });
      }
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      setJoined(true); // Set joined to true when the user joins the room
      setRoom(room);
    },
    [navigate]
  );

  useEffect(() => {
    if (socket) {
        socket.on("room:join", handleJoinRoom);
        return () => {
          socket.off("room:join", handleJoinRoom);
        };
    };
  }, [socket, handleJoinRoom]);

  if (joined) {
    return <RoomPage email={email} room={room} />;
  } 

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Lobby</h1>
      <form onSubmit={handleSubmitForm} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-lg font-semibold mb-1">Email ID</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="room" className="block text-lg font-semibold mb-1">Room Number</label>
          <input
            type="text"
            id="room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Join</button>
      </form>
    </div>
  );
};

export default LobbyScreen;