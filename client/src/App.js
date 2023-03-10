import React from'react';
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';
import styles from './styles/App.module.css';

function App() {
  return (
    <div className={[["App"], styles["body"]].join(' ')}>
      <div className={styles["heading"]}><h1>Video Chat</h1></div>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}

export default App;
