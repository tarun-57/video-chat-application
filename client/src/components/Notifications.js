import React, { useContext } from 'react';
import { SocketContext } from '../SocketContext';
import styles from '../styles/Notifications.module.css';
const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div className={styles["notifications-sec"]}>
          <h1>{call.name} is calling: </h1>
          <button type='button' onClick={answerCall} className={styles["button"]}>
            <p>Answer</p>
          </button>
        </div>
      )}
    </>
  );
};
export default Notifications;