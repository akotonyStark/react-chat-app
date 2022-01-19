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
  const [messages, setMessages] = useState([])

  const fetchMessages = async () => {
    const response = db.collection('messages')
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
  }, [])

  return (
    <AppContext.Provider value={[loggedInUser, messages]}>
      {loggedInUser ? <ChatApp loggedInUser={loggedInUser} /> : <Login />}
    </AppContext.Provider>
  )
}

export default App
