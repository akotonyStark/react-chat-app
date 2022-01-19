import React from "react";
import { useSelector } from "react-redux";

function MainPane() {
  const activeChat = useSelector((state) => state.activeChat);
  const incomingMessages = activeChat.messages;
  const outgoingMessages = activeChat.outgoing;
  //console.log("Out:", outgoingMessages);

  return (
    <div style={styles.chatPage}>
      {incomingMessages.map((message, index) => (
        <div key={index} style={styles.incoming}>
          <div style={styles.incomingBubble}>{message}</div>
        </div>
      ))}

      {outgoingMessages.map((message, index) => (
        <div key={index} style={styles.outgoing}>
          <div style={styles.outgoingBubble}>{message}</div>
        </div>
      ))}
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
