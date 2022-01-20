import React, { useState, useContext } from "react";
import { db, firebase, auth } from "../store/firebase.config";
import { AppContext } from "../App";

function BottomPane() {
  const [outgoingMessage, setOutgoingMessage] = useState("");
  const [loggedInUser, users, setUsers, activeChat, setActiveChat] =
    useContext(AppContext);

  const [friend] = activeChat;

  const handleMessageSend = async (e) => {
    // if (e.key === "Enter") {
    //   const response = db.collection("users");
    //   const obj = {
    //     email: loggedInUser.email,
    //     lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
    //     messages: [
    //       {
    //         text: outgoingMessage,
    //         sentTo: friend.uid,
    //         createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    //       },
    //     ],
    //     name: auth.currentUser.displayName,
    //     profilePic: auth.currentUser.photoURL,
    //     uid: loggedInUser.uid,
    //   };
    //   const data = await response.add(obj);
    setOutgoingMessage("");
    //setMessages([...users, obj]);
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
