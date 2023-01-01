import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faPhoneSlash, faClipboardList, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../SocketContext";
import styles from "../styles/Options.module.css";

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  const [icon, setIcon] = useState(faClipboardList);
  return (
    <div className={styles["options-sec"]}>
      <form>
        <div className={styles["options"]}>
          <div className={styles["info"]}>
            <p>Account Info</p>
            <input
              label="Name"
              value={name}
              placeholder="Type your name"
              onChange={(e) => setName(e.target.value)}
              className={styles["input"]}
            />
            <CopyToClipboard text={me}>
              <button type="button" onClick={()=>setIcon(faClipboardCheck)} className={styles["button"]}>
                <FontAwesomeIcon icon={icon} />
                <p>Copy Your ID</p>
              </button>
            </CopyToClipboard>
          </div>

          <div className={styles["info"]}>
            <p>Make a call</p>
            <input
              label="ID to call"
              value={idToCall}
              placeholder="Paste your friend's ID"
              onChange={(e) => setIdToCall(e.target.value)}
              className={styles["input"]}
            />
            {callAccepted && !callEnded ? (
              <button type="button" onClick={leaveCall} className={[styles["button"], styles["hang-button"]].join(' ')}>
                <FontAwesomeIcon icon={faPhoneSlash} />
                <p>Hang Up</p>
              </button>
            ) : (
              <button onClick={() => callUser(idToCall)} type="button" className={styles["button"]}>
                <FontAwesomeIcon icon={faPhone} />
                <p>Call</p>
              </button>
            )}
          </div>
        </div>
        {children}
      </form>
    </div>
  );
};

export default Sidebar;
