import React, { useContext } from "react";
import { AppContext } from "../App";
import {handleBlock} from "../helperFunctions"

function MainPane({ showBlockButton }) {
  const [loggedInUser, , , activeChat] = useContext(AppContext);

  
  return (
    <>
      <div style={styles.chatBuddy}>
        <div style={styles.friend}>
          {activeChat.length > 0 ? activeChat[0].name : ""}
        </div>
        <div style={styles.block}>
          {showBlockButton ? (
            <button
              className="auth"
              style={styles.blockButt}
              onClick={() => handleBlock(activeChat, loggedInUser)}
            >
              Block user
            </button>
          ) : null}
        </div>
      </div>
      <div style={styles.chatPage}>
        {activeChat[0].messages.map((message, index) =>
          message.sentTo === loggedInUser.uid && activeChat[0].uid !== loggedInUser.uid && message.sentFrom  === activeChat[0].uid ? (
            <div key={index} style={styles.incoming}>
              <div style={styles.incomingBubble}>{message.text}</div>
            </div>
          ) : message.sentTo === activeChat[0].uid && activeChat[0].uid !== loggedInUser.uid && message.sentFrom === loggedInUser.uid ? (
            <div key={index} style={styles.outgoing}>
              <div style={styles.outgoingBubble}>{message.text}</div>
            </div>
          ) : null
        )}
        
    
      </div>
    </>
  );
}

export default MainPane;

const styles = {
  chatBuddy: {
    height: 40,
    backgroundColor: "#283747",
    fontSize: 16,
    paddingLeft: 20,
    display: "flex",
  },

  friend: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  block: {
    width: "50%",
    display: "flex",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  blockButt: {
    borderRadius: 50,
    width: 100,
    height: 30,
    color: "white",
    background: "linear-gradient(red,#dcf8c6)",
  },
  incomingBubble: {
    border: "0px solid #283747",
    borderRadius: 20,
    backgroundColor: "#fff",
    color: "#283747",
    padding: 20,
    maxWidth: "55%",
  },
  outgoingBubble: {
    border: "0px solid #283747",
    borderRadius: 20,
    backgroundColor: "#dcf8c6",
    color: "#080808",
    padding: 20,
    maxWidth: "55%",
  },

  chatPage: {
    display: "flex",
    flexDirection: "column",
    width: "95%",
    margin: 30,
    position: "absolute",
    bottom: 70,
    maxHeight: "75%",
    overflow: "auto",
  },
  incoming: {
    display: "flex",
    flexBasis: "auto",
    justifyContent: "flex-start",
    marginBottom: 10,
    fontSize: 14,
  },
  outgoing: {
    display: "flex",
    flexBasis: "auto",
    justifyContent: "flex-end",
    marginBottom: 10,
    fontSize: 14,
    color: "#283747",
  },
};
