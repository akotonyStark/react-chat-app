import React, { useState, useContext } from "react";
import { db, firebase, auth } from "../store/firebase.config";
import { AppContext } from "../App";

function BottomPane() {
  const [outgoingMessage, setOutgoingMessage] = useState("");
  const [loggedInUser, messages, setMessages, activeChat, setActiveChat] =
    useContext(AppContext);

  const [friend] = activeChat;

  const handleMessageSend = async (e) => {
    if (e.key === "Enter") {
      const response = db.collection("messages");
      const newChatMessage = {
        text: outgoingMessage,
        uid: loggedInUser.uid,
        sentTo: friend.uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: auth.currentUser.photoURL,
        name: auth.currentUser.displayName,
      };
      const data = await response.add(newChatMessage);
      setOutgoingMessage("");
      setMessages([...messages, newChatMessage]);
    }
  };
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="inputChat"
          style={styles.inputChat}
          type="text"
          value={outgoingMessage}
          onChange={(e) => setOutgoingMessage(e.target.value)}
          onKeyPress={(e) => handleMessageSend(e)}
          placeholder="your message.."
        />
      </form>
    </div>
  );
}

export default BottomPane;

const styles = {
  inputChat: {
    width: "44vh",
    height: 40,
    borderRadius: 50,
    paddingLeft: 20,
    paddingRight: 10,
    marginRight: 20,
    border: "1px solid #f1f1f1",
  },
};
