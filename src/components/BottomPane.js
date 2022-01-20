import React, { useState, useEffect, useContext } from "react";
import { db } from "../store/firebase.config";
import { AppContext } from "../App";

function BottomPane() {
  const [outgoingMessage, setOutgoingMessage] = useState("");
  const [loggedInUser, , , activeChat, setActiveChat] = useContext(AppContext);

  useEffect(() => {
    console.log("state changed");
  }, [activeChat]);

  const handleMessageSend = async (e) => {
    let obj = {};
    if (e.key === "Enter") {
      const response = db.collection("users");
      const data = await response.get();
      //find user whose id is equal to the current chat
      let canSend = false;
      data.docs.forEach((user) => {
        if (user.data().uid === activeChat[0].uid) {
          // console.log("Active ID", activeChat[0].uid);
          canSend = true;

          obj = {
            text: outgoingMessage,
            sentTo: activeChat[0].uid,
            sentFrom: loggedInUser.uid,
            createdAt: new Date().toDateString(),
          };

          if (canSend) {
            setOutgoingMessage("");

            db.collection("users")
              .doc(user.id)
              .update({
                messages: [...activeChat[0].messages, obj],
              });
          } else {
            console.log("create new message thread");
          }
          const updatedChat = [...activeChat[0].messages, obj];
          const [chat] = activeChat;
          chat.messages = updatedChat;
          setActiveChat([chat]);
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
          placeholder="Type your message..."
        />
      </form>
    </div>
  );
}

export default BottomPane;

const styles = {
  inputChat: {
    width: "99%",
    height: 50,
    paddingLeft: 5,
    // borderRadius: 50,
    border: "1px solid #f1f1f1",
  },
};
