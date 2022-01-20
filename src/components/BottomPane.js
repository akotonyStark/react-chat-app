import React, { useState, useContext } from "react";
import { db, firebase, auth } from "../store/firebase.config";
import { AppContext } from "../App";

function BottomPane() {
  const [outgoingMessage, setOutgoingMessage] = useState("");
  const [loggedInUser, users, setUsers, activeChat, setActiveChat] =
    useContext(AppContext);

  const handleMessageSend = async (e) => {
    if (e.key === "Enter") {
      const response = db.collection("users");
      const data = await response.get();
      //find user whose id is equal to the current chat
      let canSend = false;
      data.docs.forEach((user) => {
        if (user.data().uid === activeChat[0].uid) {
          // console.log("Active ID", activeChat[0].uid);
          canSend = true;

          const obj = {
            text: outgoingMessage,
            sentTo: activeChat[0].uid,
            sentFrom: loggedInUser.uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          };

          if (canSend) {
            //const data = await response.add(obj);
            //console.log("message to send:", obj);
            setOutgoingMessage("");
            //setMessages([...users, obj]);
            db.collection("users")
              .doc(user.id)
              .update({
                // email: activeChat[0].email,
                // lastSeen: activeChat[0].lastSeen,
                messages: [obj],
                // name: activeChat[0].name,
                // profilePic: activeChat[0].profilePic,
                // uid: activeChat[0].uid,
              });
          } else {
            console.log("create new message thread");
          }
        }
      });
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
    width: "99%",
    height: 40,
    // borderRadius: 50,
    border: "1px solid #f1f1f1",
  },
};
