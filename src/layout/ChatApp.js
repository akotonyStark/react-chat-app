import React, { useState } from "react";
import BottomPane from "../components/BottomPane";
import LeftPane from "../components/LeftPane";
import MainPane from "../components/MainPane";

function ChatApp() {
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [showBlockButton, setShowBlockButton] = useState(false);
  return (
    <div className="App">
      <div className="content">
        <div className="leftPane">
          <LeftPane
            setShowMessageBox={setShowMessageBox}
            setShowBlockButton={setShowBlockButton}
          />
        </div>
        <div className="mainPane">
          <MainPane
            showBlockButton={showBlockButton}
            setShowMessageBox={setShowMessageBox}
          />
          <div className="bottomPane">
            {showMessageBox ? <BottomPane /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatApp;
