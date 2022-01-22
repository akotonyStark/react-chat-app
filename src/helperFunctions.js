import { db, auth } from "./store/firebase.config";
import firebase from "firebase/compat/app";

export const handleGoogleSignOut = () => {
  if (auth.currentUser) {
    auth.signOut();
  }
};

export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };



export const handleBlock = (activeChat, loggedInUser) => {
    // alert(`Are you sure you wanna block  ${activeChat[0].name} ?`);
    db.collection("users")
      .doc(loggedInUser.uid)
      .update({
        blockedStatus: {
          status: "blocked",
          blockedID: activeChat[0].uid,
        },
      });
    alert(`Blocked from  ${activeChat[0].name}`);
  };

export const handleMessageSend = async (e, activeChat, loggedInUser, setActiveChat, outgoingMessage, setOutgoingMessage) => {
    let obj = {};
    if (e.key === "Enter") {
      const response = db.collection("users");
      const data = await response.get();
      //find user whose id is equal to the current chat
      let canSend = false;
      // console.log("Chatting with:", activeChat[0].uid);
      // console.log("I am:", loggedInUser.uid);
      data.docs.forEach((user) => {
        if (user.data().uid === activeChat[0].uid) {
          canSend = true;

          obj = {
            text: outgoingMessage,
            sentTo: activeChat[0].uid,
            sentFrom: loggedInUser.uid,
            createdAt: new Date().toDateString(),
          };

          if (canSend) {
            //update chat thread of recipient
            db.collection("users")
              .doc(user.data().uid)
              .update({
                messages: [...activeChat[0].messages, obj],
              });

            //update logged in user's chat thread
            db.collection("users")
              .doc(loggedInUser.uid)
              .update({
                messages: [...activeChat[0].messages, obj],
              });
          }

          const updatedChat = [...activeChat[0].messages, obj];
          const [chat] = activeChat;
          chat.messages = updatedChat;
          setOutgoingMessage("");
          setActiveChat([chat]);
        }
      });
    }
  };

  
  export const streamChatList = (userId, observer) => {
    return db.collection("users")
    //.doc(userId)
    // .collection("messages")
    // .orderBy("createdAt")
    .onSnapshot(observer)

  };

