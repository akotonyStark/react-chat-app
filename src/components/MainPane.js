import React, { useContext } from "react";
import { AppContext } from "../App";

function MainPane() {
  const [loggedInUser, users, setUsers, activeChat, setActiveChat] =
    useContext(AppContext);

  //console.log("Users:", users);
  //console.log("Active chat:", activeChat);

  return (
    <div style={styles.chatPage}>
      {/* {activeChat.map(
        (message, index) =>
          message.uid !== loggedInUser.uid && (
            <div key={index} style={styles.incoming}>
              <div style={styles.incomingBubble}>
                <p style={{ color: "#009688" }}>{message.name}</p>
                {message.text}
              </div>
            </div>
          )
      )} */}

      {/* {messages.map(
        (message, index) =>
          message.uid === loggedInUser.uid &&
          message.sentTo === activeChat.uid && (
            <div key={index} style={styles.outgoing}>
              <div style={styles.outgoingBubble}>{message.text}</div>
            </div>
          )
      )} */}
    </div>
  );
}

export default MainPane;

const styles = {
  incomingBubble: {
    // height: 100,
    //width: 400,
    border: "0px solid #283747",
    borderRadius: 20,
    background: "#fff",
    color: "#283747",
    padding: 20,
  },
  outgoingBubble: {
    // height: 100,
    //width: 400,
    border: "0px solid #283747",
    borderRadius: 20,
    background: "#fff",
    backgroundColor: "#dcf8c6",
    padding: 20,
  },

  chatPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: 30,
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
