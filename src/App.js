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
      //  / cleanup
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
