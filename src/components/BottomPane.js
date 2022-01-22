import React, { useState,  useContext } from "react";
import { db , firebase} from "../store/firebase.config";
import { AppContext } from "../App";
import {useCollectionData} from "react-firebase-hooks/firestore"
import {handleMessageSend, streamChatList} from '../helperFunctions'

function BottomPane() {
  const [outgoingMessage, setOutgoingMessage] = useState("");
  const [loggedInUser, , , activeChat, setActiveChat] = useContext(AppContext);

  React.useEffect(() => {  
    const unsubscribe = streamChatList(loggedInUser.uid, {
      next: querySnapshot => {
        const updatedChatThread = querySnapshot.docs.map(docSnapshot => docSnapshot.data())
        console.log(updatedChatThread)
        setActiveChat(updatedChatThread)
      },
      error: () => console.log('error loadin chats')
    });
    return unsubscribe;
  },[loggedInUser.uid, setActiveChat]);

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="inputChat"
          style={styles.inputChat}
          type="text"
          value={outgoingMessage}
          onChange={(e) => setOutgoingMessage(e.target.value)}
          onKeyPress={(e) => handleMessageSend(e, activeChat, loggedInUser, setActiveChat, outgoingMessage, setOutgoingMessage)}
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