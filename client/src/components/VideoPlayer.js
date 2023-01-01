import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";
import styles from "../styles/VideoPlayer.module.css";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <div className={styles["videos-sec"]}>
      <div className={styles["container"]}>
        <p>{name || "Name"}</p>
        <video
          playsInline
          muted
          ref={myVideo}
          autoPlay
          className={styles["video-sec"]}
        />
      </div>
      {callAccepted && !callEnded && (
        <div className={styles["container"]}>
          <p>{call.name || "Name"}</p>
          <video
            playsInline
            ref={userVideo}
            autoPlay
            className={styles["video-sec"]}
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
