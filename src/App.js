import React, { useState } from "react";
import "./App.css";
import Login from "./layout/Login";
import ChatApp from "./layout/ChatApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { createContext } from "react";
import { auth, db } from "./store/firebase.config";

export const AppContext = createContext();

function App() {
  const [loggedInUser] = useAuthState(auth);
  //console.log(loggedInUser);
  const [users, setUsers] = useState([]);
  const [activeChat, setActiveChat] = useState([]);

  const fetchData = async () => {
    const response = db.collection("users").orderBy("lastSeen");
    const data = await response.get();
    data.docs.forEach((item) => {
      //setMessages([...messages, item.data()])
      users.push(item.data());
      setUsers([...users]);
    });
  };

  React.useEffect(() => {
    fetchData();

    return () => {
      //  / cleanup
    };
  }, [AppContext]);

  return (
    <AppContext.Provider
      value={[loggedInUser, users, setUsers, activeChat, setActiveChat]}
    >
      {loggedInUser ? <ChatApp /> : <Login />}
    </AppContext.Provider>
  );
}

export default App;
