import React, { useContext } from "react";
import { AppContext } from "../App";

function MainPane() {
  const [loggedInUser, users, setUsers, activeChat, setActiveChat] =
    useContext(AppContext);

  console.log("Users:", users);
  console.log("Active chat:", activeChat);

  return (
    <>
      <div style={styles.chatBuddy}>
        {activeChat.length > 0 ? activeChat[0].name : ""}
      </div>
      <div style={styles.chatPage}>
        {activeChat.map(
          (message, index) =>
            message.uid !== loggedInUser.uid &&
            message.sentTo === loggedInUser.uid && (
              <div key={index} style={styles.incoming}>
                <div style={styles.incomingBubble}>{message.text}</div>
              </div>
            )
        )}

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
    </>
  );
}

export default MainPane;

const styles = {
  chatBuddy: {
    height: 40,
    backgroundColor: "#283747",
    boxShadow: "2px #fff",
    fontSize: 18,
    paddingLeft: 20,
  },
  incomingBubble: {
    border: "0px solid #283747",
    borderRadius: 20,
    background: "#fff",
    color: "#283747",
    padding: 20,
  },
  outgoingBubble: {
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
