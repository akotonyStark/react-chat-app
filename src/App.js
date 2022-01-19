import React, { useState } from 'react'
import './App.css'
import Login from './layout/Login'
import ChatApp from './layout/ChatApp'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { createContext } from 'react'
import { auth, db } from './store/firebase.config'

export const AppContext = createContext()

function App() {
  const [loggedInUser] = useAuthState(auth)
  //console.log(loggedInUser)
  const [messages, setMessages] = useState([])
  const [activeChat, setActiveChat] = useState([])

  const fetchMessages = async () => {
    const response = db.collection('messages').orderBy('createdAt')
    const data = await response.get()
    data.docs.forEach((item) => {
      //setMessages([...messages, item.data()])
      messages.push(item.data())
      setMessages([...messages])
    })
  }

  React.useEffect(() => {
    fetchMessages()

    return () => {
      //  / cleanup
    }
  }, [AppContext])

  return (
    <AppContext.Provider
      value={[loggedInUser, messages, setMessages, activeChat, setActiveChat]}
    >
      {loggedInUser ? <ChatApp /> : <Login />}
    </AppContext.Provider>
  )
}

export default App
