import React, { useEffect, useCallback, useState } from "react";
import ReactPlayer from "react-player";
import peer from "./peer.js";
import { useSocket } from "./SocketProvider";

const RoomPage = () => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();

  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
  }, [remoteSocketId, socket]);

  const handleIncommingCall = useCallback(
    async ({ from, offer }) => {
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      console.log(`Incoming Call`, from, offer);
      const ans = await peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    for (const track of myStream.getTracks()) {
      peer.peer.addTrack(track, myStream);
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      peer.setLocalDescription(ans);
      console.log("Call Accepted!");
      sendStreams();
    },
    [sendStreams]
  );

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans);
  }, []);

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      console.log("GOT TRACKS!!");
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoNeedIncomming);
    socket.on("peer:nego:final", handleNegoNeedFinal);

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncommingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoNeedIncomming);
      socket.off("peer:nego:final", handleNegoNeedFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">Room Page</h1>
    <h4 className="text-lg mb-4">
      {remoteSocketId ? "Connected" : "No one in room"}
    </h4>
    {myStream && (
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4"
        onClick={sendStreams}
      >
        Share Your Stream
      </button>
    )}
    {remoteSocketId && (
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4"
        onClick={handleCallUser}
      >
        Call
      </button>
    )}
    <div className="flex">
      <div className="flex flex-col items-center justify-center w-1/2">
        {myStream && (
          <div className="mb-4">
            <h1 className="text-2xl mb-2">Your Stream</h1>
            <ReactPlayer
              playing
              muted
              height="240px"
              width="426px"
              url={myStream}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center w-1/2">
        {remoteStream && (
          <div>
            <h1 className="text-2xl mb-2">Remote Stream</h1>
            <ReactPlayer
              playing
              muted
              height="240px"
              width="426px"
              url={remoteStream}
            />
          </div>
        )}
      </div>
    </div>
  </div>
  
  );
};

export default RoomPage;