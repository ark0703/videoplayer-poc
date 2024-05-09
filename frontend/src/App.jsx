import { useState, useRef } from "react";
import "./App.css";
import VideoPlayer from "./Components/VideoPlayer";

function App() {
  const playerRef = useRef(null);
  const videoLink =
    "http://localhost:8000/uploads/courses/459ab552-8055-4fa0-a0e9-daee6e2424c6/index.m3u8";
  const VideoPlayerOption = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{ src: videoLink, type: "application/x-mpegURL" }],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <>
      <div>
        <h1>Video Player</h1>
      </div>
      <VideoPlayer options={VideoPlayerOption} onReady={handlePlayerReady} />
    </>
  );
}

export default App;
