import React, { useState } from "react";
import "./App.css";
import Login from "./layout/Login";
import ChatApp from "./layout/ChatApp";
import { useAuthState } from "react-firebase-hooks/auth";
import {useCollectionData} from 'react-firebase-hooks/firestore';
import { createContext } from "react";
import { auth, db } from "./store/firebase.config";


export const AppContext = createContext();

function App() {
  const [loggedInUser] = useAuthState(auth);
  
  const [users, setUsers] = useState([]);
  const [activeChat, setActiveChat] = useState([
    {
      messages: [
        {
          text: "",
          sentTo: "",
          sentFrom: "",
          createdAt: "",
        },
      ],
    },
  ]);

  const messagesRef = db.collection(`users`)
  const query  = messagesRef.orderBy("lastSeen");
  const [messages] = useCollectionData(query, {loggedInUser: 'id'})

  const fetchUsers = async () => {
    const response = db.collection("users").orderBy("lastSeen");
    const data = await response.get();
    data.docs.forEach((item) => {
      users.push(item.data());
      //console.log("users", users);
      setUsers([...users]);
    });
  };

  React.useEffect(() => {
    fetchUsers();
    return () => {
      console.log('deploy build')
    };
  }, []);

  return (
    <AppContext.Provider
      value={[loggedInUser, users, setUsers, activeChat, setActiveChat]}
    >
      {loggedInUser ? <ChatApp /> : <Login />}
    </AppContext.Provider>
  );
}

export default App;